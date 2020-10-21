import React from "react";
import { Container } from "react-bootstrap";
import { BrowserRouter, HashRouter, Route, Switch } from "react-router-dom";

import NavBar from "./NavBar";
import Resume from "./Resume";
import Contact from "./Contact";
import About from "./About";
import Profile from "./Profile";

function Home() {
  return (
    <>
      <Container fluid>
        
        {/* <BrowserRouter> */}
        <HashRouter>
        <NavBar />
        <Switch>
        <Route exact path="/profile" component={Profile}/>
          <Route exact path="/resume" component={Resume}/>
          <Route exact path="/about" component={About}/>
          <Route exact path="/contact" component={Contact}/>
        </Switch>
        {/* </BrowserRouter> */}
        </HashRouter>
      </Container>
    </>
  );
}

export default Home;
