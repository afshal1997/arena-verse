import React from 'react'
import Slider from "react-slick";
import { Col, Row } from 'react-bootstrap';
import Avatar1 from '../../../Assets/carousal-avatars/avatar1.png'
import Avatar2 from '../../../Assets/carousal-avatars/avatar2.png'
import Avatar3 from '../../../Assets/carousal-avatars/avatar3.png'
import Avatar4 from '../../../Assets/carousal-avatars/avatar4.png'
import NextArrow from '../../../Assets/carousal-avatars/next-arrow.png'
import PrevArrow from '../../../Assets/carousal-avatars/prev-arrow.png'
const AvatarCarousal = () => {
   var settings = {
      infinite: true,
      speed: 2500,
      slidesToShow: 4,
      slidesToScroll: 2,
      slidesToScroll: -1,
      autoplay: true,
      autoplaySpeed: 0,
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
               dots: true,
               arrows: false
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
      <div>

         <Row>
            <Slider {...settings}>
               <Col lg="3" className="col-3">
                  <img className="w-100" src={Avatar1} alt="" />
                  <h4 className="text-center mt-3 shadow-text">BEARS</h4>
               </Col>
               <Col lg="3" className="col-3">
                  <img className="w-100" src={Avatar2} alt="" />
                  <h4 className="text-center mt-3 shadow-text">CATS</h4>
               </Col>

               <Col lg="3" className="col-3">
                  <img className="w-100" src={Avatar3} alt="" />
                  <h4 className="text-center mt-3 shadow-text">FOXES</h4>
               </Col>
               <Col lg="3" className="col-3">
                  <img className="w-100" src={Avatar4} alt="" />
                  <h4 className="text-center mt-3 shadow-text">CHICKENS</h4>
               </Col>
               <Col lg="3" className="col-3">
                  <img className="w-100" src={Avatar1} alt="" />
                  <h4 className="text-center mt-3 shadow-text">BEARS</h4>

               </Col>
            </Slider>
         </Row>
      </div >
   )
}

export default AvatarCarousal