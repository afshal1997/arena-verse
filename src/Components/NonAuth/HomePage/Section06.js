import React from 'react'
import { Container, Row } from 'react-bootstrap'
import { Flip } from 'react-reveal'
import videoImg from '../../../Assets/Home/section06.png'
const Section06 = () => {
  return (
    <div className="section-06 py-5">
      <Container>
        <div className="text-center text-light">
          <h3 className="our-family"><Flip right cascade>Gameplay</Flip></h3>
          <p><Flip right cascade>Soccer, Basketball, Football, Tennis, and Boxing. </Flip></p>
        </div>
        <Row>
          <div className="col-lg-8 m-auto my-4">
            <img src={videoImg} alt="" className='w-100' />
          </div>
        </Row>
      </Container>
    </div>
  )
}

export default Section06