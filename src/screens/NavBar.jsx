import React from "react";
import {
  Nav,
  Navbar,
} from "react-bootstrap";

export default function NavBar() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand href="/">Jitendra Nayak</Navbar.Brand>
      <Navbar id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/profile">Profile</Nav.Link>
          <Nav.Link href="/resume">Resume</Nav.Link>
          <Nav.Link href="/about">About</Nav.Link>
          <Nav.Link href="/contact">Contact</Nav.Link>
        </Nav>
      </Navbar>
    </Navbar>
  );
}
