import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Zoom } from 'react-reveal'
import PageFooter from './PageFooter'
import img06 from '../../../Assets/Whitepaper/img06.png'

const Section06 = () => {
    return (
        <div id='matchmaking' className="section05 position-relative">
            <Container>
                <Col lg={8} className='text-light m-auto mb-5 pb-'>
                    <div className="aboutArenaVerse mt-5 mb-5 pb-5">
                        <h2 className='backHeading text-center'>matchmaking</h2>
                        <h2 className='text-center mb-3'><Zoom left cascade>Wager system</Zoom></h2>
                        <p className='text-center'>
                            Before a player enters matchmaking, they will choose their desired wager range (1-50, 50-100, 100-150, etc.). They will then be paired with someone who chooses the same range, then the two parties may chat with each other and decide on a final amount before the game starts. Once both parties enter their wagers, the tokens will be deducted from their account as well as a 5% fee, which is deducted from their wagers. Once the game is over, the tokens will be released to the winner(s).
                        </p>
                        <p className='text-center'>
                            Players can wager on other players' games as they spectate in the Arena. They may place a bet after the game begins, but not after the first half of the game has already finished. The odds will also change as they wager when the game is progressing, so for the best odds, it’s best to place your wager before the game begins. Players may not place a wager larger than what the players themselves are wagering. There is also a maximum 5% transaction fee for every wager placed. The larger your wager, the lesser the percentage is for the fee.
                        </p>
                        <p className='text-center'>
                            <b>
                                (see chart below)
                            </b>
                        </p>
                        <img className='w-100 mt-4 mb-5' src={img06} alt="img06" />
                    </div>
                </Col >
            </Container >
            <PageFooter />
        </div >
    )
}

export default Section06