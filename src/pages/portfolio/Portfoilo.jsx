import styles from './Portfolio.module.css'; 
import projectOne from '../../assets/Images/recipePlanner.png';
import projectTwo from '../../assets/Images/barkingBuddies.png';


const portfolioItems = [
  {
    title: "Project 1",
    image: projectOne, 
    liveLink: "https://golnaz8.github.io/Recipe-Planner/", 
    repoLink: "https://github.com/Golnaz8/Recipe-Planner",
  },
  {
    title: "Project 2",
    image: projectTwo, 
    liveLink: "https://barkingbuddies-6c4e2edae219.herokuapp.com/login", 
    repoLink: "https://github.com/temuts/BarkingBuddies", 
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
