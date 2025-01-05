import styles from "./ProjectsStyles.module.css";
import viberr from "../../assets/viberr.png";
import freshBurger from "../../assets/fresh-burger.png";
import ProjectCard from "../../common/ProjectCard";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={viberr}
          link="https://github.com/az-120/portfolio-website"
          h3="Portfolio Website"
          p="Personal Portfolio Website Code Link"
        />
        <ProjectCard
          src={freshBurger}
          link="https://github.com/az-120/portfolio-website"
          h3="Fresh Burger"
          p="Burger App"
        />
      </div>
    </section>
  );
}

export default Projects;
