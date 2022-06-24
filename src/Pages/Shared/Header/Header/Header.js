import React from 'react';
import {Navbar, Container, Nav} from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const Header = () => {
    return (
        <Navbar sticky="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
        <Navbar.Brand href="/home#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as ={HashLink} to ="/home#home" className='m-3'>Home</Nav.Link>
            <Nav.Link as ={HashLink} to="/home#services" className='m-3'>Services</Nav.Link>
            <Nav.Link as ={HashLink} to="/home#experts" className='m-3'>Experts</Nav.Link>
            <Nav.Link as ={HashLink} to="/login" className='m-3'>Login</Nav.Link>
            <Navbar.Text className='m-3'>
               Signed in as: <a href="#login">Mark Otto</a>
            </Navbar.Text>
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
    );
};

export default Header;