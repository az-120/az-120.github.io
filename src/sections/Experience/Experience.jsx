import styles from "./ExperienceStyles.module.css";

const experiences = [
  {
    title: "Software Engineering Intern",
    company: "Tanium",
    date: "Jun 2025 - Aug 2025",
    description: "Worked on backend systems for enterprise security solutions. Improved data ingestion pipeline latency by 30%."
  },
  {
    title: "Data Engineering Intern",
    company: "Little Caesars",
    date: "Sep 2024 - Dec 2024",
    description: "Built ETL pipelines and data validation systems across multiple sources to improve reporting accuracy."
  },
  {
    title: "Data Science Intern",
    company: "Startup X",
    date: "Jun 2024 - Aug 2024",
    description: "Developed ML models for customer segmentation and behavior prediction."
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
              <h2>{exp.title}</h2>
              <h3>{exp.company}</h3>
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