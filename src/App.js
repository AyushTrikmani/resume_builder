import React, { useState, useRef } from 'react';
import { PDFDownloadLink } from '@react-pdf/renderer';
import ResumeTemplate from './ResumeTemplate';
import ResumePDF from './ResumePDF';
import './App.css';
import { 
  FaUser, FaBriefcase, FaSchool, FaCode, FaProjectDiagram, FaAward, 
  FaLanguage, FaGamepad, FaBook, FaFilePdf, FaChevronDown, FaChevronUp 
} from 'react-icons/fa';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    profession: '',
    email: '',
    phone: '',
    address: '',
    linkedin: '',
    website: '',
    github: '',
    summary: '',
    skills: '',
    hobbies: '',
    references: '',
    photo: null,
    experience: [
      {
        jobTitle: '',
        company: '',
        location: '',
        startMonth: '',
        startYear: '',
        endMonth: '',
        endYear: '',
        present: false,
        description: ''
      }
    ],
    education: [
      {
        degree: '',
        institution: '',
        location: '',
        studyField: '',
        startYear: '',
        endYear: '',
        pursuing: false,
        grade: ''
      }
    ],
    projects: [
      {
        title: '',
        description: '',
        technologies: '',
        link: ''
      }
    ],
    certifications: [
      {
        name: '',
        organization: '',
        date: '',
        url: ''
      }
    ],
    achievements: [
      {
        title: '',
        description: '',
        date: ''
      }
    ],
    languages: [
      {
        name: '',
        proficiency: 'Basic'
      }
    ]
  });

  const [template, setTemplate] = useState('template1');
  const [errors, setErrors] = useState({});
  const [expandedSections, setExpandedSections] = useState({
    personal: true,
    summary: true,
    experience: true,
    education: true,
    projects: true,
    skills: true,
    certifications: true,
    achievements: true,
    languages: true,
    hobbies: false,
    references: false
  });

  const previewRef = useRef();

  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  const years = Array.from({ length: 30 }, (_, i) => (new Date().getFullYear() - i).toString());

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleEducationChange = (idx, e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      education: prev.education.map((edu, i) => 
        i === idx ? { ...edu, [name]: type === 'checkbox' ? checked : value } : edu
      )
    }));
  };

  const handleExperienceChange = (idx, e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      experience: prev.experience.map((exp, i) => 
        i === idx ? { ...exp, [name]: type === 'checkbox' ? checked : value } : exp
      )
    }));
  };

  const handleProjectChange = (idx, e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      projects: prev.projects.map((proj, i) => 
        i === idx ? { ...proj, [name]: value } : proj
      )
    }));
  };

  const handleCertificationChange = (idx, e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      certifications: prev.certifications.map((cert, i) => 
        i === idx ? { ...cert, [name]: value } : cert
      )
    }));
  };

  const handleAchievementChange = (idx, e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      achievements: prev.achievements.map((ach, i) => 
        i === idx ? { ...ach, [name]: value } : ach
      )
    }));
  };

  const handleLanguageChange = (idx, e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      languages: prev.languages.map((lang, i) => 
        i === idx ? { ...lang, [name]: value } : lang
      )
    }));
  };

  const toggleSection = (section) => {
    setExpandedSections(prev => ({ ...prev, [section]: !prev[section] }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    if (!formData.phone.trim()) newErrors.phone = 'Phone is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setFormData(prev => ({ ...prev, photo: e.target.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="main-app-bg">
      <header className="main-header">
        <h1>Resume Builder</h1>
        <p className="subtitle">Create professional resumes with multiple templates</p>
      </header>

      <div className="main-layout">
        <aside className="sidebar">
          <h2>Choose Template</h2>
          <div className="template-thumbnails">
            <div 
              className={`template-thumb ${template === 'template1' ? 'selected' : ''}`} 
              onClick={() => setTemplate('template1')}
            >
              <div className="template-thumb-placeholder template1-thumb-placeholder">1</div>
              <span>Classic</span>
            </div>
            <div 
              className={`template-thumb ${template === 'template2' ? 'selected' : ''}`} 
              onClick={() => setTemplate('template2')}
            >
              <div className="template-thumb-placeholder template2-thumb-placeholder">2</div>
              <span>Header Layout</span>
            </div>
            <div 
              className={`template-thumb ${template === 'template3' ? 'selected' : ''}`} 
              onClick={() => setTemplate('template3')}
            >
              <div className="template-thumb-placeholder template3-thumb-placeholder">3</div>
              <span>Card Layout</span>
            </div>
            <div 
              className={`template-thumb ${template === 'template4' ? 'selected' : ''}`} 
              onClick={() => setTemplate('template4')}
            >
              <div className="template-thumb-placeholder template4-thumb-placeholder">4</div>
              <span>Modern Minimal</span>
            </div>
            <div 
              className={`template-thumb ${template === 'template5' ? 'selected' : ''}`} 
              onClick={() => setTemplate('template5')}
            >
              <div className="template-thumb-placeholder template5-thumb-placeholder">5</div>
              <span>Clean & Professional</span>
            </div>
            <div 
              className={`template-thumb ${template === 'template6' ? 'selected' : ''}`} 
              onClick={() => setTemplate('template6')}
            >
              <div className="template-thumb-placeholder template6-thumb-placeholder">6</div>
              <span>Creative</span>
            </div>
            <div 
              className={`template-thumb ${template === 'template7' ? 'selected' : ''}`} 
              onClick={() => setTemplate('template7')}
            >
              <div className="template-thumb-placeholder template7-thumb-placeholder">7</div>
              <span>Tech-Focused</span>
            </div>
          </div>
        </aside>

        <main className="main-content">
          <section className="form-card">
            <h2>Resume Details</h2>

            {/* Personal Info */}
            <FormSection
              title="Personal Information"
              icon={<FaUser />}
              expanded={expandedSections.personal}
              onToggle={() => toggleSection('personal')}
            >
              <label>Profile Photo<br/>
                <input type="file" accept="image/*" onChange={handlePhotoChange} />
              </label>
              <label>Full Name*<br/>
                <input type="text" name="name" value={formData.name} onChange={handleChange} />
                {errors.name && <span className="error">{errors.name}</span>}
              </label>
              <label>Professional Title<br/>
                <input type="text" name="profession" value={formData.profession} onChange={handleChange} />
              </label>
              <label>Email Address*<br/>
                <input type="email" name="email" value={formData.email} onChange={handleChange} />
                {errors.email && <span className="error">{errors.email}</span>}
              </label>
              <label>Phone Number*<br/>
                <input type="text" name="phone" value={formData.phone} onChange={handleChange} />
                {errors.phone && <span className="error">{errors.phone}</span>}
              </label>
              <label>Address/Location<br/>
                <input type="text" name="address" value={formData.address} onChange={handleChange} placeholder="City, State, Country" />
              </label>
              <label>LinkedIn Profile URL<br/>
                <input type="text" name="linkedin" value={formData.linkedin} onChange={handleChange} placeholder="LinkedIn profile URL" />
              </label>
              <label>Website/Portfolio URL<br/>
                <input type="text" name="website" value={formData.website} onChange={handleChange} placeholder="Personal website URL" />
              </label>
              <label>GitHub Profile URL<br/>
                <input type="text" name="github" value={formData.github} onChange={handleChange} placeholder="GitHub profile URL" />
              </label>
            </FormSection>

            {/* Summary */}
            <FormSection
              title="Profile Summary"
              icon={<FaBriefcase />}
              expanded={expandedSections.summary}
              onToggle={() => toggleSection('summary')}
            >
              <label>Professional Summary<br/>
                <textarea name="summary" value={formData.summary} onChange={handleChange} placeholder="A short paragraph summarizing your skills, experience, and career goals (max 400 characters)" maxLength={400} />
                <div style={{fontSize: '0.85em', color: '#888', marginBottom: '0.5em'}}>Characters left: {400 - (formData.summary?.length || 0)}</div>
              </label>
            </FormSection>

            {/* Skills */}
            <FormSection
              title="Skills"
              icon={<FaCode />}
              expanded={expandedSections.skills}
              onToggle={() => toggleSection('skills')}
            >
              <label>Technical & Soft Skills<br/>
                <input 
                  type="text" 
                  name="skills" 
                  placeholder="e.g. JavaScript, React, CSS, Leadership, Communication" 
                  value={formData.skills} 
                  onChange={handleChange} 
                />
              </label>
            </FormSection>

            {/* Experience */}
            <FormSection
              title="Work Experience"
              icon={<FaBriefcase />}
              count={formData.experience.length}
              expanded={expandedSections.experience}
              onToggle={() => toggleSection('experience')}
            >
              {formData.experience.map((exp, idx) => (
                <div key={idx} className="form-block">
                  <input type="text" name="jobTitle" placeholder="Job Title" value={exp.jobTitle} onChange={e => handleExperienceChange(idx, e)} />
                  <input type="text" name="company" placeholder="Company Name" value={exp.company} onChange={e => handleExperienceChange(idx, e)} />
                  <input type="text" name="location" placeholder="Location (City, State)" value={exp.location} onChange={e => handleExperienceChange(idx, e)} />
                  <div style={{ display: 'flex', gap: '0.5em' }}>
                    <select name="startMonth" value={exp.startMonth} onChange={e => handleExperienceChange(idx, e)}>
                      <option value="">Start Month</option>
                      {months.map(m => <option key={m} value={m}>{m}</option>)}
                    </select>
                    <select name="startYear" value={exp.startYear} onChange={e => handleExperienceChange(idx, e)}>
                      <option value="">Start Year</option>
                      {years.map(y => <option key={y} value={y}>{y}</option>)}
                    </select>
                    {!exp.present && (
                      <>
                        <select name="endMonth" value={exp.endMonth} onChange={e => handleExperienceChange(idx, e)}>
                          <option value="">End Month</option>
                          {months.map(m => <option key={m} value={m}>{m}</option>)}
                        </select>
                        <select name="endYear" value={exp.endYear} onChange={e => handleExperienceChange(idx, e)}>
                          <option value="">End Year</option>
                          {years.map(y => <option key={y} value={y}>{y}</option>)}
                        </select>
                      </>
                    )}
                    <label>
                      <input type="checkbox" name="present" checked={exp.present} onChange={e => handleExperienceChange(idx, e)} /> Present
                    </label>
                  </div>
                  <textarea name="description" placeholder="Job Responsibilities / Achievements (max 400 characters)" value={exp.description} onChange={e => handleExperienceChange(idx, e)} maxLength={400} />
                  <div style={{fontSize: '0.85em', color: '#888', marginBottom: '0.5em'}}>Characters left: {400 - (exp.description?.length || 0)}</div>
                  <button type="button" onClick={() => {
                    if (formData.experience.length > 1) {
                      setFormData(prev => ({
                        ...prev,
                        experience: prev.experience.filter((_, i) => i !== idx)
                      }));
                    }
                  }} disabled={formData.experience.length === 1} className="remove-btn">Remove</button>
                </div>
              ))}
              <button type="button" onClick={() => setFormData(prev => ({
                ...prev,
                experience: [...prev.experience, {
                  jobTitle: '',
                  company: '',
                  location: '',
                  startMonth: '',
                  startYear: '',
                  endMonth: '',
                  endYear: '',
                  present: false,
                  description: ''
                }]
              }))} className="add-btn">+ Add Experience</button>
            </FormSection>

            {/* Education */}
            <FormSection
              title="Education"
              icon={<FaSchool />}
              count={formData.education.length}
              expanded={expandedSections.education}
              onToggle={() => toggleSection('education')}
            >
              {formData.education.map((edu, idx) => (
                <div key={idx} className="form-block">
                  <input type="text" name="degree" placeholder="Degree" value={edu.degree} onChange={e => handleEducationChange(idx, e)} />
                  <input type="text" name="institution" placeholder="Institution" value={edu.institution} onChange={e => handleEducationChange(idx, e)} />
                  <input type="text" name="location" placeholder="Location (City, State)" value={edu.location} onChange={e => handleEducationChange(idx, e)} />
                  <input type="text" name="studyField" placeholder="Field of Study" value={edu.studyField} onChange={e => handleEducationChange(idx, e)} />
                  <div style={{ display: 'flex', gap: '0.5em' }}>
                    <select name="startYear" value={edu.startYear} onChange={e => handleEducationChange(idx, e)}>
                      <option value="">Start Year</option>
                      {years.map(y => <option key={y} value={y}>{y}</option>)}
                    </select>
                    {!edu.pursuing && (
                      <select name="endYear" value={edu.endYear} onChange={e => handleEducationChange(idx, e)}>
                        <option value="">End Year</option>
                        {years.map(y => <option key={y} value={y}>{y}</option>)}
                      </select>
                    )}
                    <label>
                      <input type="checkbox" name="pursuing" checked={edu.pursuing} onChange={e => handleEducationChange(idx, e)} /> Currently Pursuing
                    </label>
                  </div>
                  <input type="text" name="grade" placeholder="Grade/CGPA (optional)" value={edu.grade} onChange={e => handleEducationChange(idx, e)} />
                  <button type="button" onClick={() => {
                    if (formData.education.length > 1) {
                      setFormData(prev => ({
                        ...prev,
                        education: prev.education.filter((_, i) => i !== idx)
                      }));
                    }
                  }} disabled={formData.education.length === 1} className="remove-btn">Remove</button>
                </div>
              ))}
              <button type="button" onClick={() => setFormData(prev => ({
                ...prev,
                education: [...prev.education, {
                  degree: '',
                  institution: '',
                  location: '',
                  studyField: '',
                  startYear: '',
                  endYear: '',
                  pursuing: false,
                  grade: ''
                }]
              }))} className="add-btn">+ Add Education</button>
            </FormSection>

            {/* Projects */}
            <FormSection
              title="Projects"
              icon={<FaProjectDiagram />}
              count={formData.projects.length}
              expanded={expandedSections.projects}
              onToggle={() => toggleSection('projects')}
            >
              {formData.projects.map((proj, idx) => (
                <div key={idx} className="form-block">
                  <input type="text" name="title" placeholder="Project Title" value={proj.title} onChange={e => handleProjectChange(idx, e)} />
                  <textarea name="description" placeholder="Short Description (max 400 characters)" value={proj.description} onChange={e => handleProjectChange(idx, e)} maxLength={400} />
                  <div style={{fontSize: '0.85em', color: '#888', marginBottom: '0.5em'}}>Characters left: {400 - (proj.description?.length || 0)}</div>
                  <input type="text" name="technologies" placeholder="Technologies Used" value={proj.technologies} onChange={e => handleProjectChange(idx, e)} />
                  <input type="text" name="link" placeholder="Project Link (optional)" value={proj.link} onChange={e => handleProjectChange(idx, e)} />
                  <button type="button" onClick={() => {
                    if (formData.projects.length > 1) {
                      setFormData(prev => ({
                        ...prev,
                        projects: prev.projects.filter((_, i) => i !== idx)
                      }));
                    }
                  }} disabled={formData.projects.length === 1} className="remove-btn">Remove</button>
                </div>
              ))}
              <button type="button" onClick={() => setFormData(prev => ({
                ...prev,
                projects: [...prev.projects, {
                  title: '',
                  description: '',
                  technologies: '',
                  link: ''
                }]
              }))} className="add-btn">+ Add Project</button>
            </FormSection>

            {/* Certifications */}
            <FormSection
              title="Certifications"
              icon={<FaAward />}
              count={formData.certifications.length}
              expanded={expandedSections.certifications}
              onToggle={() => toggleSection('certifications')}
            >
              {formData.certifications.map((cert, idx) => (
                <div key={idx} className="form-block">
                  <input type="text" name="name" placeholder="Certification Name" value={cert.name} onChange={e => handleCertificationChange(idx, e)} />
                  <input type="text" name="organization" placeholder="Issuing Organization" value={cert.organization} onChange={e => handleCertificationChange(idx, e)} />
                  <input type="text" name="date" placeholder="Date of Completion" value={cert.date} onChange={e => handleCertificationChange(idx, e)} />
                  <input type="text" name="url" placeholder="Certificate URL (optional)" value={cert.url} onChange={e => handleCertificationChange(idx, e)} />
                  <button type="button" onClick={() => {
                    if (formData.certifications.length > 1) {
                      setFormData(prev => ({
                        ...prev,
                        certifications: prev.certifications.filter((_, i) => i !== idx)
                      }));
                    }
                  }} disabled={formData.certifications.length === 1} className="remove-btn">Remove</button>
                </div>
              ))}
              <button type="button" onClick={() => setFormData(prev => ({
                ...prev,
                certifications: [...prev.certifications, {
                  name: '',
                  organization: '',
                  date: '',
                  url: ''
                }]
              }))} className="add-btn">+ Add Certification</button>
            </FormSection>

            {/* Achievements */}
            <FormSection
              title="Achievements & Awards"
              icon={<FaAward />}
              count={formData.achievements.length}
              expanded={expandedSections.achievements}
              onToggle={() => toggleSection('achievements')}
            >
              {formData.achievements.map((ach, idx) => (
                <div key={idx} className="form-block">
                  <input type="text" name="title" placeholder="Title of Award or Achievement" value={ach.title} onChange={e => handleAchievementChange(idx, e)} />
                  <textarea name="description" placeholder="Description (max 400 characters)" value={ach.description} onChange={e => handleAchievementChange(idx, e)} maxLength={400} />
                  <div style={{fontSize: '0.85em', color: '#888', marginBottom: '0.5em'}}>Characters left: {400 - (ach.description?.length || 0)}</div>
                  <button type="button" onClick={() => {
                    if (formData.achievements.length > 1) {
                      setFormData(prev => ({
                        ...prev,
                        achievements: prev.achievements.filter((_, i) => i !== idx)
                      }));
                    }
                  }} disabled={formData.achievements.length === 1} className="remove-btn">Remove</button>
                </div>
              ))}
              <button type="button" onClick={() => setFormData(prev => ({
                ...prev,
                achievements: [...prev.achievements, {
                  title: '',
                  description: '',
                  date: ''
                }]
              }))} className="add-btn">+ Add Achievement</button>
            </FormSection>

            {/* Languages */}
            <FormSection
              title="Languages"
              icon={<FaLanguage />}
              count={formData.languages.length}
              expanded={expandedSections.languages}
              onToggle={() => toggleSection('languages')}
            >
              {formData.languages.map((lang, idx) => (
                <div key={idx} className="form-block">
                  <input type="text" name="name" placeholder="Language Name" value={lang.name} onChange={e => handleLanguageChange(idx, e)} />
                  <select name="proficiency" value={lang.proficiency} onChange={e => handleLanguageChange(idx, e)}>
                    <option value="Basic">Basic</option>
                    <option value="Intermediate">Intermediate</option>
                    <option value="Fluent">Fluent</option>
                    <option value="Native">Native</option>
                  </select>
                  <button type="button" onClick={() => {
                    if (formData.languages.length > 1) {
                      setFormData(prev => ({
                        ...prev,
                        languages: prev.languages.filter((_, i) => i !== idx)
                      }));
                    }
                  }} disabled={formData.languages.length === 1} className="remove-btn">Remove</button>
                </div>
              ))}
              <button
  type="button"
  onClick={() =>
    setFormData(prev => ({
      ...prev,
      languages: [
        ...prev.languages,
        {
          name: '',
          proficiency: 'Basic',
        },
      ],
    }))
  }
  className="add-btn"
>
  + Add Language
</button>

            </FormSection>

            {/* Hobbies */}
            <FormSection
              title="Hobbies & Interests"
              icon={<FaGamepad />}
              expanded={expandedSections.hobbies}
              onToggle={() => toggleSection('hobbies')}
            >
              <input type="text" name="hobbies" placeholder="e.g. Reading, Music, Sports, Travel" value={formData.hobbies} onChange={handleChange} />
            </FormSection>

            {/* References */}
            <FormSection
              title="References"
              icon={<FaBook />}
              expanded={expandedSections.references}
              onToggle={() => toggleSection('references')}
            >
              <textarea name="references" placeholder="Reference details (optional)" value={formData.references} onChange={handleChange} />
            </FormSection>

            <button type="submit" className="validate-btn" onClick={validate}>Validate</button>
          </section>

          {/* Resume Preview */}
          <section className="preview-card">
            <h2>Live Preview</h2>
            <div ref={previewRef}>
              <ResumeTemplate formData={formData} template={template} clickableContacts={true} />
            </div>

            {formData.name && formData.email && formData.phone ? (
              <div className="download-container">
                <h3>Download Resume PDF</h3>
                <PDFDownloadLink
                  document={<ResumePDF formData={formData} template={template} />}
                  fileName="resume.pdf"
                >
                  {({ loading }) => (
                    <button className="validate-btn">
                      {loading ? 'Preparing PDF...' : 'Download PDF'}
                    </button>
                  )}
                </PDFDownloadLink>
              </div>
            ) : (
              <div className="download-container">
                <h3>Download Resume PDF</h3>
                <button className="validate-btn" disabled>
                  Fill in Name, Email, and Phone to enable download
                </button>
              </div>
            )}
          </section>
        </main>
      </div>
    </div>
  );
}

// Reusable Collapsible Section Component
function FormSection({ title, icon, children, count, expanded, onToggle }) {
  return (
    <div className="form-section">
      <div className="form-section-header" onClick={onToggle}>
        <div style={{ display: 'flex', gap: '0.5em', alignItems: 'center' }}>
          {icon}
          <h3>{title}</h3>
          {count !== undefined && <span>({count} entries)</span>}
        </div>
        <span>{expanded ? <FaChevronUp /> : <FaChevronDown />}</span>
      </div>
      {expanded && <div className="form-section-content">{children}</div>}
    </div>
  );
}

export default App;