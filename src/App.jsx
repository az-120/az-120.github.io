import "./App.css";
import Hero from "./sections/Hero/Hero";
import Experience from "./sections/Experience/Experience";
import Projects from "./sections/Projects/Projects";
import Skills from "./sections/Skills/Skills";
import Waves from './common/Waves';

function App() {
  return (
    <>
      <Waves
        lineColor="#13F"
        backgroundColor="rgba(0,0,0,.4)"
        waveSpeedX={0.02}
        waveSpeedY={0.01}
        waveAmpX={40}
        waveAmpY={20}
        friction={0.8}
        tension={0.01}
        maxCursorMove={120}
        xGap={15}
        yGap={30}
      />
      <main>
        <Hero />
        <Experience />
        <Projects />
        <Skills />
      </main>
    </>
  );
}

export default App;
