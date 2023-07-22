import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Navbar from "./components/navbar.js";
import Intro from "./components/intro.js";
import Timer from './components/graduation';
import Skill from './components/skills';
import Projects from './components/projects';
import About from './components/about';
import ClipLoader from 'react-spinners/ClipLoader';
import { CSSProperties } from "react";

const loaderStyle = {
  display: "block",
  margin: "auto auto",
  backgroundColor: "orange",
  borderColor: "orange",
};

function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 8000);
  }, []);

  return (
    <main>
      {loading ? (
        <div className="loader-container">
          <ClipLoader color={'#000'} loading={loading} cssOverride={loaderStyle} />
        </div>
      ) : (
        <div className="main-content">
          <Navbar />
          <Intro />
          <Skill />
          <Projects />
          <About />
        </div>
      )}
    </main>
  );
}

export default App;
