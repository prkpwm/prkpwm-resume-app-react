import { useState } from 'react';
import { resumeData as defaultData } from '../data/resumeData';
import type { ResumeData, ResumeProfile, ProfileStore } from '../types/resume';
import type { TemplateId } from '../types/template';

const STORAGE_KEY = 'resume-profiles';

function generateId(): string {
  return Date.now().toString(36) + Math.random().toString(36).slice(2, 6);
}

function makeDefaultProfile(): ResumeProfile {
  return { id: generateId(), label: 'My Resume', templateId: 'classic', data: defaultData };
}

function loadStore(): ProfileStore {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw) as ProfileStore;
      if (parsed.profiles?.length) return parsed;
    }
  } catch {
    // ignore
  }
  const profile = makeDefaultProfile();
  return { profiles: [profile], activeId: profile.id };
}

function saveStore(store: ProfileStore): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(store));
}

export function useProfiles() {
  const [store, setStore] = useState<ProfileStore>(loadStore);

  const activeProfile = store.profiles.find((p) => p.id === store.activeId) ?? store.profiles[0];

  const commit = (next: ProfileStore) => {
    setStore(next);
    saveStore(next);
  };

  // ── Profile CRUD ──────────────────────────────────────────

  const addProfile = () => {
    const profile: ResumeProfile = { id: generateId(), label: 'New Resume', templateId: 'classic', data: defaultData };
    commit({ profiles: [...store.profiles, profile], activeId: profile.id });
  };

  const duplicateProfile = (id: string) => {
    const src = store.profiles.find((p) => p.id === id);
    if (!src) return;
    const copy: ResumeProfile = { ...src, id: generateId(), label: `${src.label} (copy)` };
    const idx = store.profiles.findIndex((p) => p.id === id);
    const profiles = [...store.profiles];
    profiles.splice(idx + 1, 0, copy);
    commit({ profiles, activeId: copy.id });
  };

  const deleteProfile = (id: string) => {
    if (store.profiles.length === 1) return; // keep at least one
    const profiles = store.profiles.filter((p) => p.id !== id);
    const activeId = store.activeId === id ? profiles[0].id : store.activeId;
    commit({ profiles, activeId });
  };

  const renameProfile = (id: string, label: string) => {
    const profiles = store.profiles.map((p) => p.id === id ? { ...p, label } : p);
    commit({ ...store, profiles });
  };

  const selectProfile = (id: string) => {
    commit({ ...store, activeId: id });
  };

  // ── Active profile data/template ─────────────────────────

  const updateData = (data: ResumeData) => {
    const profiles = store.profiles.map((p) => p.id === activeProfile.id ? { ...p, data } : p);
    commit({ ...store, profiles });
  };

  const selectTemplate = (templateId: TemplateId) => {
    const profiles = store.profiles.map((p) => p.id === activeProfile.id ? { ...p, templateId } : p);
    commit({ ...store, profiles });
  };

  // ── Import / Export ───────────────────────────────────────

  const exportJson = () => {
    const blob = new Blob([JSON.stringify(activeProfile.data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${activeProfile.label.replaceAll(/\s+/g, '-').toLowerCase()}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const importJson = (file: File): Promise<void> => {
    return file.text().then((text) => {
      const parsed = JSON.parse(text) as ResumeData;
      validateResumeData(parsed);
      updateData(parsed);
    });
  };

  const resetToDefault = () => {
    updateData(defaultData);
  };

  return {
    profiles: store.profiles,
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
  };
}

function validateResumeData(data: unknown): void {
  if (typeof data !== 'object' || data === null) throw new Error('Invalid JSON: not an object');
  const d = data as Record<string, unknown>;
  const required: (keyof ResumeData)[] = ['name', 'title', 'contact', 'summary', 'skills', 'experience', 'education'];
  for (const key of required) {
    if (!(key in d)) throw new Error(`Invalid resume JSON: missing field "${key}"`);
  }
}
