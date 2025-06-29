import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import styles from "./HeroStyles.module.css";
import heroImg from "../../assets/hero-img.png";
import mailDark from "../../assets/mail-dark.svg";
import githubDark from "../../assets/github-dark.svg";
import linkedinDark from "../../assets/linkedin-dark.svg";

function Hero() {
  const [text] = useTypewriter({
    words: [
      "Software Engineer",
      "Data Driven Developer",
      "ML Enthusiast",
      "CS Student @ Duke",
    ],
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
      </div>
      <div className={styles.info}>
        <h1>Arthur Zhao</h1>
        <h2>I'm a...</h2>
        <div className="typewriter">
          <span
            style={{
              fontWeight: "bold",
              display: "inline",
              whiteSpace: "nowrap",
            }}>
            &nbsp;
            {text}
            {/* <Cursor /> */}
          </span>
        </div>

        <span>
          <a href="https://linkedin.com/in/arthurdezhao" target="_blank">
            <img src={linkedinDark} alt="LinkedIn Icon" />
          </a>
          <a href="https://github.com/az-120" target="_blank">
            <img src={githubDark} alt="GitHub Icon" />
          </a>
          <a href="mailto:arthurdezhao@gmail.com" target="_blank">
            <img src={mailDark} alt="Mail Icon" />
          </a>
        </span>
      </div>
    </section>
  );
}

export default Hero;
