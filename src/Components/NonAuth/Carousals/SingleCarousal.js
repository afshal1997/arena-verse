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
      responsive: [
         {
            breakpoint: 1024,
            settings: {
               slidesToShow: 3,
               slidesToScroll: 3,
               infinite: true,
               dots: false,
               arrows: false,
            }
         },
         {
            breakpoint: 600,
            settings: {
               slidesToShow: 2,
               slidesToScroll: 2,
               initialSlide: 2,

               arrows: false,
            }
         },
         {
            breakpoint: 480,
            settings: {
               slidesToShow: 1,
               slidesToScroll: 1,

               arrows: false,
            }
         }
      ]
   };
   return (
      <Slider {...settings}>
         <div>
            <Row className="align-items-center">
               <Col>
                  <img src={SingleCarousalBg} className='w-100' alt="" />
               </Col>
               <Col className='m-auto second-section-sc'>
                  <h2>Soccer</h2>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
               </Col>
            </Row>

         </div>
         <div>
            <Row className="align-items-center">
               <Col>
                  <img src={SingleCarousalBg} className='w-100' alt="" />
               </Col>
               <Col className='m-auto second-section-sc'>
                  <h2>Soccer</h2>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
               </Col>
            </Row>
         </div>

      </Slider>
   )
}

export default SingleCarousal