// AboutMe.jsx
import avatar from '../../assets/Images/Avatar.jpeg'
import styles from './AboutMe.module.css'; // Replace with actual path if different

const AboutMe = () => {
  return (
    <section className={styles.aboutMe}>
      <img src={avatar} alt="Avatar" className={styles.avatar} />
      <h1>Mowlesar Kathiramalanathan</h1>
      <p>
        Hi, I am Mowlesar, a full-stack developer with a passion for creating
        engaging, high-performance web applications. I have a knack for problem-solving
        and love to tackle challenging projects. When I am not coding, you might find me
        outdoors hiking or experimenting with new cooking recipes.
      </p>
    </section>
  );
};

export default AboutMe;
