import './App.css';
import Banner from './components/Banner';
import Projects from "./components/Projects";
import Skills from "./components/Skills"
import Certification from "./components/Certification"
import Contact  from "./components/Contact"

function App() {
  return (
    <div className="App">
      <Banner />
      <Projects />
      <Skills />
      <Certification />
      <Contact />
    </div>
  );
}

export default App;
