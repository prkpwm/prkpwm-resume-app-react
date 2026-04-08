import mePhoto from '../../../assets/me.png';
import type { ResumeData } from '../../../types/resume';
import { EditableField } from '../../editors/EditableField';
import { EditableList } from '../../editors/EditableList';
import { Icons, Ico, SidebarSectionTitle } from './ClassicIcons';

interface Props {
  readonly d: ResumeData;
  readonly onUpdate: (d: ResumeData) => void;
}

export function ClassicSidebar({ d, onUpdate }: Props) {
  return (
    <aside className="c-sidebar">
      <div className="c-sb-photo">
        <img src={mePhoto} alt={d.name.replace('\n', ' ')} className="c-sb-photo-img" />
      </div>

      <section className="c-sb-section">
        <SidebarSectionTitle icon={Icons.user} label="SUMMARY" />
        <p className="c-sb-summary">
          <EditableField value={d.summary} onChange={(v) => onUpdate({ ...d, summary: v })} multiline />
        </p>
      </section>

      <section className="c-sb-section">
        <SidebarSectionTitle icon={Icons.code} label="PROFESSIONAL SKILLS" />
        {d.skills.map((sg, si) => (
          <div key={si} className="c-sb-skill-group">
            <div className="c-sb-skill-cat">
              <EditableField value={sg.category} onChange={(v) => {
                const skills = d.skills.map((s, i) => i === si ? { ...s, category: v } : s);
                onUpdate({ ...d, skills });
              }} />
            </div>
            <div className="c-sb-skill-badges">
              <EditableList
                items={sg.items}
                onChange={(items) => {
                  const skills = d.skills.map((s, i) => i === si ? { ...s, items } : s);
                  onUpdate({ ...d, skills });
                }}
                renderItem={(item, ii) => (
                  <span key={ii} className="c-sb-badge">
                    <EditableField value={item} onChange={(v) => {
                      const skills = d.skills.map((s, i) => i === si
                        ? { ...s, items: s.items.map((x, xi) => xi === ii ? v : x) }
                        : s);
                      onUpdate({ ...d, skills });
                    }} />
                  </span>
                )}
                addLabel="+ skill"
                inputPlaceholder="Skill"
              />
            </div>
          </div>
        ))}
      </section>

      <section className="c-sb-section">
        <SidebarSectionTitle icon={Icons.star} label="CORE STRENGTHS" />
        <ul className="c-sb-strengths">
          {d.strengths.map((s, si) => (
            <li key={si}>
              <Ico>{Icons.check}</Ico>
              <EditableField value={s.title} onChange={(v) => {
                const strengths = d.strengths.map((x, i) => i === si ? { ...x, title: v } : x);
                onUpdate({ ...d, strengths });
              }} />
            </li>
          ))}
        </ul>
      </section>

      <section className="c-sb-section">
        <SidebarSectionTitle icon={Icons.graduation} label="EDUCATION" />
        <div className="c-sb-edu-degree">
          <EditableField value={d.education.degree} onChange={(v) => onUpdate({ ...d, education: { ...d.education, degree: v } })} />
        </div>
        <div className="c-sb-edu-school">
          <EditableField value={d.education.school} onChange={(v) => onUpdate({ ...d, education: { ...d.education, school: v } })} />
        </div>
        <div className="c-sb-edu-period">
          <Ico>{Icons.calendar}</Ico>
          <EditableField value={d.education.period} onChange={(v) => onUpdate({ ...d, education: { ...d.education, period: v } })} />
        </div>
      </section>
    </aside>
  );
}
