import styles from "./HeroStyles.module.css";
import heroImg from "../../assets/hero-img.jpg";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";
import twitterLight from "../../assets/twitter-light.svg";
import twitterDark from "../../assets/twitter-dark.svg";
import githubLight from "../../assets/github-light.svg";
import githubDark from "../../assets/github-dark.svg";
import linkedinLight from "../../assets/linkedin-light.svg";
import linkedinDark from "../../assets/linkedin-dark.svg";
import {useTheme} from "../../common/ThemeContext";

function Hero() {
  const {theme, toggleTheme} = useTheme();

  const themeIcon = theme === "light" ? sun : moon;
  const twitterIcon = theme === "light" ? twitterLight : twitterDark;
  const githubIcon = theme === "light" ? githubLight : githubDark;
  const linkedinIcon = theme === "light" ? linkedinLight : linkedinDark;

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          className={styles.hero}
          src={heroImg}
          alt="Arthur Zhao Profile Picture"
        />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Toggle night mode"
          onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1>
          Arthur
          <br />
          Zhao
        </h1>
        <h2>I am a ...</h2>
        <span>
          <a href="https://instagram.com/arthvrzhao" target="_blank">
            <img src={twitterIcon} alt="Twitter Icon" />
          </a>
          <a href="https://github.com/az-120" target="_blank">
            <img src={githubIcon} alt="Gwitter Icon" />
          </a>
          <a href="https://linkedin.com/in/arthurdezhao" target="_blank">
            <img src={linkedinIcon} alt="LinkedIn Icon" />
          </a>
        </span>
        <p className={styles.description}>Blah blah blah</p>
      </div>
    </section>
  );
}

export default Hero;
