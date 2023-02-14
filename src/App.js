import Home from "./components/Home";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Experience from "./components/Experience";

function App() {
  return (
   <div>
     <Navbar />
     <Home />
     <About />
     <Skills />
     <Experience/>
     <Work /> 
     <Contact />
    </div>
  );
}

export default App;
