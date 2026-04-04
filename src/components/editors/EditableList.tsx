import { useState } from 'react';
import './EditableList.less';

interface Props {
  readonly items: string[];
  readonly onChange: (items: string[]) => void;
  readonly renderItem: (item: string, index: number) => React.ReactNode;
  readonly addLabel?: string;
  readonly inputPlaceholder?: string;
}

export function EditableList({ items, onChange, renderItem, addLabel = '+ Add', inputPlaceholder = 'New item' }: Props) {
  const [adding, setAdding] = useState(false);
  const [draft, setDraft] = useState('');

  const remove = (idx: number) => onChange(items.filter((_, i) => i !== idx));

  const commitAdd = () => {
    const trimmed = draft.trim();
    if (trimmed) onChange([...items, trimmed]);
    setDraft('');
    setAdding(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') { e.preventDefault(); commitAdd(); }
    if (e.key === 'Escape') { setDraft(''); setAdding(false); }
  };

  return (
    <span className="el-wrap">
      {items.map((item, idx) => (
        <span key={idx} className="el-item-wrap">
          {renderItem(item, idx)}
          <button className="el-remove" onClick={() => remove(idx)} title="Remove">✕</button>
        </span>
      ))}
      {adding ? (
        <input
          autoFocus
          className="el-add-input"
          value={draft}
          placeholder={inputPlaceholder}
          onChange={(e) => setDraft(e.target.value)}
          onBlur={commitAdd}
          onKeyDown={handleKeyDown}
        />
      ) : (
        <button className="el-add-btn" onClick={() => setAdding(true)}>{addLabel}</button>
      )}
    </span>
  );
}
