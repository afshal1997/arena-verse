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
const OurTeam = () => {
   return (
      <div className='our-team py-5'>
         <Container>
            <div className="text-center text-light">
               <h2>Our Team</h2>
               <p>Collect and trade Avatars to build the ultimate sports team!</p>
            </div>
            <Row className="text-center">
               <Col lg="1"></Col>
               <Col lg="2"><img src={Avatar1} alt="" className='w-100' /></Col>
               <Col lg="2"><img src={Avatar2} alt="" className='w-100' /></Col>
               <Col lg="2"><img src={Avatar3} alt="" className='w-100' /></Col>
               <Col lg="2"><img src={Avatar4} alt="" className='w-100' /></Col>
               <Col lg="2"><img src={Avatar5} alt="" className='w-100' /></Col>
               <Col lg="1"></Col>
            </Row>
            <Row>
               <Col lg="3"></Col>
               <Col lg="2" className='m-auto'><img src={Avatar6} alt="" className='w-100' /></Col>
               <Col lg="2" className='m-auto'><img src={Avatar7} alt="" className='w-100' /></Col>
               <Col lg="2" className='m-auto'><img src={Avatar8} alt="" className='w-100' /></Col>
               <Col lg="3"></Col>
            </Row>
         </Container>

      </div>
   )
}

export default OurTeam