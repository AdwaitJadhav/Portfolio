import logo from './logo.svg';
import './App.css';
import Navbar from "./components/navbar.js";
import Intro from "./components/intro.js";
import Timer from './components/graduation';
import Skill from './components/skills';
import Projects from './components/projects';
import About from './components/about';
function App() {
  return (
    <main>
      <Navbar/>
      <Intro/>
      <Skill/>
      <Projects/>
      <Timer/>
      <About/>
    </main>
  );
}

export default App;
