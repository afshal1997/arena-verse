import React from 'react'
import { Col, Container } from 'react-bootstrap'
import { Zoom } from 'react-reveal'
import PageFooter from './PageFooter'
import tokenomicsImg01 from '../../../Assets/Home/tokenomicsImg.png'

const Section09 = () => {
    return (
        <div id='Tokenomics' className="section05 position-relative">
            <Container>
                <Col lg={8} className='text-light m-auto mb-5 pb-5 text-center'>
                    <div className="TokenomicsContent">
                        <h3 className="our-family mb-0"><Zoom left cascade>Tokenomics</Zoom></h3>
                        <h4 className='text-secondary'><Zoom left cascade>Arena Token Allocation:</Zoom></h4>
                        <h6 className='totalPrice'><Zoom left cascade>Total Initial supply:</Zoom></h6>
                        <h6 className='totalPrice'>75,000,000,000 (100%)</h6>
                    </div>
                    <div className="TokenomicsImg position-relative">
                        <img className='tokenomicsImg01 tokenomicsImgAnimation' src={tokenomicsImg01} alt='tokenomicsImg' />
                    </div>
                </Col >
            </Container >
            <PageFooter />
        </div>
    )
}

export default Section09