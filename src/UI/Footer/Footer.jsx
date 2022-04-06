import React from 'react'
import { Col, Container } from 'react-bootstrap';
import Logo from '../../Assets/Logos/mainLogo.png'
import { Link } from '@reach/router';
import { faDiscord, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
const Footer = () => {
  return (
    <footer className="footer-bg">
      <Container>
        <Col lg={2} className="m-auto py-5 col-4">
          <img src={Logo} className="w-100" alt="" />
        </Col>
        <Col lg={10} className="m-auto text-center">
          <hr className="text-light" />
          <div className="footer-links">
            <ul>
              <li id="link-1  text-capitalize">
                <Link to="/" className="text-light text-decoration-none">
                  PLAY
                </Link>
              </li>
              <li id="link-2  text-capitalize">
                <Link to="/" className="text-light text-decoration-none">
                  MARKETPLACE
                </Link>
              </li>
              <li id="link-3  text-capitalize">
                <Link to="/" className="text-light text-decoration-none">
                  WHITEPAPER
                </Link>
              </li>
              <li id="link-4  text-capitalize">
                <Link to="/" className="text-light text-decoration-none">
                  TOKENOMICS
                </Link>
              </li>
              <li id="link-5  text-capitalize">
                <Link to="/" className="text-light text-decoration-none">
                  MORE
                </Link>
              </li>
            </ul>
          </div>
          <hr className="text-light" />
        </Col>
        <Col lg="10" className="m-auto">
          <p className="text-center text-light py-4">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          </p>
        </Col>
        <Col lg="5" className="m-auto text-center social-links pb-5">
          <div className="social-links-icons py-5">
            <a href="javascript:void(0)">
              <FontAwesomeIcon icon={faTwitter} className="h3 text-light mx-3" />
            </a>
            <a href="javascript:void(0)">
              <FontAwesomeIcon icon={faPaperPlane} className="h3 text-light mx-3" />
            </a>
            <a href="javascript:void(0)">
              <FontAwesomeIcon icon={faDiscord} className="h3 text-light mx-3" />
            </a>
            <a href="javascript:void(0)">
              <FontAwesomeIcon icon={faInstagram} className="h3 text-light mx-3" />
            </a>
          </div>
        </Col>
      </Container>
    </footer>
  )
}

export default Footer