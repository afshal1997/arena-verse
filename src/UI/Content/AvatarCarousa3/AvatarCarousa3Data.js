import React from 'react'
import { Col, Row } from 'react-bootstrap'

const AvatarCarousa3Data = (props) => {
    return (
        <div>
            <Row>
                <Col lg="5">
                    <img className='SingleCarousalBg' src={props.AvatarCarousa3Img} alt="SingleCarousalBg" />
                </Col>
                <Col lg="7" className='m-auto'>
                    <div className="second-section-sc">
                        <h2 className='mb-0'>{props.AvatarCarousa3title}</h2>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default AvatarCarousa3Data