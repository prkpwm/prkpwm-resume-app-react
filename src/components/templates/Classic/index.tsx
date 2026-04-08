import type { ResumeData } from '../../../types/resume';
import { ClassicSidebar } from './ClassicSidebar';
import { ClassicMain } from './ClassicMain';
import './Classic.less';

interface Props {
  readonly d: ResumeData;
  readonly onUpdate: (d: ResumeData) => void;
}

export function ClassicTemplate({ d, onUpdate }: Props) {
  return (
    <div className="c-resume-wrapper">
      <div className="c-resume">
        <ClassicSidebar d={d} onUpdate={onUpdate} />
        <ClassicMain d={d} onUpdate={onUpdate} />
      </div>
    </div>
  );
}
