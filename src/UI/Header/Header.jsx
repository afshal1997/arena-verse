import { Link } from '@reach/router'
import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'

const Header = () => {
  return (
    <Navbar bg="transparent" expand="lg">
      <Container>
        {/* <Navbar.Brand as={Link} to="/">React-Bootstrap</Navbar.Brand> */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="m-auto">
            <Nav.Link as={Link} to="/">Play</Nav.Link>
            <Nav.Link as={Link} to="/market-place">MarketPlace</Nav.Link>
            <Nav.Link as={Link} to="/white-paper">WhitePaper</Nav.Link>
            <Nav.Link as={Link} to="/about">Tokenomics</Nav.Link>
            <Nav.Link as={Link} to="/about">More</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header