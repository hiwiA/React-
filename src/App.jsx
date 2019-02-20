import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from "./components/Home";
import News from "./components/News";
import Navbar from "./components/CustomNavbar";
//import Hiwot from "./components/Hiwot";
import Homep from "./components/Homep";
import Page1 from "./components/Page1";
import Page2 from "./components/Page2";
import Page3 from "./components/Page3";
import Page4 from "./components/Page4";
import Page5 from "./components/Page5";
import Page6 from "./components/Page6";
import Page7 from "./components/Page7";
import SignIn from "./components/SignIn";
class App extends Component {
  render() {
    return (
      <Router>
        <div>
          {/* <Homep /> */}
          {/* <Page1 />
          <Page2 />
          <Page3 />
          <Page4 />
          <Page5 />
          <Page6 />
          <Page7 />
          <SignIn /> */}
          {/* <Navbar /> */}
          <Route exact path="/" component={Homep} />
          <Route exact path="/A" component={Page1} />
          <Route exact path="/B" component={Page2} />
          <Route exact path="/C" component={Page3} />
          <Route exact path="/D" component={Page4} />
          <Route exact path="/E" component={Page5} />
          <Route exact path="/F" component={Page6} />
          <Route exact path="/G" component={Page7} />
          <Route exact path="/H" component={SignIn} />
        </div>
      </Router>
    );
  }
}

export default App;
