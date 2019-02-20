import React, { Component } from "react";
import * as ReactBootstrap from "react-bootstrap";
import {
  Navbar,
  Nav,
  NavItem,
  Collapse,
  NavbarToggle,
  NavbarBrand,
  Navbarcollapse
} from "react-bootstrap";
import { Link } from "react-router-dom";

export default class CustomNavbar extends Component {
  render() {
    return (
      //   <Navbar>
      //     <NavbarBrand>
      //       <Link to="/"> Hiwot</Link>
      //     </NavbarBrand>
      //     <NavbarToggle />

      //     <Navbarcollapse>
      //       <Nav pullRight>
      //         <NavItem eventKey={1} componentClass={Link} to="/">
      //           Home
      //         </NavItem>
      //         <NavItem eventKey={2} componentClass={Link} to="/">
      //           News
      //         </NavItem>
      //       </Nav>
      //     </Navbarcollapse>
      //   </Navbar>
      <Navbar bg="light">
        <Navbar.Brand>
          <Link to="/">Hiwot</Link>
        </Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#news">News</Nav.Link>
          <Nav.Link href="#customnav">About</Nav.Link>
        </Nav>
      </Navbar>
    );
  }
}
