import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";

import {Link} from 'react-router-dom'
import {BsFillPersonFill} from 'react-icons/bs'
const NavBar = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" className="navbar--wrapper"  >
        <Container >
          <Navbar.Brand as={Link} to="/">Just-<span className="logo-text">Clean</span></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse className="ml-5" id="responsive-navbar-nav ">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/about">About</Nav.Link>
              <Nav.Link as={Link} to="/workplace">Workplace</Nav.Link>
              <Nav.Link as={Link} to="/contacts">Contacts</Nav.Link>
              <NavDropdown title="Facilities" id="collasible-nav-dropdown">
                <NavDropdown.Item as={Link} to="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav.Link as={Link} to="#deets"><BsFillPersonFill />Sign in</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
