import React from "react";
import Nav from "./screens/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Styles.css";
import About from "./screens/About";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./screens/Home";
import Contact from "./screens/Contact";
import Resume from "./screens/Resume";
import Notfound from "./screens/Notfound";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav />
        <Switch>
          <Route exact={true} path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/resume" component={Resume} />
          <Route component={Notfound} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
