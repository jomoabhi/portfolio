import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, Container, Navbar } from 'react-bootstrap';
import '../App.css';

function Header() {
  const a1 = '<';
  const a2 = '/>';
  return (
    <Navbar
      className="des2"
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
      style={{
        position: 'sticky',
        top: '0',
        zIndex: '20',
        marginBottom: '3rem',
      }}
      // style={{ right: '0' }}
    >
      <Container
        style={{ marginLeft: '0', paddingLeft: '0', marginRight: '0' }}
      >
        <Link to="/" style={{ textDecoration: 'none' }}>
          <Navbar.Brand href="/" style={{ left: '0' }}>
            <span style={{ color: 'orange' }}>{a1}</span> Abhinav{' '}
            <span style={{ color: 'orange' }}>{a2}</span>
          </Navbar.Brand>
        </Link>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Link to="/" style={{ textDecoration: 'none' }}>
              <Nav.Link href="/">
                .Home<span>()</span>
              </Nav.Link>
            </Link>
            <Link to="/About" style={{ textDecoration: 'none' }}>
              <Nav.Link href="/About">
                .Skills<span>(</span>me<span>)</span>
              </Nav.Link>
            </Link>
            <Link to="/Blog" style={{ textDecoration: 'none' }}>
              <Nav.Link href="/Blog">
                .Projects<span>()</span>
              </Nav.Link>
            </Link>
            <Link to="/Contact" style={{ textDecoration: 'none' }}>
              <Nav.Link href="/Contact">
                .ContactMe<span>()</span>
              </Nav.Link>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
