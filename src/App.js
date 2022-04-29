import logo from './logo.svg';
import './App.css';

import Navbar from "./components/Navbar/Navbar";
import Header from "./pages/Header";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
        <Router>
        <Navbar />
        <Header />
      
         {/* <Footer/> */}
       </Router>


    </div>
  );
}

export default App;
