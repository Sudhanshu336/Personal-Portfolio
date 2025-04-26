import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Intro from "./Components/Intro";
import About from "./Components/About";
import Education from "./Components/Education";
import Contact from "./Components/Contact";
import Skills from "./Components/Skills";
import Project from "./Components/Project";


function App() {
  return (
    <div className="App" style={{ position: "relative" }}> 
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Intro />} />
          <Route path="/about" element={<About />} />
          <Route path="/education" element={<Education />} />
          <Route path="/skills" element={<Skills />} />
           <Route path="/project" element={<Project/>} />
    
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
