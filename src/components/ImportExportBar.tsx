import { useRef, useState } from 'react';
import './ImportExportBar.less';

interface Props {
  readonly onExport: () => void;
  readonly onImport: (file: File) => Promise<void>;
  readonly onReset: () => void;
  readonly children?: React.ReactNode;
}

export function ImportExportBar({ onExport, onImport, onReset, children }: Props) {
  const fileRef = useRef<HTMLInputElement>(null);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setError(null);
    setSuccess(false);
    try {
      await onImport(file);
      setSuccess(true);
      setTimeout(() => setSuccess(false), 2500);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Import failed');
    }
    // reset input so same file can be re-imported
    e.target.value = '';
  };

  return (
    <div className="ie-bar">
      {children && <>{children}<div className="ie-divider" /></>}
      <span className="ie-label">Data</span>

      <button className="ie-btn" onClick={onExport} title="Export JSON">
        <DownloadIcon /> Export
      </button>

      <button className="ie-btn" onClick={() => fileRef.current?.click()} title="Import JSON">
        <UploadIcon /> Import
      </button>

      <button className="ie-btn ie-btn--ghost" onClick={onReset} title="Reset to default">
        <ResetIcon /> Reset
      </button>

      <input
        ref={fileRef}
        type="file"
        accept=".json,application/json"
        style={{ display: 'none' }}
        onChange={handleFileChange}
      />

      {success && <span className="ie-msg ie-msg--ok">✓ Imported</span>}
      {error && <span className="ie-msg ie-msg--err">{error}</span>}
    </div>
  );
}

function DownloadIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" width="13" height="13">
      <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
    </svg>
  );
}

function UploadIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" width="13" height="13">
      <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM6.293 6.707a1 1 0 010-1.414l3-3a1 1 0 011.414 0l3 3a1 1 0 01-1.414 1.414L11 5.414V13a1 1 0 11-2 0V5.414L7.707 6.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
    </svg>
  );
}

function ResetIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" width="13" height="13">
      <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd" />
    </svg>
  );
}
