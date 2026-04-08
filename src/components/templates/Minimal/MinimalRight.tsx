import type { ResumeData } from '../../../types/resume';
import { EditableField } from '../../editors/EditableField';
import { MinimalSkills } from './MinimalSkills';

interface Props {
  readonly d: ResumeData;
  readonly onUpdate: (d: ResumeData) => void;
}

export function MinimalRight({ d, onUpdate }: Props) {
  return (
    <div className="m-col-right">
      <MinimalSkills d={d} onUpdate={onUpdate} />

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

      <section className="m-section">
        <div className="m-section-title">Achievements</div>
        {d.achievements.map((a, ai) => (
          <div key={ai} className="m-ach">
            <div className="m-ach-title">
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
  );
}
