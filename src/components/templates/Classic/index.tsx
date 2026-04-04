import mePhoto from '../../../assets/me.png';
import type { ResumeData, WorkExperience } from '../../../types/resume';
import './Classic.less';

// ── Icons ──────────────────────────────────────────────────
const Icons = {
  mail: <svg viewBox="0 0 20 20" fill="currentColor"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/></svg>,
  phone: <svg viewBox="0 0 20 20" fill="currentColor"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/></svg>,
  globe: <svg viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z" clipRule="evenodd"/></svg>,
  linkedin: <svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>,
  pin: <svg viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/></svg>,
  user: <svg viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"/></svg>,
  star: <svg viewBox="0 0 20 20" fill="currentColor"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>,
  graduation: <svg viewBox="0 0 20 20" fill="currentColor"><path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"/></svg>,
  briefcase: <svg viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd"/><path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z"/></svg>,
  trophy: <svg viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 1a1 1 0 011 1v1h3a1 1 0 110 2h-.07a7.003 7.003 0 01-5.93 6.93V14h2a1 1 0 110 2H9.5v1a1 1 0 11-2 0v-1H6a1 1 0 110-2h2v-2.07A7.003 7.003 0 012.07 5H2a1 1 0 010-2h3V2a1 1 0 011-1h4z" clipRule="evenodd"/></svg>,
  calendar: <svg viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"/></svg>,
  code: <svg viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"/></svg>,
  check: <svg viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>,
  leadership: <svg viewBox="0 0 20 20" fill="currentColor"><path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"/></svg>,
  lightning: <svg viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd"/></svg>,
  refresh: <svg viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd"/></svg>,
};

function Ico({ children }: Readonly<{ children: React.ReactNode }>) {
  return <span className="c-ico">{children}</span>;
}

function SectionTitle({ icon, label }: Readonly<{ icon: React.ReactNode; label: string }>) {
  return (
    <div className="c-section-title">
      <span className="c-section-title-icon">{icon}</span>
      <span>{label}</span>
    </div>
  );
}

function SidebarSectionTitle({ icon, label }: Readonly<{ icon: React.ReactNode; label: string }>) {
  return (
    <div className="c-sb-section-title">
      <span className="c-sb-section-icon">{icon}</span>
      <span>{label}</span>
    </div>
  );
}

function ExperienceItem({ job }: Readonly<{ job: WorkExperience }>) {
  return (
    <div className="c-job">
      <div className="c-job-top">
        <div className="c-job-left">
          <div className="c-job-dot" />
          <div>
            <div className="c-job-title">{job.title}</div>
            <div className="c-job-company-row">
              {job.logo && <img src={job.logo} alt={job.company} className="c-job-logo" />}
              <span className="c-job-company">{job.company} — {job.location}</span>
            </div>
          </div>
        </div>
        <div className="c-job-right">
          <span className="c-job-period"><Ico>{Icons.calendar}</Ico>{job.period}</span>
          <span className="c-job-type-badge">{job.type}</span>
        </div>
      </div>
      <div className="c-job-body">
        <div className="c-job-resp-label">KEY RESPONSIBILITIES</div>
        <ul className="c-job-bullets">
          {job.bullets.map((b) => <li key={b}>{b}</li>)}
        </ul>
        <div className="c-job-tech-row">
          <span className="c-job-tech-label">TECH STACK:</span>
          {job.tech.join(', ')}
        </div>
      </div>
    </div>
  );
}

const achievementIcons: Record<string, React.ReactNode> = {
  'Led Cross-Functional Teams': Icons.leadership,
  'Built Scalable Real-Time Systems': Icons.lightning,
  'Improved Delivery Efficiency': Icons.refresh,
};

const strengthList = [
  'Technical Leadership & Team Ownership',
  'Scalable Architecture & System Design',
  'Agile/Scrum Delivery & Planning',
  'Performance Optimization & Security',
  'Cross-functional Collaboration',
];

export function ClassicTemplate({ d }: Readonly<{ d: ResumeData }>) {
  const [fn, ln] = d.name.split('\n');
  return (
    <div className="c-resume-wrapper">
      <div className="c-resume">
        {/* ── LEFT SIDEBAR ── */}
        <aside className="c-sidebar">
          <div className="c-sb-photo">
            <img src={mePhoto} alt={d.name.replace('\n', ' ')} className="c-sb-photo-img" />
          </div>
          <section className="c-sb-section">
            <SidebarSectionTitle icon={Icons.user} label="SUMMARY" />
            <p className="c-sb-summary">{d.summary}</p>
          </section>
          <section className="c-sb-section">
            <SidebarSectionTitle icon={Icons.code} label="PROFESSIONAL SKILLS" />
            {d.skills.map((sg) => (
              <div key={sg.category} className="c-sb-skill-group">
                <div className="c-sb-skill-cat">{sg.category}</div>
                <div className="c-sb-skill-badges">
                  {sg.items.map((item) => <span key={item} className="c-sb-badge">{item}</span>)}
                </div>
              </div>
            ))}
          </section>
          <section className="c-sb-section">
            <SidebarSectionTitle icon={Icons.star} label="CORE STRENGTHS" />
            <ul className="c-sb-strengths">
              {strengthList.map((s) => (
                <li key={s}><Ico>{Icons.check}</Ico>{s}</li>
              ))}
            </ul>
          </section>
          <section className="c-sb-section">
            <SidebarSectionTitle icon={Icons.graduation} label="EDUCATION" />
            <div className="c-sb-edu-degree">{d.education.degree}</div>
            <div className="c-sb-edu-school">{d.education.school}</div>
            <div className="c-sb-edu-period"><Ico>{Icons.calendar}</Ico>{d.education.period}</div>
          </section>
        </aside>

        {/* ── RIGHT MAIN ── */}
        <main className="c-main">
          <header className="c-main-header">
            <div className="c-header-name-block">
              <div className="c-header-name">{fn} {ln}</div>
              <div className="c-header-title">{d.title.replace('\n', ' ')}</div>
            </div>
            <div className="c-header-contacts">
              <div className="c-header-contact-row">
                <span className="c-hc-item"><Ico>{Icons.mail}</Ico>{d.contact.email}</span>
                <span className="c-hc-item"><Ico>{Icons.phone}</Ico>{d.contact.phone}</span>
                <span className="c-hc-item"><Ico>{Icons.globe}</Ico>{d.contact.website.replace('https://', '')}</span>
              </div>
              <div className="c-header-contact-row">
                <span className="c-hc-item"><Ico>{Icons.linkedin}</Ico>{d.contact.linkedin}</span>
                <span className="c-hc-item"><Ico>{Icons.pin}</Ico>{d.contact.location}</span>
              </div>
            </div>
          </header>

          <section className="c-main-section">
            <SectionTitle icon={Icons.briefcase} label="PROFESSIONAL EXPERIENCE" />
            {d.experience.map((job) => (
              <ExperienceItem key={job.title + job.period} job={job} />
            ))}
          </section>

          <section className="c-main-section">
            <SectionTitle icon={Icons.trophy} label="KEY ACHIEVEMENTS" />
            <div className="c-achievements-grid">
              {d.achievements.map((a) => (
                <div key={a.title} className="c-ach-card">
                  <div className="c-ach-icon">{achievementIcons[a.title] ?? Icons.trophy}</div>
                  <div className="c-ach-title">{a.title}</div>
                  <div className="c-ach-desc">{a.description}</div>
                </div>
              ))}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
