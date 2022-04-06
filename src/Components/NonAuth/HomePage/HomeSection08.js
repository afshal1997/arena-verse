import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import tokenomicsImg01 from '../../../Assets/Home/tokenomicsImg.png'
import tokenomicsImg02 from '../../../Assets/Home/tokenomicsImgText.png'

const HomeSection08 = () => {
    return (
        <div className='homeSection08'>
            <Container>
                <Row>
                    <Col lg={6} className="text-light">
                        <div className="TokenomicsContent">
                            <h3 className="our-family mb-0">Tokenomics</h3>
                            <h4 className='text-secondary'>Arena Token Allocation:</h4>
                            <h6>Total Initial supply: 75,000,000,000 (100%)</h6>
                        </div>
                        <div className="TokenomicsImg position-relative">
                            <img className='tokenomicsImg01' src={tokenomicsImg01} alt='tokenomicsImg' />
                        </div>
                    </Col>
                    <Col lg={6}>
                        <h2 className="mb-0 mt-5">Tokenomics</h2>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default HomeSection08