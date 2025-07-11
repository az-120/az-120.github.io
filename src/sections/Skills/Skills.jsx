import React from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import {EffectCoverflow, Pagination, Navigation} from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import styles from "./SkillsStyles.module.css";

import python_logo from "../../assets/python-logo.png";
import java_logo from "../../assets/java-logo.png";
import js_logo from "../../assets/javascript-logo.png";
import ts_logo from "../../assets/typescript-logo.png";
import sql_logo from "../../assets/sql-logo.png";

import react_logo from "../../assets/react-logo.png";
import flask_logo from "../../assets/flask-logo.webp";
import docker_logo from "../../assets/docker-logo.png";
import git_logo from "../../assets/git-logo.png";
import sklearn_logo from "../../assets/sklearn-logo.png";

const coverflowEffect = {
  rotate: 0,
  stretch: 0,
  depth: 100,
  modifier: 2.5,
};

function SkillSlide({src, alt, label}) {
  return (
    <div className={styles.skillSlide}>
      <img src={src} alt={alt} />
      <span className={styles.tooltip}>{label}</span>
    </div>
  );
}

function Skills() {
  return (
    <section id="skills" className={styles.container}>
      <h1 className="sectionTitle">Skills</h1>
      <div>
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={"auto"}
          coverflowEffect={coverflowEffect}
          modules={[EffectCoverflow, Pagination, Navigation]}>
          <SwiperSlide className={styles["swiper-slide"]}>
            <SkillSlide src={python_logo} alt="Python" label="Python" />
          </SwiperSlide>
          <SwiperSlide className={styles["swiper-slide"]}>
            <SkillSlide src={java_logo} alt="Java" label="Java" />
          </SwiperSlide>
          <SwiperSlide className={styles["swiper-slide"]}>
            <SkillSlide src={js_logo} alt="JavaScript" label="JavaScript" />
          </SwiperSlide>
          <SwiperSlide className={styles["swiper-slide"]}>
            <SkillSlide src={ts_logo} alt="TypeScript" label="TypeScript" />
          </SwiperSlide>
          <SwiperSlide className={styles["swiper-slide"]}>
            <SkillSlide src={sql_logo} alt="SQL" label="SQL" />
          </SwiperSlide>
          <SwiperSlide className={styles["swiper-slide"]}>
            <SkillSlide src={react_logo} alt="React" label="React" />
          </SwiperSlide>
          <SwiperSlide className={styles["swiper-slide"]}>
            <SkillSlide src={flask_logo} alt="Flask" label="Flask" />
          </SwiperSlide>
          <SwiperSlide className={styles["swiper-slide"]}>
            <SkillSlide src={docker_logo} alt="Docker" label="Docker" />
          </SwiperSlide>
          <SwiperSlide className={styles["swiper-slide"]}>
            <SkillSlide src={git_logo} alt="Git" label="Git" />
          </SwiperSlide>
          <SwiperSlide className={styles["swiper-slide"]}>
            <SkillSlide
              src={sklearn_logo}
              alt="scikit-learn"
              label="scikit-learn"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}

export default Skills;
