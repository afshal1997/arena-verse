import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import Avatar1 from '../../../Assets/Home/our-team/avatar1.png'
import Avatar2 from '../../../Assets/Home/our-team/avatar2.png'
import Avatar3 from '../../../Assets/Home/our-team/avatar3.png'
import Avatar4 from '../../../Assets/Home/our-team/avatar4.png'
import Avatar5 from '../../../Assets/Home/our-team/avatar5.png'
import Avatar6 from '../../../Assets/Home/our-team/avatar6.png'
import Avatar7 from '../../../Assets/Home/our-team/avatar7.png'
import Avatar8 from '../../../Assets/Home/our-team/avatar8.png'
import Avatar9 from '../../../Assets/Home/our-team/avatar9.png'
import Pulse from 'react-reveal/Pulse';

const OurTeam = () => {
   return (
      <div className='our-team py-5'>
         <Container>
            <div className="text-center text-light my-4 mb-5">
               <Pulse>
                  <h2>Our Team</h2>
               </Pulse>
               <div>Collect and trade Avatars to build the ultimate sports team!</div>
            </div>
            <Row className="text-center">
               <Col lg="1"></Col>
               <Col lg="2" className="text-center text-light">
                  <img src={Avatar1} alt="" className='w-100 mb-4' />
                  <h6>Joseph Carreon </h6>
                  <p>(President, Co-Founder)</p>
               </Col>
               <Col lg="2" className="text-center text-light">
                  <img src={Avatar2} alt="" className='w-100 mb-4' />
                  <h6>Vu Pham</h6>
                  <p>(Chief Financial Officer, Co-Founder)</p>
               </Col>
               <Col lg="2" className="text-center text-light">
                  <img src={Avatar3} alt="" className='w-100 mb-4' />
                  <h6>Magnus Stavsholt</h6>
                  <p>(Chief Marketing Officer) </p>
               </Col>
               <Col lg="2" className="text-center text-light">
                  <img src={Avatar4} alt="" className='w-100 mb-4' />
                  <h6>Daniel Bjoerk</h6>
                  <p>(Marketing Strategist)</p>
               </Col>
               <Col lg="2" className="text-center text-light">
                  <img src={Avatar5} alt="" className='w-100 mb-4' />
                  <h6>James Ochieng</h6>
                  <p>(Blockchain Engineer) </p>
               </Col>
               <Col lg="1"></Col>
            </Row>
            <Row className="my-5">
               <Col lg="2"></Col>
               <Col lg="2" className="m-auto text-center text-light">
                  <img src={Avatar6} alt="" className='w-100 mb-4' />
                  <h6>James Ochieng1</h6>
                  <p>(Blockchain Engineer) </p>
               </Col>
               <Col lg="2" className='m-auto text-center text-light'><img src={Avatar7} alt="" className='w-100 mb-4' />
                  <h6>Mattias Rødland</h6>
                  <p>(Lorem Ipsum)</p>
               </Col>
               <Col lg="2" className='m-auto text-center text-light'><img src={Avatar8} alt="" className='w-100 mb-4' />
                  <h6>Frankie Pinat</h6>
                  <p>(Animator)</p>
               </Col>
               <Col lg="2" className='m-auto text-center text-light'><img src={Avatar9} alt="" className='w-100 mb-4' />
                  <h6>Auth Digital</h6>
                  <p>(Lorem Ipsum)</p>
               </Col>
               <Col lg="2"></Col>
            </Row>
         </Container>

      </div>
   )
}

export default OurTeam