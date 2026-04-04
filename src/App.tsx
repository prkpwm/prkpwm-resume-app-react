import './App.less';
import type { ResumeData } from './types/resume';
import type { TemplateId } from './types/template';
import { useProfiles } from './hooks/useProfiles';
import { ImportExportBar } from './components/ImportExportBar';
import { TemplatePicker } from './components/TemplatePicker';
import { ProfileSidebar } from './components/ProfileSidebar';
import { ClassicTemplate } from './components/templates/Classic/index';
import { MinimalTemplate } from './components/templates/Minimal/index';

interface ResumeViewProps {
  readonly d: ResumeData;
  readonly templateId: TemplateId;
  readonly onUpdate: (d: ResumeData) => void;
}

function ResumeView({ d, templateId, onUpdate }: ResumeViewProps) {
  if (templateId === 'minimal') return <MinimalTemplate d={d} onUpdate={onUpdate} />;
  return <ClassicTemplate d={d} onUpdate={onUpdate} />;
}

export default function App() {
  const {
    profiles,
    activeProfile,
    addProfile,
    duplicateProfile,
    deleteProfile,
    renameProfile,
    selectProfile,
    updateData,
    selectTemplate,
    exportJson,
    importJson,
    resetToDefault,
  } = useProfiles();

  return (
    <>
      <div className="control-panel">
        <div className="control-inner">
          <ProfileSidebar
            profiles={profiles}
            activeId={activeProfile.id}
            onSelect={selectProfile}
            onAdd={addProfile}
            onDuplicate={duplicateProfile}
            onDelete={deleteProfile}
            onRename={renameProfile}
          />
          <ImportExportBar onExport={exportJson} onImport={importJson} onReset={resetToDefault}>
            <TemplatePicker
              current={activeProfile.templateId as TemplateId}
              onChange={selectTemplate}
            />
          </ImportExportBar>
        </div>
      </div>

      <div className="resume-canvas">
        <ResumeView
          d={activeProfile.data}
          templateId={activeProfile.templateId as TemplateId}
          onUpdate={updateData}
        />
      </div>
    </>
  );
}
