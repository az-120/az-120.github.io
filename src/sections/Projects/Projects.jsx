import styles from "./ProjectsStyles.module.css";
import TiltedCard from "./TiltedCard";

import personal_website from "../../assets/personal-website.png";
import hairclip from "../../assets/hairclip.png";
import BeatTorrent from "../../assets/beat-torrent.png";
import LLM_ASR from "../../assets/LLM-ASR.png";
import hate_speech from "../../assets/hatespeech.png";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <TiltedCard
          imageSrc={hairclip}
          altText="HairCLIP"
          captionText="HairCLIP"
          displayOverlayContent={true}
          link="https://github.com/az-120/HairCLIP"
        />
        <TiltedCard
          imageSrc={BeatTorrent}
          altText="BeatTorrent"
          captionText="BeatTorrent"
          displayOverlayContent={true}
          link="https://github.com/az-120/beat-torrent"
        />
        <TiltedCard
          imageSrc={personal_website}
          altText="Personal Website"
          captionText="Personal Website"
          displayOverlayContent={true}
          link="https://github.com/az-120/az-120.github.io"
        />
        <TiltedCard
          imageSrc={LLM_ASR}
          altText="Improving ASR with LLM on accented speech"
          captionText="Improving ASR with LLM on accented speech"
          displayOverlayContent={true}
          link="https://github.com/az-120/LLM-ASR"
        />
        <TiltedCard
          imageSrc={hate_speech}
          altText="ML Hate Speech Detector"
          captionText="ML Hate Speech Detector"
          displayOverlayContent={true}
          link="https://github.com/az-120/HateSpeechDetector/tree/main"
        />
      </div>
    </section>
  );
}

export default Projects;
