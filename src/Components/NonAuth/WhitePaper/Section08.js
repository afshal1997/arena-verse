import React from 'react'
import { Col, Container } from 'react-bootstrap'
import { Zoom } from 'react-reveal'
import img07 from '../../../Assets/Whitepaper/img07.png'
import PageFooter from './PageFooter'

const Section08 = () => {
    return (
        <div id='holders' className="section05 position-relative">
            <Container>
                <Col lg={8} className='text-light m-auto mb-5 pb-'>
                    <div className="aboutArenaVerse mt-5 mb-5 pb-5">
                        <img className='w-100 mb-5 pb-4' src={img07} alt="img07" />
                        <h2 className='backHeading text-center'>token holders</h2>
                        <h2 className='text-center mb-3'><Zoom left cascade>Why should we hold our tokens?</Zoom></h2>
                        <p className='text-center pb-5 mb-5'>
                            Aside from being able to use the tokens to earn you money in game, Arena token holders will also be rewarded for simply holding the tokens. For every buy and sell of Arena Tokens, there is a 11% buy and sell tax. 8% of that tax will be redistributed to arena token holders once daily, direct to their wallet in the form of BUSD. The other 3% will be used for manual token buybacks. Arena token holders will also receive a 5% share from any transactions that occur in-game, so the more tokens you hold, the more rewards you receive! Arena Tokens also have anti-inflationary and anti-dump measures in place such as the constant burning of tokens until we have burned 30% of the total circulating supply, manual and automatic buybacks which limit the drawdowns and sell offs, and an exchange limit of .2% of the total circulating supply. This means that no single transaction may go over .2% of the current total circulating supply. With the way we engineered our token and smart contract, we can give our investors the peace of mind to hold on to their tokens without the fear of getting dumped on or bagged by traders looking to capitalize on day to day movements of the token.
                        </p>
                    </div>
                </Col >
            </Container >
            <PageFooter />
        </div>
    )
}

export default Section08