export type TemplateId = 'classic' | 'minimal';

export interface TemplateOption {
  id: TemplateId;
  label: string;
  description: string;
}

export const TEMPLATES: TemplateOption[] = [
  { id: 'classic', label: 'Classic', description: 'Dark sidebar + structured layout' },
  { id: 'minimal', label: 'Minimal', description: 'Clean single-column, print-friendly' },
];
