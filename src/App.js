import React from 'react';
import Home from "./Pages/Home";
import About from "./Pages/About";
import Experience from "./Pages/Experience";
import Contact from "./Pages/Contact";
import {CssBaseline} from '@material-ui/core';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';

function App() {
    return(
      <CssBaseline>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home/>
            </Route>
            <Route path="/about">
              <About/>
            </Route>
            <Route path="/experience">
              <Experience/>
            </Route>
            <Route path="/contact">
              <Contact/>
            </Route>
          </Switch>
        </Router>
      </CssBaseline>
  );

}

export default App;
