import type { ResumeData } from '../../../types/resume';
import { EditableField } from '../../editors/EditableField';
import { EditableList } from '../../editors/EditableList';

interface Props {
  readonly d: ResumeData;
  readonly onUpdate: (d: ResumeData) => void;
}

export function MinimalSkills({ d, onUpdate }: Props) {
  return (
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
                    <EditableField value={item} onChange={(v) => onItemChange(ii, v)} />{ii < sg.items.length - 1 ? ',  ' : ''}
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
  );
}
