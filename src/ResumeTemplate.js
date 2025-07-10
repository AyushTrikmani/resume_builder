import React from 'react';
import './ResumeTemplate.css';

const ResumeTemplate = ({ formData, template, clickableContacts = false }) => {
  const listItems = (input) => {
    if (!input) return [];
    if (Array.isArray(input)) {
      return input.filter(Boolean);
    }
    if (typeof input === 'string') {
      return input.split(',').map(s => s.trim()).filter(Boolean);
    }
    return [];
  };

  if (template === 'template3') {
    return (
      <div className="resume-template template3">
        <div className="template3-header">
          <div className="template3-header-content">
            <h1>{formData.name || 'Your Name'}</h1>
            <h2>{formData.profession || 'Your Profession'}</h2>
            <p className="template3-contact-info">
              {formData.email || 'your.email@example.com'} | {formData.phone || '123-456-7890'} | {formData.address || 'Your Address'}
            </p>
            {formData.linkedin && <p className="template3-social-links">LinkedIn: {formData.linkedin}</p>}
            {formData.github && <p className="template3-social-links">GitHub: {formData.github}</p>}
          </div>
          {formData.photo && (
            <img src={formData.photo} alt="Profile" className="template3-profile-pic" />
          )}
        </div>
        <div className="template3-body">
          <div className="template3-main-content">
            <section className="template3-section">
              <h3>About Me</h3>
              <p>{formData.summary || 'A short professional summary goes here.'}</p>
            </section>
            <section className="template3-section">
              <h3>Experience</h3>
              {formData.experience.map((exp, idx) => (
                <div key={idx} className="template3-exp-card">
                  <div className="template3-exp-header">
                    <h4>{exp.jobTitle || 'Job Title'}</h4>
                    <p className="template3-company">{exp.company || 'Company'}</p>
                    <p className="template3-dates">{exp.startMonth} {exp.startYear} - {exp.present ? 'Present' : `${exp.endMonth} ${exp.endYear}`}</p>
                  </div>
                  <p>{exp.description || 'Job description...'}</p>
                </div>
              ))}
            </section>
            <section className="template3-section">
              <h3>Education</h3>
              {formData.education.map((edu, idx) => (
                <div key={idx} className="template3-exp-card">
                  <div className="template3-exp-header">
                    <h4>{edu.degree || 'Degree'}</h4>
                    <p className="template3-company">{edu.institution || 'Institution'}</p>
                    <p className="template3-dates">{edu.startYear} - {edu.pursuing ? 'Present' : edu.endYear}</p>
                  </div>
                  <p>{edu.studyField || 'Field of Study'}</p>
                </div>
              ))}
            </section>
            {formData.projects && formData.projects.length > 0 && (
              <section className="template3-section">
                <h3>Projects</h3>
                {formData.projects.map((proj, idx) => (
                  <div key={idx} className="template3-exp-card">
                    <div className="template3-exp-header">
                      <h4>{proj.title || 'Project Title'}</h4>
                      {proj.technologies && <p className="template3-company">{proj.technologies}</p>}
                      {proj.link && <p className="template3-social-links">Link: {proj.link}</p>}
                    </div>
                    <p>{proj.description || 'Project description...'}</p>
                  </div>
                ))}
              </section>
            )}
            {formData.certifications && formData.certifications.length > 0 && (
              <section className="template3-section">
                <h3>Certifications</h3>
                {formData.certifications.map((cert, idx) => (
                  <div key={idx} className="template3-exp-card">
                    <div className="template3-exp-header">
                      <h4>{cert.name || 'Certification Name'}</h4>
                      <p className="template3-company">{cert.organization || 'Organization'}</p>
                      <p className="template3-dates">{cert.date}</p>
                    </div>
                  </div>
                ))}
              </section>
            )}
            {formData.achievements && formData.achievements.length > 0 && (
              <section className="template3-section">
                <h3>Achievements & Awards</h3>
                {formData.achievements.map((ach, idx) => (
                  <div key={idx} className="template3-exp-card">
                    <div className="template3-exp-header">
                      <h4>{ach.title || 'Achievement Title'}</h4>
                      {ach.date && <p className="template3-dates">{ach.date}</p>}
                    </div>
                    <p>{ach.description || 'Achievement description...'}</p>
                  </div>
                ))}
              </section>
            )}
          </div>
          <div className="template3-sidebar">
            <section className="template3-section">
              <h3>Skills</h3>
              <div className="template3-skills-grid">
                {listItems(formData.skills).map((skill, i) => (
                  <span key={i} className="template3-skill-tag">{typeof skill === 'object' ? skill.name : skill}</span>
                ))}
              </div>
            </section>
            <section className="template3-section">
              <h3>Languages</h3>
              <div className="template3-skills-grid">
                {formData.languages && formData.languages.length > 0 ? 
                  formData.languages.map((lang, i) => (
                    <span key={i} className="template3-skill-tag">{lang.name} - {lang.proficiency}</span>
                  )) :
                  listItems(formData.languages).map((lang, i) => (
                    <span key={i} className="template3-skill-tag">{lang}</span>
                  ))
                }
              </div>
            </section>
            {formData.hobbies && (
              <section className="template3-section">
                <h3>Hobbies</h3>
                <div className="template3-skills-grid">
                  {listItems(formData.hobbies).map((hobby, i) => (
                    <span key={i} className="template3-skill-tag">{hobby}</span>
                  ))}
                </div>
              </section>
            )}
            {formData.references && (
              <section className="template3-section">
                <h3>References</h3>
                <p>{formData.references}</p>
              </section>
            )}
          </div>
        </div>
      </div>
    );
  }

  if (template === 'template4') {
    return (
      <div className="resume-template template4">
        <div className="template4-header">
          <div className="template4-header-left">
            <h1>{formData.name || 'Your Name'}</h1>
            <h2>{formData.profession || 'Your Profession'}</h2>
          </div>
          <div className="template4-header-right">
            <p>📧 {formData.email || 'your.email@example.com'}</p>
            <p>📱 {formData.phone || '123-456-7890'}</p>
            <p>📍 {formData.address || 'Your Address'}</p>
            {formData.linkedin && <p>💼 {formData.linkedin}</p>}
            {formData.github && <p>💻 {formData.github}</p>}
          </div>
        </div>
        <div className="template4-content">
          <div className="template4-left-column">
            <section className="template4-section">
              <h3>Summary</h3>
              <p>{formData.summary || 'A short professional summary goes here.'}</p>
            </section>
            <section className="template4-section">
              <h3>Experience</h3>
              {formData.experience.map((exp, idx) => (
                <div key={idx} className="template4-exp-item">
                  <div className="template4-exp-title">
                    <h4>{exp.jobTitle || 'Job Title'}</h4>
                    <p className="template4-company">{exp.company || 'Company'}</p>
                  </div>
                  <p className="template4-exp-dates">{exp.startMonth} {exp.startYear} - {exp.present ? 'Present' : `${exp.endMonth} ${exp.endYear}`}</p>
                  <p>{exp.description || 'Job description...'}</p>
                </div>
              ))}
            </section>
            <section className="template4-section">
              <h3>Education</h3>
              {formData.education.map((edu, idx) => (
                <div key={idx} className="template4-exp-item">
                  <div className="template4-exp-title">
                    <h4>{edu.degree || 'Degree'}</h4>
                    <p className="template4-company">{edu.institution || 'Institution'}</p>
                  </div>
                  <p className="template4-exp-dates">{edu.startYear} - {edu.pursuing ? 'Present' : edu.endYear}</p>
                  <p>{edu.studyField || 'Field of Study'}</p>
                </div>
              ))}
            </section>
            {formData.projects && formData.projects.length > 0 && (
              <section className="template4-section">
                <h3>Projects</h3>
                {formData.projects.map((proj, idx) => (
                  <div key={idx} className="template4-exp-item">
                    <div className="template4-exp-title">
                      <h4>{proj.title || 'Project Title'}</h4>
                      {proj.technologies && <p className="template4-company">{proj.technologies}</p>}
                    </div>
                    <p>{proj.description || 'Project description...'}</p>
                    {proj.link && <p className="template4-social-links">Link: {proj.link}</p>}
                  </div>
                ))}
              </section>
            )}
            {formData.certifications && formData.certifications.length > 0 && (
              <section className="template4-section">
                <h3>Certifications</h3>
                {formData.certifications.map((cert, idx) => (
                  <div key={idx} className="template4-exp-item">
                    <div className="template4-exp-title">
                      <h4>{cert.name || 'Certification Name'}</h4>
                      <p className="template4-company">{cert.organization || 'Organization'}</p>
                    </div>
                    <p className="template4-exp-dates">{cert.date}</p>
                  </div>
                ))}
              </section>
            )}
            {formData.achievements && formData.achievements.length > 0 && (
              <section className="template4-section">
                <h3>Achievements & Awards</h3>
                {formData.achievements.map((ach, idx) => (
                  <div key={idx} className="template4-exp-item">
                    <div className="template4-exp-title">
                      <h4>{ach.title || 'Achievement Title'}</h4>
                      {ach.date && <p className="template4-exp-dates">{ach.date}</p>}
                    </div>
                    <p>{ach.description || 'Achievement description...'}</p>
                  </div>
                ))}
              </section>
            )}
          </div>
          <div className="template4-right-column">
            <section className="template4-section">
              <h3>Skills</h3>
              <div className="template4-skills-list">
                {listItems(formData.skills).map((skill, i) => (
                  <span key={i} className="template4-skill-item">{typeof skill === 'object' ? skill.name : skill}</span>
                ))}
              </div>
            </section>
            <section className="template4-section">
              <h3>Languages</h3>
              <div className="template4-skills-list">
                {formData.languages && formData.languages.length > 0 ? 
                  formData.languages.map((lang, i) => (
                    <span key={i} className="template4-skill-item">{lang.name} - {lang.proficiency}</span>
                  )) :
                  listItems(formData.languages).map((lang, i) => (
                    <span key={i} className="template4-skill-item">{lang}</span>
                  ))
                }
              </div>
            </section>
            {formData.hobbies && (
              <section className="template4-section">
                <h3>Hobbies</h3>
                <div className="template4-skills-list">
                  {listItems(formData.hobbies).map((hobby, i) => (
                    <span key={i} className="template4-skill-item">{hobby}</span>
                  ))}
                </div>
              </section>
            )}
            {formData.references && (
              <section className="template4-section">
                <h3>References</h3>
                <p>{formData.references}</p>
              </section>
            )}
          </div>
        </div>
      </div>
    );
  }

  if (template === 'template5') {
    return (
      <div className="resume-template template5">
        <div className="template5-sidebar">
          {formData.photo && (
            <img src={formData.photo} alt="Profile" className="template5-profile-pic" />
          )}
          <section className="template5-contact-section">
            <h3>Contact</h3>
            <p><strong>Email: </strong>{formData.email || 'your.email@example.com'}</p>
            <p><strong>Phone: </strong>{formData.phone || '123-456-7890'}</p>
            <p><strong>Address: </strong>{formData.address || 'Your Address'}</p>
            {formData.linkedin && <p><strong>LinkedIn: </strong>{formData.linkedin}</p>}
            {formData.github && <p><strong>GitHub: </strong>{formData.github}</p>}
          </section>
          <section className="template5-contact-section">
            <h3>Skills</h3>
            <div className="template5-skills-list">
              {listItems(formData.skills).map((skill, i) => (
                <span key={i} className="template5-skill-item">{typeof skill === 'object' ? skill.name : skill}</span>
              ))}
            </div>
          </section>
          <section className="template5-contact-section">
            <h3>Languages</h3>
            <div className="template5-skills-list">
              {formData.languages && formData.languages.length > 0 ? 
                formData.languages.map((lang, i) => (
                  <span key={i} className="template5-skill-item">{lang.name} - {lang.proficiency}</span>
                )) :
                listItems(formData.languages).map((lang, i) => (
                  <span key={i} className="template5-skill-item">{lang}</span>
                ))
              }
            </div>
          </section>
          {formData.hobbies && (
            <section className="template5-contact-section">
              <h3>Hobbies</h3>
              <div className="template5-skills-list">
                {listItems(formData.hobbies).map((hobby, i) => (
                  <span key={i} className="template5-skill-item">{hobby}</span>
                ))}
              </div>
            </section>
          )}
          {formData.references && (
            <section className="template5-contact-section">
              <h3>References</h3>
              <p>{formData.references}</p>
            </section>
          )}
        </div>
        <div className="template5-main-content">
          <div className="template5-header">
            <h1>{formData.name || 'Your Name'}</h1>
            <h2>{formData.profession || 'Your Profession'}</h2>
          </div>
          <section className="template5-section">
            <h3>About Me</h3>
            <p>{formData.summary || 'A short professional summary goes here.'}</p>
          </section>
          <section className="template5-section">
            <h3>Experience</h3>
            {formData.experience.map((exp, idx) => (
              <div key={idx} className="template5-exp-item">
                <div className="template5-exp-header">
                  <h4>{exp.jobTitle || 'Job Title'}</h4>
                  <p className="template5-company">{exp.company || 'Company'}</p>
                  <p className="template5-dates">{exp.startMonth} {exp.startYear} - {exp.present ? 'Present' : `${exp.endMonth} ${exp.endYear}`}</p>
                </div>
                <p>{exp.description || 'Job description...'}</p>
              </div>
            ))}
          </section>
          <section className="template5-section">
            <h3>Education</h3>
            {formData.education.map((edu, idx) => (
              <div key={idx} className="template5-exp-item">
                <div className="template5-exp-header">
                  <h4>{edu.degree || 'Degree'}</h4>
                  <p className="template5-company">{edu.institution || 'Institution'}</p>
                  <p className="template5-dates">{edu.startYear} - {edu.pursuing ? 'Present' : edu.endYear}</p>
                </div>
                <p>{edu.studyField || 'Field of Study'}</p>
              </div>
            ))}
          </section>
          {formData.projects && formData.projects.length > 0 && (
            <section className="template5-section">
              <h3>Projects</h3>
              {formData.projects.map((proj, idx) => (
                <div key={idx} className="template5-exp-item">
                  <div className="template5-exp-header">
                    <h4>{proj.title || 'Project Title'}</h4>
                    {proj.technologies && <p className="template5-company">{proj.technologies}</p>}
                  </div>
                  <p>{proj.description || 'Project description...'}</p>
                  {proj.link && <p className="template5-social-links">Link: {proj.link}</p>}
                </div>
              ))}
            </section>
          )}
          {formData.certifications && formData.certifications.length > 0 && (
            <section className="template5-section">
              <h3>Certifications</h3>
              {formData.certifications.map((cert, idx) => (
                <div key={idx} className="template5-exp-item">
                  <div className="template5-exp-header">
                    <h4>{cert.name || 'Certification Name'}</h4>
                    <p className="template5-company">{cert.organization || 'Organization'}</p>
                    <p className="template5-dates">{cert.date}</p>
                  </div>
                </div>
              ))}
            </section>
          )}
          {formData.achievements && formData.achievements.length > 0 && (
            <section className="template5-section">
              <h3>Achievements & Awards</h3>
              {formData.achievements.map((ach, idx) => (
                <div key={idx} className="template5-exp-item">
                  <div className="template5-exp-header">
                    <h4>{ach.title || 'Achievement Title'}</h4>
                    {ach.date && <p className="template5-dates">{ach.date}</p>}
                  </div>
                  <p>{ach.description || 'Achievement description...'}</p>
                </div>
              ))}
            </section>
          )}
          {formData.references && (
            <section className="template5-section">
              <h3>References</h3>
              <p>{formData.references}</p>
            </section>
          )}
        </div>
      </div>
    );
  }

  if (template === 'template2') {
    return (
      <div className="resume-template template2">
        <div className="template2-header">
          {formData.photo && (
            <img src={formData.photo} alt="Profile" className="template2-profile-pic" />
          )}
          <div className="template2-header-main">
            <h1>{formData.name || 'Your Name'}</h1>
            <h2>{formData.profession || 'Your Profession'}</h2>
            <p className="template2-contact">{formData.email || 'your.email@example.com'} | {formData.phone || '123-456-7890'} | {formData.address || 'Your Address'}</p>
            {formData.linkedin && <p className="template2-contact">LinkedIn: {formData.linkedin}</p>}
            {formData.website && <p className="template2-contact">Website: {formData.website}</p>}
            {formData.github && <p className="template2-contact">GitHub: {formData.github}</p>}
          </div>
        </div>
        <div className="template2-content">
          <div className="template2-left-col">
            <section className="template2-section">
              <h3>About Me</h3>
              <p>{formData.summary || 'A short professional summary goes here.'}</p>
            </section>
            <section className="template2-section">
              <h3>Skills</h3>
              <ul>
                {listItems(formData.skills).map((skill, i) => (
                  <li key={i}>{typeof skill === 'object' ? skill.name : skill}</li>
                ))}
              </ul>
            </section>
            <section className="template2-section">
              <h3>Languages</h3>
              <ul>
                {formData.languages && formData.languages.length > 0 ? 
                  formData.languages.map((lang, i) => (
                    <li key={i}>{lang.name} - {lang.proficiency}</li>
                  )) :
                  listItems(formData.languages).map((lang, i) => (
                    <li key={i}>{lang}</li>
                  ))
                }
              </ul>
            </section>
            {formData.hobbies && (
              <section className="template2-section">
                <h3>Hobbies</h3>
                <ul>
                  {listItems(formData.hobbies).map((hobby, i) => (
                    <li key={i}>{hobby}</li>
                  ))}
                </ul>
              </section>
            )}
            {formData.references && (
              <section className="template2-section">
                <h3>References</h3>
                <p>{formData.references}</p>
              </section>
            )}
          </div>
          <div className="template2-right-col">
            <section className="template2-section">
              <h3>Experience</h3>
              {formData.experience.map((exp, idx) => (
                <div key={idx} className="template2-exp-block">
                  <h4>{exp.jobTitle || 'Job Title'}</h4>
                  <p className="template2-exp-company">{exp.company || 'Company'}</p>
                  <p className="template2-exp-dates">{exp.startMonth} {exp.startYear} - {exp.present ? 'Present' : `${exp.endMonth} ${exp.endYear}`}</p>
                  <p>{exp.description || 'Job description...'}</p>
                </div>
              ))}
            </section>
            <section className="template2-section">
              <h3>Education</h3>
              {formData.education.map((edu, idx) => (
                <div key={idx} className="template2-edu-block">
                  <h4>{edu.degree || 'Degree'}</h4>
                  <p className="template2-edu-school">{edu.institution || 'Institution'}</p>
                  <p className="template2-edu-dates">{edu.startYear} - {edu.pursuing ? 'Present' : edu.endYear}</p>
                </div>
              ))}
            </section>
            {formData.projects && formData.projects.length > 0 && (
              <section className="template2-section">
                <h3>Projects</h3>
                {formData.projects.map((proj, idx) => (
                  <div key={idx} className="template2-exp-block">
                    <h4>{proj.title || 'Project Title'}</h4>
                    {proj.technologies && <p className="template2-exp-company">{proj.technologies}</p>}
                    <p>{proj.description || 'Project description...'}</p>
                    {proj.link && <p className="template2-contact">Link: {proj.link}</p>}
                  </div>
                ))}
              </section>
            )}
            {formData.certifications && formData.certifications.length > 0 && (
              <section className="template2-section">
                <h3>Certifications</h3>
                {formData.certifications.map((cert, idx) => (
                  <div key={idx} className="template2-exp-block">
                    <h4>{cert.name || 'Certification Name'}</h4>
                    <p className="template2-exp-company">{cert.organization || 'Organization'}</p>
                    <p className="template2-exp-dates">{cert.date}</p>
                  </div>
                ))}
              </section>
            )}
            {formData.achievements && formData.achievements.length > 0 && (
              <section className="template2-section">
                <h3>Achievements & Awards</h3>
                {formData.achievements.map((ach, idx) => (
                  <div key={idx} className="template2-exp-block">
                    <h4>{ach.title || 'Achievement Title'}</h4>
                    {ach.date && <p className="template2-exp-dates">{ach.date}</p>}
                    <p>{ach.description || 'Achievement description...'}</p>
                  </div>
                ))}
              </section>
            )}
          </div>
        </div>
      </div>
    );
  }

  // Default template 1
  return (
    <div className="resume-template template1">
      <div className="template1-sidebar">
        {formData.photo && (
          <img src={formData.photo} alt="Profile" className="template1-profile-pic" />
        )}
        <section className="template1-section">
          <h3>Contact</h3>
          <p><strong>Phone: </strong>{clickableContacts ? <a href={`tel:${formData.phone}`}>{formData.phone}</a> : formData.phone}</p>
          <p><strong>Email: </strong>{clickableContacts ? <a href={`mailto:${formData.email}`}>{formData.email}</a> : formData.email}</p>
          <p><strong>Address: </strong>{formData.address || 'Your Address'}</p>
          {formData.linkedin && <p><strong>LinkedIn: </strong>{clickableContacts ? <a href={formData.linkedin} target="_blank" rel="noopener noreferrer">{formData.linkedin}</a> : formData.linkedin}</p>}
          {formData.website && <p><strong>Website: </strong>{clickableContacts ? <a href={formData.website} target="_blank" rel="noopener noreferrer">{formData.website}</a> : formData.website}</p>}
          {formData.github && <p><strong>GitHub: </strong>{clickableContacts ? <a href={formData.github} target="_blank" rel="noopener noreferrer">{formData.github}</a> : formData.github}</p>}
        </section>
        <section className="template1-section">
          <h3>Skills</h3>
          <ul>
            {listItems(formData.skills).map((skill, i) => (
              <li key={i}>{typeof skill === 'object' ? skill.name : skill}</li>
            ))}
          </ul>
        </section>
        <section className="template1-section">
          <h3>Languages</h3>
          <ul>
            {formData.languages && formData.languages.length > 0 ? 
              formData.languages.map((lang, i) => (
                <li key={i}>{lang.name} - {lang.proficiency}</li>
              )) :
              listItems(formData.languages).map((lang, i) => (
                <li key={i}>{lang}</li>
              ))
            }
          </ul>
        </section>
        {formData.hobbies && (
          <section className="template1-section">
            <h3>Hobbies</h3>
            <ul>
              {listItems(formData.hobbies).map((hobby, i) => (
                <li key={i}>{hobby}</li>
              ))}
            </ul>
          </section>
        )}
        {formData.references && (
          <section className="template1-section">
            <h3>References</h3>
            <p>{formData.references}</p>
          </section>
        )}
      </div>
      <div className="template1-main">
        <h1>{formData.name || 'Your Name'}</h1>
        <h2>{formData.profession || 'Your Profession'}</h2>
        <section className="template1-section">
          <h3>About Me</h3>
          <p>{formData.summary || 'A short professional summary goes here.'}</p>
        </section>
        <section className="template1-section">
          <h3>Experience</h3>
          {formData.experience.map((exp, idx) => (
            <div key={idx} className="template1-exp-block">
              <h4>{exp.jobTitle || 'Job Title'} at {exp.company || 'Company'}</h4>
              <p className="template1-exp-dates">{exp.startMonth} {exp.startYear} - {exp.present ? 'Present' : `${exp.endMonth} ${exp.endYear}`}</p>
              <p>{exp.description || 'Job description...'}</p>
            </div>
          ))}
        </section>
        <section className="template1-section">
          <h3>Education</h3>
          {formData.education.map((edu, idx) => (
            <div key={idx} className="template1-edu-block">
              <h4>{edu.degree || 'Degree'} in {edu.studyField || 'Field'}</h4>
              <p className="template1-edu-school">{edu.institution || 'Institution'}</p>
              <p className="template1-edu-dates">{edu.startYear} - {edu.pursuing ? 'Present' : edu.endYear}</p>
            </div>
          ))}
        </section>
        {formData.projects && formData.projects.length > 0 && (
          <section className="template1-section">
            <h3>Projects</h3>
            {formData.projects.map((proj, idx) => (
              <div key={idx} className="template1-exp-block">
                <h4>{proj.title || 'Project Title'}</h4>
                {proj.technologies && <p className="template1-exp-dates">{proj.technologies}</p>}
                <p>{proj.description || 'Project description...'}</p>
                {proj.link && <p>Link: {proj.link}</p>}
              </div>
            ))}
          </section>
        )}
        {formData.certifications && formData.certifications.length > 0 && (
          <section className="template1-section">
            <h3>Certifications</h3>
            {formData.certifications.map((cert, idx) => (
              <div key={idx} className="template1-exp-block">
                <h4>{cert.name || 'Certification Name'}</h4>
                <p className="template1-exp-dates">{cert.organization || 'Organization'} - {cert.date}</p>
              </div>
            ))}
          </section>
        )}
        {formData.achievements && formData.achievements.length > 0 && (
          <section className="template1-section">
            <h3>Achievements & Awards</h3>
            {formData.achievements.map((ach, idx) => (
              <div key={idx} className="template1-exp-block">
                <h4>{ach.title || 'Achievement Title'}</h4>
                {ach.date && <p className="template1-exp-dates">{ach.date}</p>}
                <p>{ach.description || 'Achievement description...'}</p>
              </div>
            ))}
          </section>
        )}
        {formData.references && (
          <section className="template1-section">
            <h3>References</h3>
            <p>{formData.references}</p>
          </section>
        )}
      </div>
    </div>
  );
};

export default ResumeTemplate; 