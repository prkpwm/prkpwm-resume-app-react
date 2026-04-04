import { useState, useRef, useEffect } from 'react';
import './EditableField.less';

interface Props {
  readonly value: string;
  readonly onChange: (val: string) => void;
  readonly multiline?: boolean;
  readonly className?: string;
  readonly placeholder?: string;
}

export function EditableField({ value, onChange, multiline = false, className = '', placeholder = 'Click to edit' }: Props) {
  const [editing, setEditing] = useState(false);
  const [draft, setDraft] = useState(value);
  const ref = useRef<HTMLTextAreaElement & HTMLInputElement>(null);

  useEffect(() => {
    if (editing) ref.current?.focus();
  }, [editing]);

  const commit = () => {
    setEditing(false);
    if (draft !== value) onChange(draft);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') { setDraft(value); setEditing(false); }
    if (e.key === 'Enter' && !multiline) { e.preventDefault(); commit(); }
  };

  if (editing) {
    const sharedProps = {
      ref,
      className: `ef-input ${className}`,
      value: draft,
      placeholder,
      onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setDraft(e.target.value),
      onBlur: commit,
      onKeyDown: handleKeyDown,
    };
    return multiline
      ? <textarea {...sharedProps} rows={3} />
      : <input {...sharedProps} type="text" />;
  }

  return (
    <span
      className={`ef-display ${className}`}
      onClick={() => { setDraft(value); setEditing(true); }}
      title="Click to edit"
    >
      {value || <span className="ef-placeholder">{placeholder}</span>}
    </span>
  );
}
