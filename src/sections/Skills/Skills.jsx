import styles from "./SkillsStyles.module.css";
import CircularGallery from './CircularGallery'

function Skills() {
  return (
    <section id="skills" className={styles.container}>
      <h1 className="sectionTitle">Skills</h1>
      <div style={{ height: '600px', position: 'relative' }}>
        <CircularGallery />
      </div>
    </section>
  );
}

export default Skills;




// Python, Java, JavaScript, TypeScript, SQL
// React, Flask, Docker, Git, scikit-learn