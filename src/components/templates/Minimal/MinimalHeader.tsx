import type { ResumeData } from '../../../types/resume';
import { EditableField } from '../../editors/EditableField';

interface Props {
  readonly d: ResumeData;
  readonly onUpdate: (d: ResumeData) => void;
}

export function MinimalHeader({ d, onUpdate }: Props) {
  const [fn, ln] = d.name.split('\n');
  return (
    <header className="m-header">
      <div className="m-header-left">
        <div>
          <div className="m-name">
            <EditableField value={fn ?? ''} onChange={(v) => onUpdate({ ...d, name: `${v}\n${ln ?? ''}` })} />
            {' '}
            <EditableField value={ln ?? ''} onChange={(v) => onUpdate({ ...d, name: `${fn ?? ''}\n${v}` })} />
          </div>
          <div className="m-title">
            <EditableField value={d.title.replace('\n', ' ')} onChange={(v) => onUpdate({ ...d, title: v })} />
          </div>
        </div>
      </div>
      <div className="m-contacts">
        <EditableField value={d.contact.email} onChange={(v) => onUpdate({ ...d, contact: { ...d.contact, email: v } })} />
        <EditableField value={d.contact.phone} onChange={(v) => onUpdate({ ...d, contact: { ...d.contact, phone: v } })} />
        <EditableField value={d.contact.website} onChange={(v) => onUpdate({ ...d, contact: { ...d.contact, website: v } })} />
        <EditableField value={d.contact.linkedin} onChange={(v) => onUpdate({ ...d, contact: { ...d.contact, linkedin: v } })} />
        <EditableField value={d.contact.location} onChange={(v) => onUpdate({ ...d, contact: { ...d.contact, location: v } })} />
      </div>
    </header>
  );
}
