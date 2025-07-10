import React from 'react';
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Image,
  Link
} from '@react-pdf/renderer';

// Styles for all templates
const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#f7fafd',
    fontSize: 11,
    fontFamily: 'Helvetica',
    padding: 0,
  },
  sidebar: {
    width: 170,
    backgroundColor: '#2a4d69',
    color: '#fff',
    padding: 16,
    minHeight: '100%',
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
  },
  profilePic: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginBottom: 24,
    objectFit: 'cover',
    alignSelf: 'center',
    border: '2px solid #fff',
  },
  section: {
    marginBottom: 28,
    paddingBottom: 8,
    borderBottom: '1px solid #e0e0e0',
  },
  sectionTitle: {
    fontWeight: 'bold',
    fontSize: 13,
    marginBottom: 10,
    color: '#1976d2',
    letterSpacing: 0.5,
    textTransform: 'uppercase',
  },
  main: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#2a4d69',
    marginBottom: 4,
    letterSpacing: 0.5,
  },
  profession: {
    fontSize: 13,
    color: '#4b6584',
    marginBottom: 18,
    fontWeight: 500,
  },
  about: {
    marginBottom: 16,
  },
  expBlock: {
    marginBottom: 16,
    paddingLeft: 8,
    borderLeft: '2px solid #1976d2',
  },
  expTitle: {
    fontWeight: 'bold',
    fontSize: 12,
    marginBottom: 2,
    color: '#222',
  },
  expCompany: {
    fontSize: 11,
    color: '#1976d2',
    marginBottom: 2,
  },
  expDates: {
    fontSize: 10,
    color: '#888',
    marginBottom: 4,
  },
  eduBlock: {
    marginBottom: 16,
    paddingLeft: 8,
    borderLeft: '2px solid #1976d2',
  },
  eduTitle: {
    fontWeight: 'bold',
    fontSize: 12,
    marginBottom: 2,
    color: '#222',
  },
  eduSchool: {
    fontSize: 11,
    color: '#1976d2',
    marginBottom: 2,
  },
  eduDates: {
    fontSize: 10,
    color: '#888',
    marginBottom: 4,
  },
  link: {
    color: '#e3eaf7',
    textDecoration: 'underline',
    wordBreak: 'break-all',
  },
  label: {
    fontWeight: 'bold',
    color: '#fff',
    fontSize: 11,
    marginTop: 2,
  },
  list: {
    margin: 0,
    padding: 0,
    marginBottom: 8,
  },
  listItem: {
    marginBottom: 6,
    paddingLeft: 10,
    position: 'relative',
  },
  bullet: {
    position: 'absolute',
    left: 0,
    top: 0,
    color: '#1976d2',
    fontWeight: 'bold',
    fontSize: 13,
  },
  // Template 2 styles
  page2: {
    flexDirection: 'column',
    backgroundColor: '#fff',
    fontSize: 11,
    fontFamily: 'Helvetica',
    padding: 32,
  },
  header2: {
    flexDirection: 'row',
    backgroundColor: '#1976d2',
    color: '#fff',
    padding: 16,
    marginBottom: 20,
    alignItems: 'center',
  },
  profilePic2: {
    width: 70,
    height: 70,
    borderRadius: 35,
    objectFit: 'cover',
    marginRight: 12,
  },
  headerMain2: {
    flexDirection: 'column',
  },
  name2: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 8,
  },
  profession2: {
    fontSize: 12,
    color: '#e3eaf7',
    marginBottom: 8,
  },
  contact2: {
    fontSize: 10,
    color: '#e3eaf7',
    marginBottom: 4,
  },
  section2: {
    marginBottom: 20,
  },
  sectionTitle2: {
    fontWeight: 'bold',
    fontSize: 12,
    marginBottom: 8,
    borderBottom: '1px solid #ccc',
    paddingBottom: 4,
  },
  content2: {
    flexDirection: 'row',
  },
  leftCol2: {
    width: '40%',
    paddingRight: 16,
  },
  rightCol2: {
    width: '60%',
    paddingLeft: 8,
  },
  list2: {
    margin: 0,
    padding: 0,
    marginBottom: 8,
  },
  listItem2: {
    marginBottom: 6,
  },
  // Template 3 styles
  page3: {
    flexDirection: 'column',
    backgroundColor: '#fff',
    fontSize: 11,
    fontFamily: 'Helvetica',
    padding: 0,
  },
  header3: {
    flexDirection: 'row',
    backgroundColor: '#34495e',
    color: '#fff',
    padding: 16,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerContent3: {
    flexDirection: 'column',
  },
  name3: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 2,
  },
  profession3: {
    fontSize: 12,
    color: '#bdc3c7',
    marginBottom: 4,
  },
  contactInfo3: {
    fontSize: 9,
    color: '#ecf0f1',
    marginBottom: 2,
  },
  socialLinks3: {
    fontSize: 9,
    color: '#3498db',
  },
  profilePic3: {
    width: 80,
    height: 80,
    borderRadius: 40,
    objectFit: 'cover',
  },
  body3: {
    flexDirection: 'row',
    padding: 16,
  },
  mainContent3: {
    flex: 2,
    paddingRight: 12,
  },
  sidebar3: {
    flex: 1,
    backgroundColor: '#f8f9fa',
    padding: 12,
  },
  section3: {
    marginBottom: 12,
  },
  sectionTitle3: {
    fontWeight: 'bold',
    fontSize: 12,
    color: '#2c3e50',
    marginBottom: 6,
    borderBottom: '1px solid #3498db',
    paddingBottom: 2,
  },
  expCard3: {
    backgroundColor: '#fff',
    border: '1px solid #e9ecef',
    borderRadius: 4,
    padding: 8,
    marginBottom: 6,
  },
  expHeader3: {
    marginBottom: 4,
  },
  expTitle3: {
    fontWeight: 'bold',
    fontSize: 11,
    color: '#2c3e50',
    marginBottom: 2,
  },
  company3: {
    fontSize: 10,
    color: '#3498db',
    marginRight: 8,
  },
  dates3: {
    fontSize: 9,
    color: '#7f8c8d',
    marginBottom: 4,
  },
  skillsGrid3: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  skillTag3: {
    backgroundColor: '#3498db',
    color: '#fff',
    padding: '2 6',
    borderRadius: 10,
    fontSize: 8,
    marginRight: 4,
    marginBottom: 4,
  },
  // Template 4 styles
  page4: {
    flexDirection: 'column',
    backgroundColor: '#fff',
    fontSize: 11,
    fontFamily: 'Helvetica',
    padding: 0,
  },
  header4: {
    flexDirection: 'row',
    backgroundColor: '#e74c3c',
    color: '#fff',
    padding: 16,
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  headerLeft4: {
    flexDirection: 'column',
  },
  name4: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 2,
  },
  profession4: {
    fontSize: 12,
    color: '#fadbd8',
    marginBottom: 0,
  },
  headerRight4: {
    textAlign: 'right',
  },
  contactItem4: {
    marginBottom: 3,
    fontSize: 9,
    color: '#fadbd8',
  },
  content4: {
    flexDirection: 'row',
    padding: 16,
  },
  leftColumn4: {
    flex: 2,
    paddingRight: 12,
  },
  rightColumn4: {
    flex: 1,
    backgroundColor: '#f8f9fa',
    padding: 12,
  },
  section4: {
    marginBottom: 12,
  },
  sectionTitle4: {
    fontWeight: 'bold',
    fontSize: 12,
    color: '#2c3e50',
    marginBottom: 6,
    borderBottom: '1px solid #e74c3c',
    paddingBottom: 2,
  },
  expItem4: {
    marginBottom: 8,
    paddingBottom: 8,
    borderBottom: '1px solid #ecf0f1',
  },
  expTitle4: {
    marginBottom: 3,
  },
  expTitleText4: {
    fontWeight: 'bold',
    fontSize: 11,
    color: '#2c3e50',
    marginBottom: 2,
  },
  company4: {
    fontSize: 10,
    color: '#e74c3c',
  },
  expDates4: {
    fontSize: 9,
    color: '#7f8c8d',
    marginBottom: 3,
  },
  skillsList4: {
    flexDirection: 'column',
  },
  skillItem4: {
    backgroundColor: '#e74c3c',
    color: '#fff',
    padding: '3 6',
    borderRadius: 2,
    fontSize: 9,
    marginBottom: 3,
  },
  // Template 5 styles
  page5: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    fontSize: 11,
    fontFamily: 'Helvetica',
    padding: 0,
  },
  sidebar5: {
    width: 200,
    backgroundColor: '#27ae60',
    color: '#fff',
    padding: 16,
    minHeight: '100%',
  },
  profilePic5: {
    width: 90,
    height: 90,
    borderRadius: 45,
    marginBottom: 16,
    objectFit: 'cover',
    alignSelf: 'center',
  },
  contactSection5: {
    marginBottom: 12,
  },
  sectionTitle5: {
    fontWeight: 'bold',
    fontSize: 12,
    marginBottom: 4,
    color: '#fff',
    borderBottom: '1px solid #fff3',
    paddingBottom: 2,
  },
  contactItem5: {
    marginBottom: 6,
    fontSize: 9,
  },
  label5: {
    fontWeight: 'bold',
    marginBottom: 2,
  },
  mainContent5: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  header5: {
    marginBottom: 16,
    paddingBottom: 8,
    borderBottom: '1px solid #27ae60',
  },
  name5: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#27ae60',
    marginBottom: 2,
  },
  profession5: {
    fontSize: 12,
    color: '#7f8c8d',
    marginBottom: 0,
  },
  section5: {
    marginBottom: 12,
  },
  sectionTitleMain5: {
    fontWeight: 'bold',
    fontSize: 12,
    color: '#27ae60',
    marginBottom: 6,
    borderBottom: '1px solid #ecf0f1',
    paddingBottom: 2,
  },
  expItem5: {
    marginBottom: 8,
    paddingBottom: 8,
    borderBottom: '1px solid #ecf0f1',
  },
  expHeader5: {
    marginBottom: 3,
  },
  expTitle5: {
    fontWeight: 'bold',
    fontSize: 11,
    color: '#2c3e50',
    marginBottom: 2,
  },
  company5: {
    fontSize: 10,
    color: '#27ae60',
    marginRight: 8,
  },
  dates5: {
    fontSize: 9,
    color: '#7f8c8d',
  },
  skillsList5: {
    flexDirection: 'column',
  },
  skillItem5: {
    backgroundColor: '#fff',
    color: '#27ae60',
    padding: '2 6',
    borderRadius: 2,
    fontSize: 9,
    marginBottom: 3,
    textAlign: 'center',
  },
});

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

