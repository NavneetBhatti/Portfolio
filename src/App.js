import logo from './logo.svg';
import './App.css';

import Navbar from "./components/Navbar/Navbar";
import Header from "./pages/Header";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ScrollToTop from "./components/ScrollToTop";

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
        <Router>
        <ScrollToTop />

        <Navbar />
        <Header />
        <About />
        <Projects id="projects_section"/>
        <Contact />
         {/* <Footer/> */}
       </Router>


    </div>
  );
}

export default App;
