// Navebar.js
import React from 'react';
import './Navebar.css';
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function Navebar() {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary position-sticky top-0 z-index-1000 nav-content">
      <Container>
        <Navbar.Brand as={Link} to="/">PHOTO KADAI</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link as={Link} to="/" className='mx-3'>Home</Nav.Link>
            <Nav.Link href='https://www.instagram.com/clicknclickzpk/' to="/pricing"className='mx-3'>Instagram</Nav.Link>
            <Nav.Link href='https://www.youtube.com/@clicknclickz3495/videos' to="/Clintvideo"className='mx-3'>Youtub</Nav.Link>
            <Nav.Link as={Link} to="/Package"className='mx-3'>Packages</Nav.Link>
            <Nav.Link as={Link} to="/pricing"className='mx-3'>Offer</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navebar;
