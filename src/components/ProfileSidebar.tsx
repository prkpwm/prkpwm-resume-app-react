import { useState } from 'react';
import type { ResumeProfile } from '../types/resume';
import './ProfileSidebar.less';

interface Props {
  readonly profiles: ResumeProfile[];
  readonly activeId: string;
  readonly onSelect: (id: string) => void;
  readonly onAdd: () => void;
  readonly onDuplicate: (id: string) => void;
  readonly onDelete: (id: string) => void;
  readonly onRename: (id: string, label: string) => void;
}

export function ProfileSidebar({ profiles, activeId, onSelect, onAdd, onDuplicate, onDelete, onRename }: Props) {
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editValue, setEditValue] = useState('');

  const startEdit = (p: ResumeProfile, e: React.MouseEvent) => {
    e.stopPropagation();
    setEditingId(p.id);
    setEditValue(p.label);
  };

  const commitEdit = (id: string) => {
    const trimmed = editValue.trim();
    if (trimmed) onRename(id, trimmed);
    setEditingId(null);
  };

  const handleKeyDown = (e: React.KeyboardEvent, id: string) => {
    if (e.key === 'Enter') commitEdit(id);
    if (e.key === 'Escape') setEditingId(null);
  };

  return (
    <div className="ps-wrap">
      <span className="ps-label">Profiles</span>

      <ul className="ps-list">
        {profiles.map((p) => (
          <li key={p.id} className={`ps-item${p.id === activeId ? ' ps-item--active' : ''}`}>
            <button className="ps-item-select" onClick={() => onSelect(p.id)}>
              {editingId === p.id ? (
                <input
                  className="ps-rename-input"
                  value={editValue}
                  autoFocus
                  onChange={(e) => setEditValue(e.target.value)}
                  onBlur={() => commitEdit(p.id)}
                  onKeyDown={(e) => handleKeyDown(e, p.id)}
                  onClick={(e) => e.stopPropagation()}
                />
              ) : (
                <span className="ps-item-label">{p.label}</span>
              )}
            </button>
            <div className="ps-item-actions">
              <button title="Rename" onClick={(e) => startEdit(p, e)}>✎</button>
              <button title="Duplicate" onClick={(e) => { e.stopPropagation(); onDuplicate(p.id); }}>⧉</button>
              {profiles.length > 1 && (
                <button title="Delete" className="ps-delete" onClick={(e) => { e.stopPropagation(); onDelete(p.id); }}>✕</button>
              )}
            </div>
          </li>
        ))}
      </ul>

      <button className="ps-add-btn" onClick={onAdd}>＋ New</button>
    </div>
  );
}
