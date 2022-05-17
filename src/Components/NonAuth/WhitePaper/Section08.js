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
                        Aside from being able to use Arena Tokens to earn you money in game, Arena token holders will also be rewarded for simply holding their tokens.  For every buy and sell of Arena tokens, there is a 10% tax, of which 7% will be redistributed to Arena Token holders once a week, and 3% will be used for token buybacks. Think of these rewards as dividend payments to our investors, but instead of on a quarterly/yearly basis, the dividends will be redistributed once a week. Tokens will need to be held in the same wallet for exactly 1 week (7 days) to be eligible for the weekly dividend distribution. Arena token holders will also receive a 5% share from any transactions that occur in-game, so the more tokens you hold, the more rewards you receive! Arena Tokens also have anti-inflationary and anti-dump measures in place such as manual and automatic buybacks which limit the drawdowns and sell offs, and an exchange limit of .5% of the total circulating supply. This means that no single transaction may go over .5% of the current total circulating supply. With the way we engineered our token and smart contract, we can give our investors the peace of mind to hold on to their tokens without the fear of being taken advantage of by traders looking to capitalize on day to day movements of Arena Tokens.
                        </p>
                    </div>
                </Col >
            </Container >
            <PageFooter />
        </div>
    )
}

export default Section08