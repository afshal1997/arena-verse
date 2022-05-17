import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Bounce, Zoom } from 'react-reveal'
import tokenomicsImg01 from '../../../Assets/Home/tokenomicsImg.png'

const HomeSection08 = () => {
    return (
        <div className='homeSection08' id='tokenomics'>
            <Container>
                <Row>
                    <Col lg={6} className="text-light">
                        <div className="TokenomicsContent">
                            <h3 className="our-family mb-0"><Zoom left cascade>Tokenomics</Zoom></h3>
                            <h4 className='text-secondary'><Zoom left cascade>Arena Token Allocation:</Zoom></h4>
                            <h6><Zoom left cascade>Total Initial supply: 75,000,000,000 (100%)</Zoom></h6>
                        </div>
                        <div className="TokenomicsImg position-relative">
                            <img className='tokenomicsImg01' src={tokenomicsImg01} alt='tokenomicsImg' />
                        </div>
                    </Col>
                    <Col lg={6} className='m-auto text-light'>
                        <div className="features">
                            <h2 className="text-success"><Bounce right cascade>Token Features</Bounce></h2>
                            <h5 className='text-secondary'>Passive Income</h5>
                            <p>
                                8% buy and sale tax redistributed to Arena Token holders in the form of BUSD Daily!
                            </p>
                            <h5 className='text-secondary'>Deflationary Currency</h5>
                            <p>Constant burning of tokens until there are only 50 billion of the 75 billion tokens in circulation.</p>
                            <p>Frequent manual and automatic token buybacks </p>
                            <h5 className='text-secondary'>Anti-Manipulation Measurements</h5>
                            <p className='mb-5'>
                                The Arena Token Contract is coded in a way that prevents big wallets (whales) as well as High Frequency Trading bots and algorithms from manipulating the price to profit from Arena Token holders.
                            </p>
                            <p>
                                Team holds less than 5% of the tokens which are locked and vested in a 5 year period. Most token allocation is towards the development and betterment of the game as well as player rewards.
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default HomeSection08