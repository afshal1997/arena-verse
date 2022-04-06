import { Link } from '@reach/router'
import React, { useState, useEffect } from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import './Header.css'

const Header = () => {
  const [bgColor, setBgColor] = useState("transparent")
  const { innerWidth: width } = window;
  useEffect(() => {
    if (width < 992) {
      setBgColor("danger")
    }
  }, [window])

  return (
    <Navbar bg={bgColor} expand="lg" fixed="top">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="m-auto">
            <Nav.Link as={Link} to="/">Play</Nav.Link>
            <Nav.Link as={Link} to="/market-place">Marketplace</Nav.Link>
            <Nav.Link as={Link} to="/white-paper">Whitepaper</Nav.Link>
            <Nav.Link as={Link} to="/about">Tokenomics</Nav.Link>
            <Nav.Link as={Link} to="/about">More</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header