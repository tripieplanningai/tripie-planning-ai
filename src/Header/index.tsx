import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import './header.css';

const Header: React.FC = () => {
  const location = useLocation();
  
  return (
    <Navbar bg="white" expand="lg" className="header">
      <Container>
        <Navbar.Brand as={Link} to="/" className="brand">
          TripiePlanningAI
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>Home</Nav.Link>
            <Nav.Link as={Link} to="/about" className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`}>About</Nav.Link>
            <Nav.Link as={Link} to="/mission" className={`nav-link ${location.pathname === '/mission' ? 'active' : ''}`}>Mission</Nav.Link>
            <Nav.Link as={Link} to="/features" className={`nav-link ${location.pathname === '/features' ? 'active' : ''}`}>Features</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header; 