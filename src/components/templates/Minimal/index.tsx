import mePhoto from '../../../assets/me.png';
import type { ResumeData, WorkExperience } from '../../../types/resume';
import { EditableField } from '../../editors/EditableField';
import { EditableList } from '../../editors/EditableList';
import './Minimal.less';

type Upd = (d: ResumeData) => void;

interface ExpProps {
  readonly job: WorkExperience;
  readonly idx: number;
  readonly d: ResumeData;
  readonly onUpdate: Upd;
}

function ExperienceItem({ job, idx, d, onUpdate }: ExpProps) {
  const upd = (patch: Partial<WorkExperience>) => {
    const experience = d.experience.map((j, i) => i === idx ? { ...j, ...patch } : j);
    onUpdate({ ...d, experience });
  };
  return (
    <div className="m-job">
      <div className="m-job-header">
        <div className="m-job-title-row">
          {job.logo && <img src={job.logo} alt={job.company} className="m-job-logo" />}
          <div>
            <div className="m-job-title">
              <EditableField value={job.title} onChange={(v) => upd({ title: v })} />
            </div>
            <div className="m-job-meta">
              <EditableField value={job.company} onChange={(v) => upd({ company: v })} />
              {' · '}
              <EditableField value={job.location} onChange={(v) => upd({ location: v })} />
              {' · '}
              <EditableField value={job.type} onChange={(v) => upd({ type: v })} />
            </div>
          </div>
        </div>
        <div className="m-job-period">
          <EditableField value={job.period} onChange={(v) => upd({ period: v })} />
        </div>
      </div>
      <ul className="m-job-bullets">
        <EditableList
          items={job.bullets}
          onChange={(bullets) => upd({ bullets })}
          renderItem={(b, i) => (
            <li key={i}>
              <EditableField
                value={b}
                onChange={(v) => upd({ bullets: job.bullets.map((x, xi) => xi === i ? v : x) })}
                multiline
              />
            </li>
          )}
          addLabel="+ bullet"
          inputPlaceholder="New responsibility"
        />
      </ul>
      <div className="m-job-tech">
        <span className="m-job-tech-label">Stack:</span>
        <EditableList
          items={job.tech}
          onChange={(tech) => upd({ tech })}
          renderItem={(t, i) => (
            <span key={i}>
              <EditableField
                value={t}
                onChange={(v) => upd({ tech: job.tech.map((x, xi) => xi === i ? v : x) })}
              />{i < job.tech.length - 1 ? ' · ' : ''}
            </span>
          )}
          addLabel="+ tech"
          inputPlaceholder="Technology"
        />
      </div>
    </div>
  );
}

interface MinimalProps {
  readonly d: ResumeData;
  readonly onUpdate: Upd;
}

export function MinimalTemplate({ d, onUpdate }: MinimalProps) {
  const [fn, ln] = d.name.split('\n');
  return (
    <div className="m-resume-wrapper">
      <div className="m-resume">

        {/* Header */}
        <header className="m-header">
          <div className="m-header-left">
            <img src={mePhoto} alt={d.name.replace('\n', ' ')} className="m-photo" />
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

        <div className="m-body">
          {/* Left column */}
          <div className="m-col-left">
            <section className="m-section">
              <div className="m-section-title">Profile</div>
              <p className="m-summary">
                <EditableField value={d.summary} onChange={(v) => onUpdate({ ...d, summary: v })} multiline />
              </p>
            </section>

            <section className="m-section">
              <div className="m-section-title">Experience</div>
              {d.experience.map((job, idx) => (
                <ExperienceItem key={idx} job={job} idx={idx} d={d} onUpdate={onUpdate} />
              ))}
            </section>

            <section className="m-section">
              <div className="m-section-title">Achievements</div>
              {d.achievements.map((a, ai) => (
                <div key={ai} className="m-ach">
                  <div className="m-ach-title">
                    {a.icon}{' '}
                    <EditableField value={a.title} onChange={(v) => {
                      const achievements = d.achievements.map((x, i) => i === ai ? { ...x, title: v } : x);
                      onUpdate({ ...d, achievements });
                    }} />
                  </div>
                  <div className="m-ach-desc">
                    <EditableField value={a.description} onChange={(v) => {
                      const achievements = d.achievements.map((x, i) => i === ai ? { ...x, description: v } : x);
                      onUpdate({ ...d, achievements });
                    }} multiline />
                  </div>
                </div>
              ))}
            </section>
          </div>

          {/* Right column */}
          <div className="m-col-right">
            <section className="m-section">
              <div className="m-section-title">Skills</div>
              {d.skills.map((sg, si) => {
                const onCatChange = (v: string) => {
                  const skills = d.skills.map((s, i) => i === si ? { ...s, category: v } : s);
                  onUpdate({ ...d, skills });
                };
                const onItemsChange = (items: string[]) => {
                  const skills = d.skills.map((s, i) => i === si ? { ...s, items } : s);
                  onUpdate({ ...d, skills });
                };
                const onItemChange = (ii: number, v: string) => {
                  const skills = d.skills.map((s, i) => i === si
                    ? { ...s, items: s.items.map((x, xi) => xi === ii ? v : x) }
                    : s);
                  onUpdate({ ...d, skills });
                };
                return (
                  <div key={si} className="m-skill-group">
                    <div className="m-skill-cat">
                      <EditableField value={sg.category} onChange={onCatChange} />
                    </div>
                    <div className="m-skill-items">
                      <EditableList
                        items={sg.items}
                        onChange={onItemsChange}
                        renderItem={(item, ii) => (
                          <span key={item}>
                            <EditableField value={item} onChange={(v) => onItemChange(ii, v)} />
                          </span>
                        )}
                        addLabel="+ skill"
                        inputPlaceholder="Skill"
                      />
                    </div>
                  </div>
                );
              })}
            </section>

            <section className="m-section">
              <div className="m-section-title">Education</div>
              <div className="m-edu-degree">
                <EditableField value={d.education.degree} onChange={(v) => onUpdate({ ...d, education: { ...d.education, degree: v } })} />
              </div>
              <div className="m-edu-school">
                <EditableField value={d.education.school} onChange={(v) => onUpdate({ ...d, education: { ...d.education, school: v } })} />
              </div>
              <div className="m-edu-period">
                <EditableField value={d.education.period} onChange={(v) => onUpdate({ ...d, education: { ...d.education, period: v } })} />
              </div>
            </section>

            <section className="m-section">
              <div className="m-section-title">Strengths</div>
              {d.strengths.map((s, si) => (
                <div key={si} className="m-strength">
                  <div className="m-strength-title">
                    {s.icon}{' '}
                    <EditableField value={s.title} onChange={(v) => {
                      const strengths = d.strengths.map((x, i) => i === si ? { ...x, title: v } : x);
                      onUpdate({ ...d, strengths });
                    }} />
                  </div>
                  <div className="m-strength-desc">
                    <EditableField value={s.description} onChange={(v) => {
                      const strengths = d.strengths.map((x, i) => i === si ? { ...x, description: v } : x);
                      onUpdate({ ...d, strengths });
                    }} />
                  </div>
                </div>
              ))}
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
