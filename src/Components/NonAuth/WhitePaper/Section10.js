import React from 'react'
import { Col, Container } from 'react-bootstrap'
import { Zoom } from 'react-reveal'
import PageFooter from './PageFooter'

const Section10 = () => {
    return (
        <div id='tokenInformation' className="section05 position-relative">
            <Container>
                <Col lg={8} className='text-light m-auto mb-5 pb-'>
                    <div className="aboutArenaVerse mt-5 mb-5 pb-5">
                        <h2 className='backHeading'>Information</h2>
                        <h2 className='mb-3'><Zoom left cascade>Token Information</Zoom></h2>
                        <p className='mb-3'>
                            There is an 11% buy and sell tax, 8% of which will be redistributed to Arena token holders, directly to their wallet in the form of BUSD everyday (Minimum 24 hour hold from initial purchase of the token to avail for this reward). The other 3% will be used for token buybacks.
                        </p>
                        <p className='mb-3'>
                            We will start to burn 25 Billion of the 75 billion tokens after we launch as a 			deflationary measure to keep the supply of the tokens limited. This provides the investor with not only the ability to have passive income from simply holding the tokens, but also provides Arena token investors with an appreciating asset, as the tokens will be limited in supply, and there will be constant buying back of the tokens by the team, to really reward the investors as the company grows.
                        </p>
                        <p className='mb-3'>
                            Buy and sell limit of .2% of the total circulating supply to discourage price manipulation and promote organic movement.
                        </p>
                        <p className='mb-3'>
                            Any single transaction will be limited to no more than .2% of the total circulating supply. This will limit the manipulation whales and bots can do to the token price, and promote organic price action.
                        </p>
                        <p className='mb-3'>
                            The team tokens will be locked for the first 6 months and vested for a duration of 5 years, of which only 10% may be sold every 6 months after. This shows our investors that we are fully invested in the growth and development of this game in the long term.
                        </p>
                        <p className='mb-3'>
                            11% of the tokens will be used for development purposes of the game, to pay developers, artists, and any others working to develop the game.
                            11% will go towards marketing efforts to bring in more Arena players.
                            11% of the tokens will be used for tournament rewards. This may increase as the development of the game progresses because then we will be able to re-allocate marketing and development funds to the funds for player rewards.
                        </p>
                        <p className='mb-3'>
                            23% of the tokens will be sold to early investors of the company. Although encouraged to hold, as the early long term investors will reap the most rewards, these tokens are still considered open to the public as the holders may sell at any time. 53% will also be released to the public upon launch, 33% of which will be burned as a deflationary  measure.
                        </p>
                    </div>
                </Col >
            </Container >
            <PageFooter />
        </div>
    )
}

export default Section10