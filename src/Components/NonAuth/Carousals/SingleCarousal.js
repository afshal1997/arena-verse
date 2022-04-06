import React from 'react'
import { Col, Row } from 'react-bootstrap';
import Slider from 'react-slick';
import SingleCarousalBg from '../../../Assets/Home/full_carousal.png'
import { singleSlideCarousal } from './../../../utils/utils';
const SingleCarousal = () => {

   return (
      <Slider {...singleSlideCarousal}>
         <div>
            <Row>
               <Col lg="5">
                  <img className='SingleCarousalBg' src={SingleCarousalBg} alt="SingleCarousalBg" />
               </Col>
               <Col lg="7" className='m-auto'>
                  <div className="second-section-sc">
                     <h2>Soccer</h2>
                     <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                     </p>
                  </div>
               </Col>
            </Row>
         </div>
         <div>
            <Row>
               <Col lg="5">
                  <img className='SingleCarousalBg' src={SingleCarousalBg} alt="SingleCarousalBg" />
               </Col>
               <Col lg="7" className='m-auto'>
                  <div className="second-section-sc">
                     <h2>Soccer</h2>
                     <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                     </p>
                  </div>
               </Col>
            </Row>
         </div>
      </Slider>
   )
}

export default SingleCarousal