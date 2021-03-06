import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import tournamentsImg01 from '../../../Assets/Home/cartoon2.png'
import tournamentsImg02 from '../../../Assets/Home/cartoon1.png'
import tournamentsImg01Bg from '../../../Assets/Home/b1.png'
import tournamentsImg02Bg from '../../../Assets/Home/b2.png'
import vsImg from '../../../Assets/Home/vsImg.png'
import Zoom from 'react-reveal'

const Section7 = () => {
  return (
    <div className='homeSection07'>
      <Container>
        <Col lg={6} className="m-auto text-center text-light">
          <h3 className="our-family">Tournaments</h3>
          <p>
              There will be daily and weekly tournaments with all sorts of prizes that you can compete in as a solo or with your team!
          </p>
        </Col>
        <Row>
          <Col lg={4} className='m-auto'>
            <div className="tournamentsImgs position-relative mt-5 mb-4">
              <img className='tournamentsImg01' src={tournamentsImg01} alt='tournamentsImg01' />
              <img className='tournamentsImgBg' src={tournamentsImg01Bg} alt='tournamentsImg01Bg' />
            </div>
            <div className="tournamentsImgsContent mt-5 text-light text-center">
            <h4><Zoom right>Health: 200</Zoom></h4>
            <h4><Zoom right>Power: 150</Zoom></h4>
            <h4><Zoom right>Defense: 175</Zoom></h4>
            <h4><Zoom right>Stamina: 90</Zoom></h4>
            <h4><Zoom right>Agility: 125</Zoom></h4>
            </div>
          </Col>
          <Col lg={3} className='m-auto col-7'>
            <img className='w-100' src={vsImg} alt='vsImg' />
          </Col>
          <Col lg={4} className='m-auto'>
            <div className="tournamentsImgs position-relative mt-5 mb-4">
              <img className='tournamentsImg02' src={tournamentsImg02} alt='tournamentsImg02' />
              <img className='tournamentsImgBg' src={tournamentsImg02Bg} alt='tournamentsImg02Bg' />
            </div>
            <div className="tournamentsImgsContent mt-5 text-light text-center">
            <h4><Zoom right>Health: 185</Zoom></h4>
            <h4><Zoom right>Power: 177</Zoom></h4>
            <h4><Zoom right>Defense: 163</Zoom></h4>
            <h4><Zoom right>Stamina: 115</Zoom></h4>
            <h4><Zoom right>Agility: 100</Zoom></h4>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Section7