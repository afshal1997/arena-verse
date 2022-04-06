import React from 'react'
import { Col, Row } from 'react-bootstrap';
import Slider from 'react-slick';
import SingleCarousalBg from '../../../Assets/Home/full_carousal.png'
import NextArrow from '../../../Assets/carousal-avatars/next-arrow.png'
import PrevArrow from '../../../Assets/carousal-avatars/prev-arrow.png'
const SingleCarousal = () => {
   var settings = {

      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      className: "avatar-slider",
      initialSlide: 0,
      prevArrow: <img src={PrevArrow} alt="arrows" className="prev-arrow" />,
      nextArrow: <img src={NextArrow} alt="arrows" className="next-arrow" />,
   };
   return (
      <Slider {...settings}>
         <div>
            <Row className="">
               <Col lg="6">
                  <img src={SingleCarousalBg} className='w-100' alt="" />
               </Col>
               <Col lg="6" className='m-auto second-section-sc'>
                  <h2>Soccer</h2>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
               </Col>
            </Row>

         </div>


      </Slider>
   )
}

export default SingleCarousal