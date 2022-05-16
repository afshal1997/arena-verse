import React from 'react'
import { Col, Row } from 'react-bootstrap'

const AvatarCarousa2Data = (props) => {
    return (
        <>
            <img className="w-100" src={props.AvatarCarousa2Img} alt='Avatar1' />
            <Col lg={9} className='m-auto'>
                <h6 className="mt-2 fw-light">Type : {props.AvatarCarousa2Type}</h6>
                <h6 className="mt-2 fw-light">Rarity: {props.AvatarCarousa2Rarity}</h6>
                <Row>
                    <Col lg="2" className='m-auto'>
                        <img src={props.AvatarCarousa2Icon} className="w-100 nft-symbol" alt="" />
                    </Col>
                    <Col lg={10} className='col-10 m-auto'>
                        <h5 className="fw-bold mt-2 fw-light">
                            {props.AvatarCarousa2Rate}
                        </h5>
                    </Col>
                </Row>
            </Col>
        </>
    )
}

export default AvatarCarousa2Data