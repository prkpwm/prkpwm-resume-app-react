import { TEMPLATES } from '../types/template';
import type { TemplateId } from '../types/template';
import './TemplatePicker.less';

interface Props {
  readonly current: TemplateId;
  readonly onChange: (id: TemplateId) => void;
}

export function TemplatePicker({ current, onChange }: Props) {
  return (
    <div className="tp-wrap">
      <span className="tp-label">Template</span>
      {TEMPLATES.map((t) => (
        <button
          key={t.id}
          className={`tp-btn${current === t.id ? ' tp-btn--active' : ''}`}
          onClick={() => onChange(t.id)}
          title={t.description}
        >
          {t.label}
        </button>
      ))}
    </div>
  );
}
