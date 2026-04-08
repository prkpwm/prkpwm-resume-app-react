import type { ResumeData } from '../../../types/resume';
import { EditableField } from '../../editors/EditableField';
import { Icons, Ico, SectionTitle } from './ClassicIcons';
import { ClassicExperienceItem } from './ClassicExperience';

const achievementIcons: Record<string, React.ReactNode> = {
  'Led Cross-Functional Teams': Icons.leadership,
  'Built Scalable Real-Time Systems': Icons.lightning,
  'Improved Delivery Efficiency': Icons.refresh,
};

interface Props {
  readonly d: ResumeData;
  readonly onUpdate: (d: ResumeData) => void;
}

export function ClassicMain({ d, onUpdate }: Props) {
  const [fn, ln] = d.name.split('\n');
  return (
    <main className="c-main">
      <header className="c-main-header">
        <div className="c-header-name-block">
          <div className="c-header-name">
            <EditableField value={fn ?? ''} onChange={(v) => onUpdate({ ...d, name: `${v}\n${ln ?? ''}` })} />
            {' '}
            <EditableField value={ln ?? ''} onChange={(v) => onUpdate({ ...d, name: `${fn ?? ''}\n${v}` })} />
          </div>
          <div className="c-header-title">
            <EditableField value={d.title.replace('\n', ' ')} onChange={(v) => onUpdate({ ...d, title: v })} />
          </div>
        </div>
        <div className="c-header-contacts">
          <div className="c-header-contact-row">
            <span className="c-hc-item"><Ico>{Icons.mail}</Ico><EditableField value={d.contact.email} onChange={(v) => onUpdate({ ...d, contact: { ...d.contact, email: v } })} /></span>
            <span className="c-hc-item"><Ico>{Icons.phone}</Ico><EditableField value={d.contact.phone} onChange={(v) => onUpdate({ ...d, contact: { ...d.contact, phone: v } })} /></span>
            <span className="c-hc-item"><Ico>{Icons.globe}</Ico><EditableField value={d.contact.website} onChange={(v) => onUpdate({ ...d, contact: { ...d.contact, website: v } })} /></span>
          </div>
          <div className="c-header-contact-row">
            <span className="c-hc-item"><Ico>{Icons.linkedin}</Ico><EditableField value={d.contact.linkedin} onChange={(v) => onUpdate({ ...d, contact: { ...d.contact, linkedin: v } })} /></span>
            <span className="c-hc-item"><Ico>{Icons.pin}</Ico><EditableField value={d.contact.location} onChange={(v) => onUpdate({ ...d, contact: { ...d.contact, location: v } })} /></span>
          </div>
        </div>
      </header>

      <section className="c-main-section">
        <SectionTitle icon={Icons.briefcase} label="PROFESSIONAL EXPERIENCE" />
        {d.experience.map((job, idx) => (
          <ClassicExperienceItem key={idx} job={job} idx={idx} d={d} onUpdate={onUpdate} />
        ))}
      </section>

      <section className="c-main-section">
        <SectionTitle icon={Icons.trophy} label="KEY ACHIEVEMENTS" />
        <div className="c-achievements-grid">
          {d.achievements.map((a, ai) => (
            <div key={ai} className="c-ach-card">
              <div className="c-ach-icon">{achievementIcons[a.title] ?? Icons.trophy}</div>
              <div className="c-ach-title">
                <EditableField value={a.title} onChange={(v) => {
                  const achievements = d.achievements.map((x, i) => i === ai ? { ...x, title: v } : x);
                  onUpdate({ ...d, achievements });
                }} />
              </div>
              <div className="c-ach-desc">
                <EditableField value={a.description} onChange={(v) => {
                  const achievements = d.achievements.map((x, i) => i === ai ? { ...x, description: v } : x);
                  onUpdate({ ...d, achievements });
                }} multiline />
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