const ResumePDF = ({ formData, template }) => {
  if (!formData || !template) return null;

  const truncateText = (text, maxLength = 300) => {
    if (!text) return '';
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + '...';
  };

  const renderContactInfo = () => (
    <>
      <Text style={styles.label}>Phone:</Text>
      <Link style={styles.link} src={`tel:${formData.phone}`}>{formData.phone}</Link>
      <Text style={styles.label}>Email:</Text>
      <Link style={styles.link} src={`mailto:${formData.email}`}>{formData.email}</Link>
      <Text style={styles.label}>Address:</Text>
      <Text>{formData.address}</Text>
      {formData.linkedin && <><Text style={styles.label}>LinkedIn:</Text><Link style={styles.link} src={formData.linkedin}>{formData.linkedin}</Link></>}
      {formData.website && <><Text style={styles.label}>Website:</Text><Link style={styles.link} src={formData.website}>{formData.website}</Link></>}
      {formData.github && <><Text style={styles.label}>GitHub:</Text><Link style={styles.link} src={formData.github}>{formData.github}</Link></>}
    </>
  );

  const renderSidebarLists = () => (
    <>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Skills</Text>
        {listItems(formData.skills).map((skill, i) => (
          <Text key={i} style={styles.listItem}><Text style={styles.bullet}>• </Text>{typeof skill === 'object' ? skill.name : skill}</Text>
        ))}
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Languages</Text>
        {formData.languages && formData.languages.length > 0 ? 
          formData.languages.map((lang, i) => (
            <Text key={i} style={styles.listItem}>{lang.name} - {lang.proficiency}</Text>
          )) :
          listItems(formData.languages).map((lang, i) => (
            <Text key={i} style={styles.listItem}>{lang}</Text>
          ))
        }
      </View>
      {formData.hobbies && (
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Hobbies</Text>
          {listItems(formData.hobbies).map((hobby, i) => (
            <Text key={i} style={styles.listItem}>{hobby}</Text>
          ))}
        </View>
      )}
      {formData.references && (
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>References</Text>
          <Text>{formData.references}</Text>
        </View>
      )}
    </>
  );

  const renderMainContent = () => (
    <>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>About Me</Text>
        <Text>{truncateText(formData.summary)}</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Experience</Text>
        {formData.experience.map((exp, idx) => (
          <View key={idx} style={styles.expBlock}>
            <Text style={styles.expTitle}>{exp.jobTitle || 'Job Title'}</Text>
            <Text style={styles.expCompany}>{exp.company || 'Company'}</Text>
            <Text style={styles.expDates}>
              {exp.startMonth} {exp.startYear} - {exp.present ? 'Present' : `${exp.endMonth} ${exp.endYear}`}
            </Text>
            <Text>{truncateText(exp.description)}</Text>
          </View>
        ))}
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Education</Text>
        {formData.education.map((edu, idx) => (
          <View key={idx} style={styles.eduBlock}>
            <Text style={styles.eduTitle}>{edu.degree || 'Degree'} in {edu.studyField || 'Field'}</Text>
            <Text style={styles.eduSchool}>{edu.institution || 'Institution'}</Text>
            <Text style={styles.eduDates}>{edu.startYear} - {edu.pursuing ? 'Present' : edu.endYear}</Text>
          </View>
        ))}
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Projects</Text>
        {formData.projects && formData.projects.length > 0 && formData.projects.map((proj, idx) => (
          <View key={idx} style={styles.expBlock}>
            <Text style={styles.expTitle}>{proj.title || 'Project Title'}</Text>
            {proj.technologies && <Text style={styles.expCompany}>{proj.technologies}</Text>}
            {proj.link && <Text style={styles.expCompany}>Link: {proj.link}</Text>}
            <Text>{truncateText(proj.description)}</Text>
          </View>
        ))}
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Achievements & Awards</Text>
        {formData.achievements && formData.achievements.length > 0 && formData.achievements.map((ach, idx) => (
          <View key={idx} style={styles.expBlock}>
            <Text style={styles.expTitle}>{ach.title || 'Achievement Title'}</Text>
            {ach.date && <Text style={styles.expDates}>{ach.date}</Text>}
            <Text>{truncateText(ach.description)}</Text>
          </View>
        ))}
      </View>
    </>
  );

  const renderTemplate1 = () => (
    <Page size="A4" style={styles.page}>
      <View style={styles.sidebar}>
        {formData.photo && <Image src={formData.photo} style={styles.profilePic} />}
        {renderContactInfo()}
        {renderSidebarLists()}
      </View>
      <View style={styles.main}>
        <Text style={styles.name}>{formData.name || 'Your Name'}</Text>
        <Text style={styles.profession}>{formData.profession || 'Your Profession'}</Text>
        {renderMainContent()}
      </View>
    </Page>
  );

  const renderTemplate2 = () => (
    <Page size="A4" style={styles.page2}>
      <View style={styles.header2}>
        {formData.photo && <Image src={formData.photo} style={styles.profilePic2} />}
        <View style={styles.headerMain2}>
          <Text style={styles.name2}>{formData.name || 'Your Name'}</Text>
          <Text style={styles.profession2}>{formData.profession || 'Your Profession'}</Text>
          <Text style={styles.contact2}>📧 {formData.email || 'your.email@example.com'}</Text>
          <Text style={styles.contact2}>📱 {formData.phone || '123-456-7890'}</Text>
          <Text style={styles.contact2}>📍 {formData.address || 'Your Address'}</Text>
        </View>
      </View>
      <View style={styles.content2}>
        <View style={styles.leftCol2}>
          <View style={styles.section2}>
            <Text style={styles.sectionTitle2}>Skills</Text>
            <View style={styles.list2}>
              {listItems(formData.skills).map((skill, i) => (
                <Text key={i} style={styles.listItem2}>{typeof skill === 'object' ? skill.name : skill}</Text>
              ))}
            </View>
          </View>
          <View style={styles.section2}>
            <Text style={styles.sectionTitle2}>Languages</Text>
            <View style={styles.list2}>
              {formData.languages && formData.languages.length > 0 ? 
                formData.languages.map((lang, i) => (
                  <Text key={i} style={styles.listItem2}>{lang.name} - {lang.proficiency}</Text>
                )) :
                listItems(formData.languages).map((lang, i) => (
                  <Text key={i} style={styles.listItem2}>{lang}</Text>
                ))
              }
            </View>
          </View>
          {formData.hobbies && (
            <View style={styles.section2}>
              <Text style={styles.sectionTitle2}>Hobbies</Text>
              <View style={styles.list2}>
                {listItems(formData.hobbies).map((hobby, i) => (
                  <Text key={i} style={styles.listItem2}>{hobby}</Text>
                ))}
              </View>
            </View>
          )}
        </View>
        <View style={styles.rightCol2}>
          <View style={styles.section2}>
            <Text style={styles.sectionTitle2}>About Me</Text>
            <Text>{formData.summary}</Text>
          </View>
          <View style={styles.section2}>
            <Text style={styles.sectionTitle2}>Experience</Text>
            {formData.experience.map((exp, idx) => (
              <View key={idx} style={styles.section2}>
                <Text style={styles.sectionTitle2}>{exp.jobTitle}</Text>
                <Text>{exp.company}</Text>
                <Text>{exp.startMonth} {exp.startYear} - {exp.present ? 'Present' : `${exp.endMonth} ${exp.endYear}`}</Text>
                <Text>{exp.description}</Text>
              </View>
            ))} 
          </View>
          <View style={styles.section2}>
            <Text style={styles.sectionTitle2}>Education</Text>
            {formData.education.map((edu, idx) => (
              <View key={idx} style={styles.section2}>
                <Text style={styles.sectionTitle2}>{edu.degree}</Text>
                <Text>{edu.institution}</Text>
                <Text>{edu.studyField}</Text>
                <Text>{edu.startYear} - {edu.pursuing ? 'Present' : edu.endYear}</Text>
              </View>
            ))}
          </View>
        </View>
      </View>
    </Page>
  );

  const renderTemplate3 = () => (
    <Page size="A4" style={styles.page3}>
      <View style={styles.header3}>
        <View style={styles.headerContent3}>
          <Text style={styles.name3}>{formData.name || 'Your Name'}</Text>
          <Text style={styles.profession3}>{formData.profession || 'Your Profession'}</Text>
          <Text style={styles.contactInfo3}>{formData.email || 'your.email@example.com'} | {formData.phone || '123-456-7890'} | {formData.address || 'Your Address'}</Text>
          {formData.linkedin && <Text style={styles.socialLinks3}>LinkedIn: {formData.linkedin}</Text>}
          {formData.github && <Text style={styles.socialLinks3}>GitHub: {formData.github}</Text>}
        </View>
        {formData.photo && <Image src={formData.photo} style={styles.profilePic3} />}
      </View>
      <View style={styles.body3}>
        <View style={styles.mainContent3}>
          <View style={styles.section3}>
            <Text style={styles.sectionTitle3}>About Me</Text>
            <Text>{formData.summary}</Text>
          </View>
          <View style={styles.section3}>
            <Text style={styles.sectionTitle3}>Experience</Text>
            {formData.experience.map((exp, idx) => (
              <View key={idx} style={styles.expCard3}>
                <View style={styles.expHeader3}>
                  <Text style={styles.expTitle3}>{exp.jobTitle || 'Job Title'}</Text>
                </View>
                <Text style={styles.dates3}>
                  {exp.startMonth} {exp.startYear} - {exp.present ? 'Present' : `${exp.endMonth} ${exp.endYear}`}
                </Text>
                <Text>{exp.description}</Text>
              </View>
            ))}
          </View>
          <View style={styles.section3}>
            <Text style={styles.sectionTitle3}>Education</Text>
            {formData.education.map((edu, idx) => (
              <View key={idx} style={styles.expCard3}>
                <View style={styles.expHeader3}>
                  <Text style={styles.expTitle3}>{edu.degree || 'Degree'}</Text>
                  <Text style={styles.company3}>{edu.institution || 'Institution'}</Text>
                </View>
                <Text style={styles.dates3}>{edu.startYear} - {edu.pursuing ? 'Present' : edu.endYear}</Text>
                <Text>{edu.studyField || 'Field of Study'}</Text>
              </View>
            ))}
          </View>
          {formData.projects && formData.projects.length > 0 && (
            <View style={styles.section3}>
              <Text style={styles.sectionTitle3}>Projects</Text>
              {formData.projects.map((proj, idx) => (
                <View key={idx} style={styles.expCard3}>
                  <View style={styles.expHeader3}>
                    <Text style={styles.expTitle3}>{proj.title || 'Project Title'}</Text>
                    {proj.technologies && <Text style={styles.company3}>{proj.technologies}</Text>}
                  </View>
                  <Text>{proj.description || 'Project description...'}</Text>
                </View>
              ))}
            </View>
          )}
        </View>
        <View style={styles.sidebar3}>
          <View style={styles.section3}>
            <Text style={styles.sectionTitle3}>Skills</Text>
            <View style={styles.skillsGrid3}>
              {listItems(formData.skills).map((skill, i) => (
                <Text key={i} style={styles.skillTag3}>{typeof skill === 'object' ? skill.name : skill}</Text>
              ))}
            </View>
          </View>
          <View style={styles.section3}>
            <Text style={styles.sectionTitle3}>Languages</Text>
            <View style={styles.skillsGrid3}>
              {formData.languages && formData.languages.length > 0 ? 
                formData.languages.map((lang, i) => (
                  <Text key={i} style={styles.skillTag3}>{lang.name} - {lang.proficiency}</Text>
                )) :
                listItems(formData.languages).map((lang, i) => (
                  <Text key={i} style={styles.skillTag3}>{lang}</Text>
                ))
              }
            </View>
          </View>
          {formData.hobbies && (
            <View style={styles.section3}>
              <Text style={styles.sectionTitle3}>Hobbies</Text>
              <View style={styles.skillsGrid3}>
                {listItems(formData.hobbies).map((hobby, i) => (
                  <Text key={i} style={styles.skillTag3}>{hobby}</Text>
                ))}
              </View>
            </View>
          )}
          {formData.references && (
            <View style={styles.section3}>
              <Text style={styles.sectionTitle3}>References</Text>
              <Text>{formData.references}</Text>
            </View>
          )}
        </View>
      </View>
    </Page>
  );

  const renderTemplate4 = () => (
    <Page size="A4" style={styles.page4}>
      <View style={styles.header4}>
        <View style={styles.headerLeft4}>
          <Text style={styles.name4}>{formData.name || 'Your Name'}</Text>
          <Text style={styles.profession4}>{formData.profession || 'Your Profession'}</Text>
        </View>
        <View style={styles.headerRight4}>
          <Text style={styles.contactItem4}>📧 {formData.email || 'your.email@example.com'}</Text>
          <Text style={styles.contactItem4}>📱 {formData.phone || '123-456-7890'}</Text>
          <Text style={styles.contactItem4}>📍 {formData.address || 'Your Address'}</Text>
        </View>
      </View>
      <View style={styles.content4}>
        <View style={styles.leftColumn4}>
          <View style={styles.section4}>
            <Text style={styles.sectionTitle4}>Summary</Text>
            <Text>{formData.summary}</Text>
          </View>
          <View style={styles.section4}>
            <Text style={styles.sectionTitle4}>Experience</Text>
            {formData.experience.map((exp, idx) => (
              <View key={idx} style={styles.expItem4}>
                <View style={styles.expTitle4}>
                  <Text style={styles.expTitleText4}>{exp.jobTitle || 'Job Title'}</Text>
                  <Text style={styles.company4}>{exp.company || 'Company'}</Text>
                </View>
                <Text style={styles.expDates4}>
                  {exp.startMonth} {exp.startYear} - {exp.present ? 'Present' : `${exp.endMonth} ${exp.endYear}`}
                </Text>
                <Text>{exp.description}</Text>
              </View>
            ))}
          </View>
          <View style={styles.section4}>
            <Text style={styles.sectionTitle4}>Education</Text>
            {formData.education.map((edu, idx) => (
              <View key={idx} style={styles.expItem4}>
                <View style={styles.expTitle4}>
                  <Text style={styles.expTitleText4}>{edu.degree || 'Degree'}</Text>
                  <Text style={styles.company4}>{edu.institution || 'Institution'}</Text>
                </View>
                <Text style={styles.expDates4}>{edu.startYear} - {edu.pursuing ? 'Present' : edu.endYear}</Text>
                <Text>{edu.studyField || 'Field of Study'}</Text>
              </View>
            ))}
          </View>
        </View>
        <View style={styles.rightColumn4}>
          <View style={styles.section4}>
            <Text style={styles.sectionTitle4}>Skills</Text>
            <View style={styles.skillsList4}>
              {listItems(formData.skills).map((skill, i) => (
                <Text key={i} style={styles.skillItem4}>{typeof skill === 'object' ? skill.name : skill}</Text>
              ))}
            </View>
          </View>
          <View style={styles.section4}>
            <Text style={styles.sectionTitle4}>Languages</Text>
            <View style={styles.skillsList4}>
              {formData.languages && formData.languages.length > 0 ? 
                formData.languages.map((lang, i) => (
                  <Text key={i} style={styles.skillItem4}>{lang.name} - {lang.proficiency}</Text>
                )) :
                listItems(formData.languages).map((lang, i) => (
                  <Text key={i} style={styles.skillItem4}>{lang}</Text>
                ))
              }
            </View>
          </View>
          {formData.hobbies && (
            <View style={styles.section4}>
              <Text style={styles.sectionTitle4}>Hobbies</Text>
              <View style={styles.skillsList4}>
                {listItems(formData.hobbies).map((hobby, i) => (
                  <Text key={i} style={styles.skillItem4}>{hobby}</Text>
                ))}
              </View>
            </View>
          )}
          {formData.references && (
            <View style={styles.section4}>
              <Text style={styles.sectionTitle4}>References</Text>
              <Text>{formData.references}</Text>
            </View>
          )}
        </View>
      </View>
    </Page>
  );

  const renderTemplate5 = () => (
    <Page size="A4" style={styles.page5}>
      <View style={styles.sidebar5}>
        {formData.photo && <Image src={formData.photo} style={styles.profilePic5} />}
        <View style={styles.section5}>
          <Text style={styles.sectionTitleMain5}>Contact</Text>
          <Text>Email: {formData.email || 'your.email@example.com'}</Text>
          <Text>Phone: {formData.phone || '123-456-7890'}</Text>
          <Text>Address: {formData.address || 'Your Address'}</Text>
        </View>
        <View style={styles.section5}>
          <Text style={styles.sectionTitleMain5}>Skills</Text>
          {listItems(formData.skills).map((skill, i) => (
            <Text key={i} style={styles.skillItem5}>{typeof skill === 'object' ? skill.name : skill}</Text>
          ))}
        </View>
        <View style={styles.section5}>
          <Text style={styles.sectionTitleMain5}>Languages</Text>
          {formData.languages && formData.languages.length > 0 ? 
            formData.languages.map((lang, i) => (
              <Text key={i} style={styles.skillItem5}>{lang.name} - {lang.proficiency}</Text>
            )) :
            listItems(formData.languages).map((lang, i) => (
              <Text key={i} style={styles.skillItem5}>{lang}</Text>
            ))
          }
        </View>
      </View>
      <View style={styles.mainContent5}>
        <View style={styles.header5}>
          <Text style={styles.name5}>{formData.name || 'Your Name'}</Text>
          <Text style={styles.profession5}>{formData.profession || 'Your Profession'}</Text>
        </View>
        <View style={styles.section5}>
          <Text style={styles.sectionTitleMain5}>About Me</Text>
          <Text>{formData.summary}</Text>
        </View>
        <View style={styles.section5}>
          <Text style={styles.sectionTitleMain5}>Experience</Text>
          {formData.experience.map((exp, idx) => (
            <View key={idx} style={styles.expItem5}>
              <View style={styles.expHeader5}>
                <Text style={styles.expTitle5}>{exp.jobTitle || 'Job Title'}</Text>
                <Text style={styles.company5}>{exp.company || 'Company'}</Text>
              </View>
              <Text style={styles.dates5}>
                {exp.startMonth} {exp.startYear} - {exp.present ? 'Present' : `${exp.endMonth} ${exp.endYear}`}
              </Text>
              <Text>{exp.description}</Text>
            </View>
          ))}
        </View>
        <View style={styles.section5}>
          <Text style={styles.sectionTitleMain5}>Education</Text>
          {formData.education.map((edu, idx) => (
            <View key={idx} style={styles.expItem5}>
              <View style={styles.expHeader5}>
                <Text style={styles.expTitle5}>{edu.degree || 'Degree'}</Text>
                <Text style={styles.company5}>{edu.institution || 'Institution'}</Text>
              </View>
              <Text style={styles.dates5}>{edu.startYear} - {edu.pursuing ? 'Present' : edu.endYear}</Text>
              <Text>{edu.studyField || 'Field of Study'}</Text>
            </View>
          ))}
        </View>
      </View>
    </Page>
  );

  // [2] Add renderTemplate6 and renderTemplate7. Use unique layouts and color schemes. Render all fields (photo, name, profession, contact info, website, LinkedIn, GitHub, summary, experience, education, projects, certifications, achievements, skills, languages, hobbies, references). Integrate with the template prop for selection.
  const renderTemplate6 = () => (
    <Page size="A4" style={styles.page}>
      <View style={styles.sidebar}>
        {formData.photo && <Image src={formData.photo} style={styles.profilePic} />}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Contact</Text>
          <Text style={styles.label}>Email:</Text>
          <Link style={styles.link} src={`mailto:${formData.email}`}>{formData.email || 'your.email@example.com'}</Link>
          <Text style={styles.label}>Phone:</Text>
          <Link style={styles.link} src={`tel:${formData.phone}`}>{formData.phone || '123-456-7890'}</Link>
          <Text style={styles.label}>Address:</Text>
          <Text>{formData.address || 'Your Address'}</Text>
          <Text style={styles.label}>Website:</Text>
          <Link style={styles.link} src={formData.website}>{formData.website}</Link>
          <Text style={styles.label}>LinkedIn:</Text>
          <Link style={styles.link} src={formData.linkedin}>{formData.linkedin}</Link>
          <Text style={styles.label}>GitHub:</Text>
          <Link style={styles.link} src={formData.github}>{formData.github}</Link>
        </View>
        {formData.skills && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Skills</Text>
            <View style={styles.list}>
              {listItems(formData.skills).map((skill, i) => (
                <Text key={i} style={styles.listItem}><Text style={styles.bullet}>• </Text>{typeof skill === 'object' ? skill.name : skill}</Text>
              ))}
            </View>
          </View>
        )}
        {formData.languages && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Languages</Text>
            <View style={styles.list}>
              {formData.languages.map((lang, i) => (
                <Text key={i} style={styles.listItem}>{lang.name} - {lang.proficiency}</Text>
              ))}
            </View>
          </View>
        )}
        {formData.hobbies && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Hobbies</Text>
            <View style={styles.list}>
              {listItems(formData.hobbies).map((hobby, i) => (
                <Text key={i} style={styles.listItem}>{hobby}</Text>
              ))}
            </View>
          </View>
        )}
        {formData.references && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>References</Text>
            <Text>{formData.references}</Text>
          </View>
        )}
      </View>
      <View style={styles.main}>
        <View style={styles.section}>
          <Text style={styles.name}>{formData.name || 'Your Name'}</Text>
          <Text style={styles.profession}>{formData.profession || 'Your Profession'}</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>About Me</Text>
          <Text>{formData.summary}</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Experience</Text>
          {formData.experience.map((exp, idx) => (
            <View key={idx} style={styles.expBlock}>
              <Text style={styles.expTitle}>{exp.jobTitle || 'Job Title'}</Text>
              <Text style={styles.expCompany}>{exp.company || 'Company'}</Text>
              <Text style={styles.expDates}>
                {exp.startMonth} {exp.startYear} - {exp.present ? 'Present' : `${exp.endMonth} ${exp.endYear}`}
              </Text>
              <Text>{exp.description}</Text>
            </View>
          ))}
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Education</Text>
          {formData.education.map((edu, idx) => (
            <View key={idx} style={styles.eduBlock}>
              <Text style={styles.eduTitle}>{edu.degree || 'Degree'} in {edu.studyField || 'Field'}</Text>
              <Text style={styles.eduSchool}>{edu.institution || 'Institution'}</Text>
              <Text style={styles.eduDates}>{edu.startYear} - {edu.pursuing ? 'Present' : edu.endYear}</Text>
            </View>
          ))}
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Projects</Text>
          {formData.projects && formData.projects.length > 0 && formData.projects.map((proj, idx) => (
            <View key={idx} style={styles.expBlock}>
              <Text style={styles.expTitle}>{proj.title || 'Project Title'}</Text>
              {proj.technologies && <Text style={styles.expCompany}>{proj.technologies}</Text>}
              {proj.link && <Text style={styles.expCompany}>Link: {proj.link}</Text>}
              <Text>{proj.description}</Text>
            </View>
          ))}
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Achievements & Awards</Text>
          {formData.achievements && formData.achievements.length > 0 && formData.achievements.map((ach, idx) => (
            <View key={idx} style={styles.expBlock}>
              <Text style={styles.expTitle}>{ach.title || 'Achievement Title'}</Text>
              {ach.date && <Text style={styles.expDates}>{ach.date}</Text>}
              <Text>{ach.description}</Text>
            </View>
          ))}
        </View>
      </View>
    </Page>
  );

  const renderTemplate7 = () => (
    <Page size="A4" style={styles.page}>
      <View style={styles.sidebar}>
        {formData.photo && <Image src={formData.photo} style={styles.profilePic} />}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Contact</Text>
          <Text style={styles.label}>Email:</Text>
          <Link style={styles.link} src={`mailto:${formData.email}`}>{formData.email || 'your.email@example.com'}</Link>
          <Text style={styles.label}>Phone:</Text>
          <Link style={styles.link} src={`tel:${formData.phone}`}>{formData.phone || '123-456-7890'}</Link>
          <Text style={styles.label}>Address:</Text>
          <Text>{formData.address || 'Your Address'}</Text>
          <Text style={styles.label}>Website:</Text>
          <Link style={styles.link} src={formData.website}>{formData.website}</Link>
          <Text style={styles.label}>LinkedIn:</Text>
          <Link style={styles.link} src={formData.linkedin}>{formData.linkedin}</Link>
          <Text style={styles.label}>GitHub:</Text>
          <Link style={styles.link} src={formData.github}>{formData.github}</Link>
        </View>
        {formData.skills && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Skills</Text>
            <View style={styles.list}>
              {listItems(formData.skills).map((skill, i) => (
                <Text key={i} style={styles.listItem}><Text style={styles.bullet}>• </Text>{typeof skill === 'object' ? skill.name : skill}</Text>
              ))}
            </View>
          </View>
        )}
        {formData.languages && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Languages</Text>
            <View style={styles.list}>
              {formData.languages.map((lang, i) => (
                <Text key={i} style={styles.listItem}>{lang.name} - {lang.proficiency}</Text>
              ))}
            </View>
          </View>
        )}
        {formData.hobbies && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Hobbies</Text>
            <View style={styles.list}>
              {listItems(formData.hobbies).map((hobby, i) => (
                <Text key={i} style={styles.listItem}>{hobby}</Text>
              ))}
            </View>
          </View>
        )}
        {formData.references && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>References</Text>
            <Text>{formData.references}</Text>
          </View>
        )}
      </View>
      <View style={styles.main}>
        <View style={styles.section}>
          <Text style={styles.name}>{formData.name || 'Your Name'}</Text>
          <Text style={styles.profession}>{formData.profession || 'Your Profession'}</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>About Me</Text>
          <Text>{formData.summary}</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Experience</Text>
          {formData.experience.map((exp, idx) => (
            <View key={idx} style={styles.expBlock}>
              <Text style={styles.expTitle}>{exp.jobTitle || 'Job Title'}</Text>
              <Text style={styles.expCompany}>{exp.company || 'Company'}</Text>
              <Text style={styles.expDates}>
                {exp.startMonth} {exp.startYear} - {exp.present ? 'Present' : `${exp.endMonth} ${exp.endYear}`}
              </Text>
              <Text>{exp.description}</Text>
            </View>
          ))}
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Education</Text>
          {formData.education.map((edu, idx) => (
            <View key={idx} style={styles.eduBlock}>
              <Text style={styles.eduTitle}>{edu.degree || 'Degree'} in {edu.studyField || 'Field'}</Text>
              <Text style={styles.eduSchool}>{edu.institution || 'Institution'}</Text>
              <Text style={styles.eduDates}>{edu.startYear} - {edu.pursuing ? 'Present' : edu.endYear}</Text>
            </View>
          ))}
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Projects</Text>
          {formData.projects && formData.projects.length > 0 && formData.projects.map((proj, idx) => (
            <View key={idx} style={styles.expBlock}>
              <Text style={styles.expTitle}>{proj.title || 'Project Title'}</Text>
              {proj.technologies && <Text style={styles.expCompany}>{proj.technologies}</Text>}
              {proj.link && <Text style={styles.expCompany}>Link: {proj.link}</Text>}
              <Text>{proj.description}</Text>
            </View>
          ))}
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Achievements & Awards</Text>
          {formData.achievements && formData.achievements.length > 0 && formData.achievements.map((ach, idx) => (
            <View key={idx} style={styles.expBlock}>
              <Text style={styles.expTitle}>{ach.title || 'Achievement Title'}</Text>
              {ach.date && <Text style={styles.expDates}>{ach.date}</Text>}
              <Text>{ach.description}</Text>
            </View>
          ))}
        </View>
      </View>
    </Page>
  );

  switch (template) {
    case 'template1':
      return <Document>{renderTemplate1()}</Document>;
    case 'template2':
      return <Document>{renderTemplate2()}</Document>;
    case 'template3':
      return <Document>{renderTemplate3()}</Document>;
    case 'template4':
      return <Document>{renderTemplate4()}</Document>;
    case 'template5':
      return <Document>{renderTemplate5()}</Document>;
    case 'template6':
      return <Document>{renderTemplate6()}</Document>;
    case 'template7':
      return <Document>{renderTemplate7()}</Document>;
    default:
      return <Document>{renderTemplate1()}</Document>;
  }
};

export default ResumePDF;