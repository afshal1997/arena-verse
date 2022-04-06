import React from 'react'
import { Col, Container } from 'react-bootstrap'
import { Flip } from 'react-reveal'
import section02Img02 from '../../../Assets/Home/section02Img02.png'

const HomeSection02 = () => {
    return (
        <div className='HomeSection02'>
            <Container>
                <Col lg={8} className='m-auto text-center text-white'>
                    <div className="Introduction">
                        <h2><Flip right cascade>Introduction</Flip></h2>
                        <p>
                            <Flip right cascade>
                                ArenaVerse is an online, open world PVP, play-to-earn sports-based game that allows players to team up with others or go solo and play against others all across the globe for a chance to win money and other prizes!  Players will also be able to join weekly tournaments with tons of prizes including exclusive NFT items or characters, as well as Arena tokens!
                            </Flip>
                        </p>
                    </div>
                    <img className='section02Img02' src={section02Img02} alt='section02Img02' />
                </Col>
            </Container>
        </div>
    )
}

export default HomeSection02