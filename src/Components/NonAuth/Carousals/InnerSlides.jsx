import React from 'react'
import { Col, Row } from 'react-bootstrap'

const InnerSlides = ({ Avatar1, NftIcon, nftValue, type, rarity }) => {
   return (
      <Col lg="3" className="col-3">
         <img className="w-100" src={Avatar1} alt='Avatar1' />
         <h6 className="mt-2 fw-light">{type}</h6>
         <h6 className="mt-2 fw-light">{rarity}</h6>
         <Row className="mx-auto">
            <Col lg="1" className='p-0'>
               <img src={NftIcon} className="w-100 nft-symbol" alt="" />
            </Col>
            <Col className='col-11 col-lg-11'>
               <h5 className="fw-bold mt-2 fw-light">
                  {nftValue}
               </h5>
            </Col>
         </Row>
      </Col>
   )
}

export default InnerSlides