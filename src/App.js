import React from "react";
import Header from "./screens/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Styles.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import About from "./screens/About";
import Home from "./screens/Home";
import Contact from "./screens/Contact";
import Resume from "./screens/Resume";
import Notfound from "./screens/Notfound";
import Footer from "./screens/Footer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
        <Switch>
          <Route exact={true} path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/resume" component={Resume} />
          <Route component={Notfound} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
