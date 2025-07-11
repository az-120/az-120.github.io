import React, {useEffect, useRef} from "react";
import styles from "./ExperienceStyles.module.css";

import tanium from "../../assets/tanium.png";
import littlecaesars from "../../assets/little-caesars.jpeg";
import bigideaslab from "../../assets/big-ideas-lab.jpeg";
import styl from "../../assets/styl.jpeg";

const experiences = [
  {
    id: 1,
    title: "Software Engineering Intern",
    company: "Tanium",
    date: "Jun 2025 - Aug 2025",
    description:
      "External AWS S3 cloud integration, UI & user flow improvements",
    tech: ["TypeScript", "React", "AWS S3"],
    icon: tanium,
  },
  {
    id: 2,
    title: "Software Engineer",
    company: "Duke Big Ideas Lab",
    date: "Sept 2024 - Dec 2024",
    description: "Cloud data storage pipelines, UI and visualizations",
    tech: ["Python", "JavaScript", "Firebase"],
    icon: bigideaslab,
  },
  {
    id: 3,
    title: "Data Engineering Intern",
    company: "Little Caesars",
    date: "Sep 2024 - Dec 2024",
    description: "ETL pipelines & data validation orchestrations",
    tech: ["Python", "SQL", "Spark", "Databricks"],
    icon: littlecaesars,
  },
  {
    id: 4,
    title: "Data Science Intern",
    company: "Little Caesars",
    date: "Jun 2024 - Aug 2024",
    description: "ML models for menu item predictions",
    tech: ["Python", "SQL", "Spark", "PowerBI"],
    icon: littlecaesars,
  },
  {
    id: 5,
    title: "Software Developer",
    company: "Styl",
    date: "Oct 2023 - Apr 2024",
    description: "Web scraping and data processing",
    tech: ["Python", "Selenium", "Excel"],
    icon: styl,
  },
];

function Experience() {
  const timelineRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.fadeIn);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    timelineRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="experience" className={styles.container}>
      <h1 className="sectionTitle">Experience</h1>
      <div className={styles.timelineContainer}>
        {experiences.map((element, index) => {
          const color = styles.colorWhite;

          return (
            <div
              key={element.id}
              ref={(el) => (timelineRefs.current[index] = el)}
              className={styles.timelineItem}>
              <div
                className={`${color} ${styles.timelineLine} ${styles.timelineLineMobile}`}></div>
              <div
                className={`${color} ${styles.timelineLine} ${styles.timelineLineDesktop}`}></div>
              <div className={styles.timelineHeader}>
                <div className={styles.timelineDate}>{element.date}</div>
                <img
                  src={element.icon}
                  alt="company icon"
                  className={`${color} ${styles.timelineIcon}`}
                />
              </div>
              <div className={styles.timelineCard}>
                <div className={styles.timelineTitle}>{element.title}</div>
                <div className={styles.timelineCompany}>
                  {element.company}
                  <span className={styles.timelineDateMobile}>
                    {" "}
                    | {element.date}
                  </span>
                </div>
                <div className={styles.timelineDescription}>
                  {element.description}
                </div>
                <div className={styles.timelineTech}>
                  {element.tech.map((tech, index) => {
                    return (
                      <span key={index} className={styles.techTag}>
                        {tech}
                      </span>
                    );
                  })}
                </div>
                <img
                  src={element.icon}
                  alt="company icon"
                  className={`${color} ${styles.timelineIconMobile}`}
                />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Experience;
