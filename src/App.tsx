import { BrowserRouter as Router, Route } from "react-router-dom";
import React, { Component } from 'react'
import NavBar from "./pages/NavBar";
import ImageTool from "./pages/ImageTool";
import HowToUse from "./pages/HowToUse";
const rootURL = "/g-drive-image-tag-tool";
class App extends Component {
  
  render() {
    return (
      <div>
        <Router>
          <div>
            <NavBar />
            <Route exact path= {rootURL + "/"} component={ImageTool} />
            <Route exact path={rootURL + "/howtouse"} component={HowToUse} />
          </div>
        </Router>


      </div>
    );
  }

}

export default App;
