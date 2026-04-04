import { useState } from 'react';
import type { TemplateId } from '../types/template';

const STORAGE_KEY = 'resume-template';

function loadTemplate(): TemplateId {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved === 'classic' || saved === 'minimal') return saved;
  return 'classic';
}

export function useTemplate() {
  const [templateId, setTemplateId] = useState<TemplateId>(loadTemplate);

  const selectTemplate = (id: TemplateId) => {
    setTemplateId(id);
    localStorage.setItem(STORAGE_KEY, id);
  };

  return { templateId, selectTemplate };
}
