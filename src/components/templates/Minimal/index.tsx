import type { ResumeData } from '../../../types/resume';
import { EditableField } from '../../editors/EditableField';
import { MinimalHeader } from './MinimalHeader';
import { MinimalExperienceItem } from './MinimalExperience';
import { MinimalRight } from './MinimalRight';
import './Minimal.less';

interface Props {
  readonly d: ResumeData;
  readonly onUpdate: (d: ResumeData) => void;
}

export function MinimalTemplate({ d, onUpdate }: Props) {
  return (
    <div className="m-resume-wrapper">
      <div className="m-resume">

        <MinimalHeader d={d} onUpdate={onUpdate} />

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
                <MinimalExperienceItem key={idx} job={job} idx={idx} d={d} onUpdate={onUpdate} />
              ))}
            </section>
          </div>

          {/* Right column */}
          <MinimalRight d={d} onUpdate={onUpdate} />
        </div>

      </div>
    </div>
  );
}
