import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import React, { Component } from 'react'
import NavBar from "./pages/NavBar";
import ImageTool from "./pages/ImageTool";
import HowToUse from "./pages/HowToUse";

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <div>
            <NavBar />
            <Route exact path="/" component={ImageTool} />
            <Route exact path="/howtouse" component={HowToUse} />
          </div>
        </Router>


      </div>
    );
  }

}

export default App;
