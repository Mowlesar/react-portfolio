import styles from './Portfolio.module.css'; 

// Mock data for portfolio items
const portfolioItems = [
  {
    title: "Project 1",
    image: "path/to/project1-image.jpg", // replace with your image path
    liveLink: "http://live-link-for-project1.com", // replace with your live project link
    repoLink: "http://github-repo-link-for-project1.com", // replace with your repo link
  },
  {
    title: "Project 2",
    image: "path/to/project1-image.jpg", // replace with your image path
    liveLink: "http://live-link-for-project1.com", // replace with your live project link
    repoLink: "http://github-repo-link-for-project1.com", // replace with your repo link
  },
];

const Portfolio = () => {
  return (
    <section className={styles.portfolioSection}>
      <h2 className={styles.portfolioHeader}>Portfolio</h2>
      <div className={styles.projectGrid}>
        {portfolioItems.map((item, index) => (
          <div key={index} className={styles.projectCard}>
            <img src={item.image} alt={item.title} className={styles.projectImage} />
            <h3 className={styles.projectTitle}>{item.title}</h3>
            <div className={styles.projectLinks}>
              <a href={item.liveLink} target="_blank" rel="noopener noreferrer" className={styles.liveLink}>Live Version</a>
              <a href={item.repoLink} target="_blank" rel="noopener noreferrer" className={styles.repoLink}>GitHub Repo</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
