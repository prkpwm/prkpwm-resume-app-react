import { useState } from 'react';
import { resumeData as defaultData } from '../data/resumeData';
import type { ResumeData } from '../types/resume';

const STORAGE_KEY = 'resume-data';

function loadFromStorage(): ResumeData {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) return JSON.parse(raw) as ResumeData;
  } catch {
    // ignore
  }
  return defaultData;
}

export function useResumeData() {
  const [data, setData] = useState<ResumeData>(loadFromStorage);

  const updateData = (next: ResumeData) => {
    setData(next);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  };

  const exportJson = () => {
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'resume.json';
    a.click();
    URL.revokeObjectURL(url);
  };

  const importJson = (file: File): Promise<void> => {
    return new Promise((resolve, reject) => {
      file.text()
        .then((text) => {
          try {
            const parsed = JSON.parse(text) as ResumeData;
            validateResumeData(parsed);
            updateData(parsed);
            resolve();
          } catch (err) {
            reject(err);
          }
        })
        .catch(() => reject(new Error('Failed to read file')));
    });
  };

  const resetToDefault = () => {
    localStorage.removeItem(STORAGE_KEY);
    setData(defaultData);
  };

  return { data, exportJson, importJson, resetToDefault };
}

function validateResumeData(data: unknown): void {
  if (typeof data !== 'object' || data === null) throw new Error('Invalid JSON: not an object');
  const d = data as Record<string, unknown>;
  const required: (keyof ResumeData)[] = ['name', 'title', 'contact', 'summary', 'skills', 'experience', 'education'];
  for (const key of required) {
    if (!(key in d)) throw new Error(`Invalid resume JSON: missing field "${key}"`);
  }
}
