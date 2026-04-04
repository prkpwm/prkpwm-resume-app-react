import './App.less';
import type { ResumeData } from './types/resume';
import type { TemplateId } from './types/template';
import { useResumeData } from './hooks/useResumeData';
import { useTemplate } from './hooks/useTemplate';
import { ImportExportBar } from './components/ImportExportBar';
import { TemplatePicker } from './components/TemplatePicker';
import { ClassicTemplate } from './components/templates/Classic';
import { MinimalTemplate } from './components/templates/Minimal';

function ResumeView({ d, templateId }: Readonly<{ d: ResumeData; templateId: TemplateId }>) {
  if (templateId === 'minimal') return <MinimalTemplate d={d} />;
  return <ClassicTemplate d={d} />;
}

export default function App() {
  const { data, exportJson, importJson, resetToDefault } = useResumeData();
  const { templateId, selectTemplate } = useTemplate();
  return (
    <>
      <ImportExportBar onExport={exportJson} onImport={importJson} onReset={resetToDefault}>
        <TemplatePicker current={templateId} onChange={selectTemplate} />
      </ImportExportBar>
      <ResumeView d={data} templateId={templateId} />
    </>
  );
}
