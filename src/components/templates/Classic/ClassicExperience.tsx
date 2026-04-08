import type { ResumeData, WorkExperience } from '../../../types/resume';
import { EditableField } from '../../editors/EditableField';
import { EditableList } from '../../editors/EditableList';
import { Icons, Ico } from './ClassicIcons';

interface Props {
  readonly job: WorkExperience;
  readonly idx: number;
  readonly d: ResumeData;
  readonly onUpdate: (d: ResumeData) => void;
}

export function ClassicExperienceItem({ job, idx, d, onUpdate }: Props) {
  const upd = (patch: Partial<WorkExperience>) => {
    const experience = d.experience.map((j, i) => i === idx ? { ...j, ...patch } : j);
    onUpdate({ ...d, experience });
  };

  return (
    <div className="c-job">
      <div className="c-job-top">
        <div className="c-job-left">
          <div className="c-job-dot" />
          <div>
            <div className="c-job-title">
              <EditableField value={job.title} onChange={(v) => upd({ title: v })} />
            </div>
            <div className="c-job-company-row">
              {job.logo && <img src={job.logo} alt={job.company} className="c-job-logo" />}
              <span className="c-job-company">
                <EditableField value={job.company} onChange={(v) => upd({ company: v })} />
                {' — '}
                <EditableField value={job.location} onChange={(v) => upd({ location: v })} />
              </span>
            </div>
          </div>
        </div>
        <div className="c-job-right">
          <span className="c-job-period">
            <Ico>{Icons.calendar}</Ico>
            <EditableField value={job.period} onChange={(v) => upd({ period: v })} />
          </span>
          <span className="c-job-type-badge">
            <EditableField value={job.type} onChange={(v) => upd({ type: v })} />
          </span>
        </div>
      </div>

      <div className="c-job-body">
        <div className="c-job-resp-label">KEY RESPONSIBILITIES</div>
        <ul className="c-job-bullets">
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
        <div className="c-job-tech-row">
          <span className="c-job-tech-label">TECH STACK:</span>
          <EditableList
            items={job.tech}
            onChange={(tech) => upd({ tech })}
            renderItem={(t, i) => (
              <span key={i}>
                <EditableField
                  value={t}
                  onChange={(v) => upd({ tech: job.tech.map((x, xi) => xi === i ? v : x) })}
                />{i < job.tech.length - 1 ? ',  ' : ''}
              </span>
            )}
            addLabel="+ tech"
            inputPlaceholder="Technology"
          />
        </div>
      </div>
    </div>
  );
}
