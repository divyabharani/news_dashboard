import React from 'react'
import {BrowserRouter as Router,Routes,Link}from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Dash from "./Dash";
import NotFound from"./NotFound";
import "./style.css";// Import CSS file

function App() {
  return (
    <Router>
        <nav className="navbar">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/dash">Dash</Link>
        </nav>
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/dash" element={<Dash/>}/>
        <Route path="*" element={<Not Found/>}/>
    </Routes>
    </Router>
    
  );
}
import { formatPostcssSourceMap } from 'vite';

export default App