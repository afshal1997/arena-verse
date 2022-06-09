import { Link } from '@reach/router'
import React, { useState, useEffect } from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import ComingSoonPopup from '../../UI/Modals/ComingSoonPopup'
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

  const [modalShow, setModalShow] = React.useState(false);
  return (
    <>
      <Navbar expand="lg" fixed="top" className={colorChange ? 'bg-primary nav-transition' : 'bg-transparent nav-transition'}>
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="m-auto">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link href='javascript:void(0)' onClick={() => setModalShow(true)}>Play</Nav.Link>
              <Nav.Link as={Link} to="/market-place">Marketplace</Nav.Link>
              <Nav.Link as={Link} to="/white-paper">Whitepaper</Nav.Link>
              <Nav.Link as={Link} to="/tokenomics">Tokenomics</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <ComingSoonPopup
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  )
}

export default Header