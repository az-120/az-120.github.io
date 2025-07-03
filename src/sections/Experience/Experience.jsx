import styles from "./ExperienceStyles.module.css";

const experiences = [
  {
    title: "Software Engineering Intern",
    company: "Tanium",
    date: "Jun 2025 - Aug 2025",
    description: "External AWS S3 Cloud Integration"
  },
  {
    title: "Data Engineering Intern",
    company: "Little Caesars",
    date: "Sep 2024 - Dec 2024",
    description: "ETL pipelines & data validation orchestrations"
  },
  {
    title: "Data Science Intern",
    company: "Little Caesars",
    date: "Jun 2024 - Aug 2024",
    description: "ML models for menu item predictions"
  }
];

function Experience() {
  return (
    <section id="experience" className={styles.container}>
      <h1 className="sectionTitle">Experience</h1>
      <div className={styles.timeline}>
        {experiences.map((exp, index) => (
          <div className={styles.timelineItem} key={index}>
            <div className={styles.timelineDot} />
            <div className={styles.timelineContent}>
              <h2>{exp.company}</h2>
              <h3>{exp.title}</h3>
              <span className={styles.date}>{exp.date}</span>
              <p>{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;