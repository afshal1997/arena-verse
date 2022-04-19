import { Link } from '@reach/router'
import React, { useState, useEffect } from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import './Header.css'

const Header = () => {
  const [colorChange, setColorChange] = useState(false);
  const { innerWidth: width } = window;

  const changeNavbarColor = () => {
    if (window.scrollY >= 80 && width >= 991) {
      setColorChange(true);
    }
    else {
      setColorChange(false);
    }
  };
  useEffect(() => {
    window.addEventListener('scroll', changeNavbarColor);
  }, [width])


  return (
    <Navbar expand="lg" fixed="top" className={colorChange ? 'bg-primary nav-transition' : 'bg-transparent nav-transition'}>
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="m-auto">
            <Nav.Link as={Link} to="/">Play</Nav.Link>
            <Nav.Link as={Link} to="/">Marketplace</Nav.Link>
            <Nav.Link as={Link} to="/white-paper">Whitepaper</Nav.Link>
            <Nav.Link as={Link} to="/">Tokenomics</Nav.Link>
            <Nav.Link as={Link} to="/">More</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header