import React from "react";
import {
  Nav,
  Navbar,
} from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand href="/">Jitendra Nayak</Navbar.Brand>
      <Navbar id="basic-navbar-nav">
        <Nav className="mr-auto">
          <NavLink className="nav-link" to="/profile">Profile</NavLink>
          <NavLink className="nav-link" to="/resume">Resume</NavLink>
          <NavLink className="nav-link" to="/about">About</NavLink>
          <NavLink className="nav-link" to="/contact">Contact</NavLink>
        </Nav>
      </Navbar>
    </Navbar>
  );
}
