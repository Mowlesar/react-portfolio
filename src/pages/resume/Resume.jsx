import styles from './Resume.module.css'; 

const Resume = () => {
  return (
    <section className={styles.resumeSection}>
      <h2 className={styles.resumeHeader}>Resume</h2>
      <a href="path/to/your_resume.pdf" download="Your_Resume.pdf" className={styles.resumeDownloadLink}>
        Download My Resume
      </a>
      <div className={styles.proficienciesSection}>
        <h3>Proficiencies</h3>
        <ul className={styles.proficienciesList}>
          <li>HTML/CSS</li>
          <li>JavaScript (ES6+)</li>
          <li>React</li>
          <li>Node.js</li>
          <li>Database Management (SQL, MongoDB)</li>
          <li>Version Control/Git</li>
          <li>Responsive Design</li>
        </ul>
      </div>
    </section>
  );
};

export default Resume;
