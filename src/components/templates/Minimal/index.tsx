import mePhoto from '../../../assets/me.png';
import type { ResumeData, WorkExperience } from '../../../types/resume';
import './Minimal.less';

function ExperienceItem({ job }: Readonly<{ job: WorkExperience }>) {
  return (
    <div className="m-job">
      <div className="m-job-header">
        <div className="m-job-title-row">
          {job.logo && <img src={job.logo} alt={job.company} className="m-job-logo" />}
          <div>
            <div className="m-job-title">{job.title}</div>
            <div className="m-job-meta">{job.company} · {job.location} · {job.type}</div>
          </div>
        </div>
        <div className="m-job-period">{job.period}</div>
      </div>
      <ul className="m-job-bullets">
        {job.bullets.map((b) => <li key={b}>{b}</li>)}
      </ul>
      <div className="m-job-tech">
        <span className="m-job-tech-label">Stack:</span> {job.tech.join(' · ')}
      </div>
    </div>
  );
}

export function MinimalTemplate({ d }: Readonly<{ d: ResumeData }>) {
  const [fn, ln] = d.name.split('\n');
  return (
    <div className="m-resume-wrapper">
      <div className="m-resume">

        {/* Header */}
        <header className="m-header">
          <div className="m-header-left">
            <img src={mePhoto} alt={d.name.replace('\n', ' ')} className="m-photo" />
            <div>
              <div className="m-name">{fn} {ln}</div>
              <div className="m-title">{d.title.replace('\n', ' ')}</div>
            </div>
          </div>
          <div className="m-contacts">
            <span>{d.contact.email}</span>
            <span>{d.contact.phone}</span>
            <span>{d.contact.website.replace('https://', '')}</span>
            <span>{d.contact.linkedin}</span>
            <span>{d.contact.location}</span>
          </div>
        </header>

        <div className="m-body">
          {/* Left column */}
          <div className="m-col-left">

            {/* Summary */}
            <section className="m-section">
              <div className="m-section-title">Profile</div>
              <p className="m-summary">{d.summary}</p>
            </section>

            {/* Experience */}
            <section className="m-section">
              <div className="m-section-title">Experience</div>
              {d.experience.map((job) => (
                <ExperienceItem key={job.title + job.period} job={job} />
              ))}
            </section>

            {/* Achievements */}
            <section className="m-section">
              <div className="m-section-title">Achievements</div>
              {d.achievements.map((a) => (
                <div key={a.title} className="m-ach">
                  <div className="m-ach-title">{a.icon} {a.title}</div>
                  <div className="m-ach-desc">{a.description}</div>
                </div>
              ))}
            </section>
          </div>

          {/* Right column */}
          <div className="m-col-right">

            {/* Skills */}
            <section className="m-section">
              <div className="m-section-title">Skills</div>
              {d.skills.map((sg) => (
                <div key={sg.category} className="m-skill-group">
                  <div className="m-skill-cat">{sg.category}</div>
                  <div className="m-skill-items">{sg.items.join(' · ')}</div>
                </div>
              ))}
            </section>

            {/* Education */}
            <section className="m-section">
              <div className="m-section-title">Education</div>
              <div className="m-edu-degree">{d.education.degree}</div>
              <div className="m-edu-school">{d.education.school}</div>
              <div className="m-edu-period">{d.education.period}</div>
            </section>

            {/* Strengths */}
            <section className="m-section">
              <div className="m-section-title">Strengths</div>
              {d.strengths.map((s) => (
                <div key={s.title} className="m-strength">
                  <div className="m-strength-title">{s.icon} {s.title}</div>
                  <div className="m-strength-desc">{s.description}</div>
                </div>
              ))}
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
