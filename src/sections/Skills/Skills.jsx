import styles from "./SkillsStyles.module.css";

function Skills() {
  return (
    <section id="skills" className={styles.container}>
      <h1 className="sectionTitle">Skills</h1>

      <div className={styles.skillCategory}>
        <h2>Programming Languages</h2>
        <ul className={styles.skillList}>
          <li>JavaScript</li>
          <li>Python</li>
          <li>Java</li>
          <li>C++</li>
          <li>TypeScript</li>
          <li>SQL</li>
        </ul>
      </div>

      <div className={styles.skillCategory}>
        <h2>Frameworks & Libraries</h2>
        <ul className={styles.skillList}>
          <li>React</li>
          <li>Node.js</li>
          <li>Express</li>
          <li>Flask</li>
          <li>Tailwind CSS</li>
          <li>Scikit-learn</li>
          <li>Pandas</li>
        </ul>
      </div>

      <div className={styles.skillCategory}>
        <h2>Tools & Technologies</h2>
        <ul className={styles.skillList}>
          <li>Git & GitHub</li>
          <li>Docker</li>
          <li>Vite</li>
          <li>Firebase</li>
          <li>VS Code</li>
          <li>Linux</li>
          <li>Postman</li>
        </ul>
      </div>
    </section>
  );
}

export default Skills;