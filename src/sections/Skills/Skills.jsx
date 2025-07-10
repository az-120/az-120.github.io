import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
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
import flask_logo from "../../assets/flask-logo.png";
import docker_logo from "../../assets/docker-logo.png";
import git_logo from "../../assets/git-logo.png";
import sklearn_logo from "../../assets/sklearn-logo.png";

const coverflowEffect = {
  rotate: 0,
  stretch: 0,
  depth: 100,
  modifier: 2.5,
};

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
          modules={[EffectCoverflow, Pagination, Navigation]}
        >
          <SwiperSlide className={styles["swiper-slide"]}>
            <img src={python_logo} alt="Python" />
          </SwiperSlide>
          <SwiperSlide className={styles["swiper-slide"]}>
            <img src={java_logo} alt="Java" />
          </SwiperSlide>
          <SwiperSlide className={styles["swiper-slide"]}>
            <img src={js_logo} alt="JavaScript" />
          </SwiperSlide>
          <SwiperSlide className={styles["swiper-slide"]}>
            <img src={ts_logo} alt="TypeScript" />
          </SwiperSlide>
          <SwiperSlide className={styles["swiper-slide"]}>
            <img src={sql_logo} alt="SQL" />
          </SwiperSlide>
          <SwiperSlide className={styles["swiper-slide"]}>
            <img src={react_logo} alt="React" />
          </SwiperSlide>
          <SwiperSlide className={styles["swiper-slide"]}>
            <img src={flask_logo} alt="Flask" />
          </SwiperSlide>
          <SwiperSlide className={styles["swiper-slide"]}>
            <img src={docker_logo} alt="Docker" />
          </SwiperSlide>
          <SwiperSlide className={styles["swiper-slide"]}>
            <img src={git_logo} alt="Git" />
          </SwiperSlide>
          <SwiperSlide className={styles["swiper-slide"]}>
            <img src={sklearn_logo} alt="scikit-learn" />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}

export default Skills;
