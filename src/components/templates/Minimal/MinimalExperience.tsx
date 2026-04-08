import type { ResumeData, WorkExperience } from '../../../types/resume';
import { EditableField } from '../../editors/EditableField';
import { EditableList } from '../../editors/EditableList';

interface Props {
  readonly job: WorkExperience;
  readonly idx: number;
  readonly d: ResumeData;
  readonly onUpdate: (d: ResumeData) => void;
}

export function MinimalExperienceItem({ job, idx, d, onUpdate }: Props) {
  const upd = (patch: Partial<WorkExperience>) => {
    const experience = d.experience.map((j, i) => i === idx ? { ...j, ...patch } : j);
    onUpdate({ ...d, experience });
  };

  return (
    <div className="m-job">
      <div className="m-job-header">
        <div className="m-job-title-row">
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
              />{i < job.tech.length - 1 ? ',  ' : ''}
            </span>
          )}
          addLabel="+ tech"
          inputPlaceholder="Technology"
        />
      </div>
    </div>
  );
}
