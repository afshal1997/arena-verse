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
                            There is a 10% buy and sell tax, 7% of which will be redistributed to Arena token holders, directly to their wallet in the form of BNB once a week. Minimum 7 day hold time (168 hours) from initial purchase of the token to be included in the dividend disbursements. The other 3% will be used for token buybacks, which limit selling pressure and drawdowns.
                        </p>
                        <p className='mb-3'>
                            Buy and sell limit of .5% of the total circulating supply of Arena Tokens. This will limit and discourage the manipulation efforts by whales and algorithmic programs seeking to take advantage of Arena Token holders, and promote organic price action. 30% of the tokens will be used for development purposes of the game, to pay developers, artists, and any others working to develop the game.
                        </p>
                        <p className='mb-3'>
                            30% of the tokens will be in the open market, available for purchase, through multiple decentralized trading exchanges to investors looking to invest in ArenaVerse.
                        </p>
                        <p className='mb-3'>
                            15% of the tokens will be used for tournament rewards. This may increase as the development of the game progresses because then, we will be able to re-allocate marketing and development funds towards the play2earn rewards pool.
                        </p>
                        <p className='mb-3'>
                            10% will go towards marketing efforts to bring in more ArenaVerse players and investors.
                        </p>
                        <p className='mb-3'>
                            10% of the tokens will be sold to early investors of the company in the form of a private sale and a pre-sale before the listing on decentralized exchanges.
                        </p>
                        <p className='mb-3'>
                            5% of the tokens will be given to the team, but will be locked for the first 6 months and vested for a duration of 5 years, of which only 10% may be sold every 6 months after.
                        </p>
                        <p className='mb-3'>
                            This shows our investors that we are fully invested in the growth and development of ArenaVerse in the long term
                        </p>
                    </div>
                </Col >
            </Container >
            <PageFooter />
        </div>
    )
}

export default Section10