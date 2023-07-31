/* eslint-disable no-lone-blocks */
//import { Link } from 'react-router-dom';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { Nav, Navbar, Container } from 'react-bootstrap';

const NavBar = () => {
	return (
        <Navbar bg="primary" variant="dark" expand="lg" className="mt-4 mb-4 rounded">
      <Container>
        {/* Left side of the Navbar */}
        <Navbar.Brand>Blog.upp</Navbar.Brand>

        {/* Right side of the Navbar */}
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Nav>
            <Nav.Link as={NavLink} to="/">Home</Nav.Link>
            <Nav.Link as={NavLink} to="/about">About</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    )
 };
export default NavBar;

{/* <>
        <Navbar bg="primary" variant="dark" expand="lg" className="mt-4 mb-4 rounded">
        <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/">Home</Nav.Link>
            <Nav.Link as={NavLink} to="/about">About</Nav.Link>
         </Nav>
         
         </Navbar>
</> */}