import React from 'react'
import { Col, Container } from 'react-bootstrap'
import { Zoom } from 'react-reveal'
import PageFooter from './PageFooter'

const Section02 = () => {
    return (
        <div className="section02 position-relative">
            <Container>
                <Col lg={6} className='text-light ms-5'>
                    <div className="index">
                        <h2><Zoom left cascade>Table Of Content</Zoom></h2>
                        <ul>
                            <li><a className='text-light' href="#aboutArenaVerse">Info: What is ArenaVerse?</a></li>
                            <li><a className='text-light' href="#earnMoney">How do you earn money?</a></li>
                            <li><a className='text-light' href="#Gameplay">Gameplay</a></li>
                            <li><a className='text-light' href="#matchmaking">Wager system</a></li>
                            <li><a className='text-light' href="#Sports">Tournaments</a></li>
                            <li><a className='text-light' href="#holders">Token Holders</a></li>
                            <li><a className='text-light' href="#Tokenomics">Tokenomics</a></li>
                            <li><a className='text-light' href="#tokenInformation">Token Information</a></li>
                        </ul>
                    </div>
                </Col>
            </Container>
            <PageFooter/>
        </div>
    )
}

export default Section02