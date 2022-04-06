import React from 'react'
import Slider from "react-slick";
import { Col, Row } from 'react-bootstrap';
import Avatar1 from '../../../Assets/carousal-avatars/avatar5.png'
import Avatar2 from '../../../Assets/carousal-avatars/avatar6.png'
import Avatar3 from '../../../Assets/carousal-avatars/avatar7.png'
import Avatar4 from '../../../Assets/carousal-avatars/avatar8.png'
import NextArrow from '../../../Assets/carousal-avatars/next-arrow.png'
import PrevArrow from '../../../Assets/carousal-avatars/prev-arrow.png'
import NftIcon from '../../../Assets/Home/ntf-icon.png'
const AvatarCarousa2 = () => {
   var settings = {

      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
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
      <div className='ntf-icons'>
         <Row>
            <Slider {...settings}>
               <Col lg="3" className="col-3">
                  <img className="w-100" src={Avatar1} alt='Avatar1' />
                  <h6 className="mt-2 fw-light">Type : Bears</h6>
                  <h6 className="mt-2 fw-light">Rarity:125</h6>
                  <Row className="mx-auto">
                     <Col lg="1" className='p-0'>
                        <img src={NftIcon} className="w-100 nft-symbol" alt="" />
                     </Col>
                     <Col className='col-11 col-lg-11'>
                        <h5 className="fw-bold mt-2 fw-light">
                           .5
                        </h5>
                     </Col>
                  </Row>
               </Col>
               <Col lg="3" className="col-3">
                  <img className="w-100" src={Avatar2} alt="Avatar2" />
                  <h6 className="mt-2 fw-light">Type : Cats</h6>
                  <h6 className="mt-2 fw-light">Rarity:213</h6>
                  <Row className="mx-auto">
                     <Col lg="1" className='p-0'>
                        <img src={NftIcon} className="w-100 nft-symbol" alt="" />
                     </Col>
                     <Col lg={11}>
                        <h5 className="fw-bold mt-2 fw-light">
                           .53
                        </h5></Col>
                  </Row>
               </Col>

               <Col lg="3" className="col-3">
                  <img className="w-100" src={Avatar3} alt="Avatar3" />
                  <h6 className="mt-2 fw-light">Type : Foxes</h6>
                  <h6 className="mt-2 fw-light">Rarity:347</h6>
                  <Row className="mx-auto">
                     <Col lg="1" className='p-0'>
                        <img src={NftIcon} className="w-100 nft-symbol" alt="" />
                     </Col>
                     <Col className='col-lg-11'>
                        <h5 className="fw-bold mt-2 fw-light">
                           .67
                        </h5></Col>
                  </Row>               </Col>
               <Col lg="3" className="col-3">
                  <img className="w-100" src={Avatar4} alt="" />
                  <h6 className="mt-2 fw-light">Type : Humans</h6>
                  <h6 className="mt-2 fw-light">Rarity:589</h6>
                  <Row className="mx-auto">
                     <Col lg="1" className='p-0'>
                        <img src={NftIcon} className="w-100 nft-symbol" alt="" />
                     </Col>
                     <Col className='col-lg-11'>
                        <h5 className="fw-bold mt-2 fw-light">
                           .54
                        </h5></Col>
                  </Row>
               </Col>

               <Col lg="3" className="col-3">
                  <img className="w-100" src={Avatar1} alt="" />
                  <h6 className="mt-2 fw-light">Type : Humans</h6>
                  <h6 className="mt-2 fw-light">Rarity:589</h6>
                  <Row className="mx-auto">
                     <Col lg="1" className='p-0'>
                        <img src={NftIcon} className="w-100 nft-symbol" alt="" />
                     </Col>
                     <Col lg={11} className=''>
                        <h5 className="fw-bold mt-2 fw-light">
                           .54
                        </h5></Col>
                  </Row>
               </Col>

            </Slider>
         </Row>
      </div >
   )
}

export default AvatarCarousa2