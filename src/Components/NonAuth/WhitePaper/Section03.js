import React from 'react'
import { Col, Container } from 'react-bootstrap'
import PageFooter from './PageFooter'
import section02Img02 from '../../../Assets/Home/section02Img02.png'
import { Zoom } from 'react-reveal'

const Section03 = () => {
    return (
        <div id='aboutArenaVerse' className="section03 position-relative">
            <Container>
                <Col lg={3} className='m-auto'>
                    <img className='w-100' src={section02Img02} alt="section02Img02" />
                </Col>
                <Col lg={6} className='text-light m-auto text-center mb-5 pb-5'>
                    <div className="aboutArenaVerse mt-4 mb-5 pb-5">
                        <h2 className='backHeading'>Introduction</h2>
                        <h2><Zoom left cascade>What is ArenaVerse?</Zoom></h2>
                        <p>
                            ArenaVerse is an open world PVP, play-to-earn sports-based game that allows players to play their favorite sports against their friends all across the globe and make money at the same time. There are six species in the Arena, but each avatar is unique and a 1 of 1. This means that each character is different from one another in terms of how they look and how they perform in-game. These avatars are NFTs, which you can collect and trade with other players or sell in the marketplace. They can also be rented out, so that the owners can earn passive income when not using their avatars, as well as give their friends a chance to play the game without having to own an avatar. Players can enter tournaments with a team, or as a solo, and compete against their friends for a chance at winning tokens and rare avatars and items! Players can also use their tokens to wager against other players, which they can then exchange to other crypto currencies (BNB, BTC, ETH). Players are also ranked based on their tournament performance, so by performing well in tournaments, players and teams will receive points. They will then have the ability to enter exclusive tournaments with rare prizes which can only be entered if you have a certain number of points.
                        </p>
                    </div>
                </Col>
            </Container>
            <PageFooter />
        </div>
    )
}

export default Section03