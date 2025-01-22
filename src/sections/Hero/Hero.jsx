import React from "react";
import {useTypewriter, Cursor} from "react-simple-typewriter";
import styles from "./HeroStyles.module.css";
import heroImg from "../../assets/hero-img.png";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";
import mailLight from "../../assets/mail-dark.svg";
import mailDark from "../../assets/mail-light.svg";
import githubLight from "../../assets/github-light.svg";
import githubDark from "../../assets/github-dark.svg";
import linkedinLight from "../../assets/linkedin-light.svg";
import linkedinDark from "../../assets/linkedin-dark.svg";
import {useTheme} from "../../common/ThemeContext";

function Hero() {
  const {theme, toggleTheme} = useTheme();

  const themeIcon = theme === "light" ? sun : moon;
  const mailIcon = theme === "light" ? mailLight : mailDark;
  const githubIcon = theme === "light" ? githubLight : githubDark;
  const linkedinIcon = theme === "light" ? linkedinLight : linkedinDark;

  const [text] = useTypewriter({
    words: ["Software Engineer", "Data Scientist", "CS Student @ Duke"],
    loop: true,
    typeSpeed: 100,
    deleteSpeed: 80,
    delaySpeed: 1000,
  });

  console.log(text);

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
        <h2>I'm a...</h2>
        <div className="typewriter">
          <span style={{fontWeight: "bold", color: "blue"}}>
            &nbsp;
            {text}
            {/* <Cursor /> */}
          </span>
        </div>

        <span>
          <a href="https://linkedin.com/in/arthurdezhao" target="_blank">
            <img src={linkedinIcon} alt="LinkedIn Icon" />
          </a>
          <a href="https://github.com/az-120" target="_blank">
            <img src={githubIcon} alt="GitHub Icon" />
          </a>
          <a href="mailto:arthurdezhao@gmail.com" target="_blank">
            <img src={mailIcon} alt="Mail Icon" />
          </a>
        </span>
      </div>
    </section>
  );
}

export default Hero;
