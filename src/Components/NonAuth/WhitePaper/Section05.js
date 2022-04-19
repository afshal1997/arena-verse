import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Zoom } from 'react-reveal'
import PageFooter from './PageFooter'
import img01 from '../../../Assets/Whitepaper/img01.png'
import img02 from '../../../Assets/Whitepaper/img02.png'
import img03 from '../../../Assets/Whitepaper/img03.png'
import img04 from '../../../Assets/Whitepaper/img04.png'
import img05 from '../../../Assets/Whitepaper/img05.png'

const Section05 = () => {
    return (
        <div id='Gameplay' className="section05 position-relative">
            <Container>
                <Col lg={8} className='text-light m-auto mb-5 pb-'>
                    <div className="aboutArenaVerse mt-5 mb-5 pb-5">
                        <h2 className='backHeading text-center'>Introduction</h2>
                        <h2 className='text-center mb-3'><Zoom left cascade>Gameplay</Zoom></h2>
                        <p className='text-center'>
                            Arena currently has 5 different sports you can choose from, Soccer, Football, Basketball, Tennis, and Boxing. We will be releasing more games as the development of the game progresses, but as of now, there will be five main games players can choose from. All the games are PvP (player versus player). Players can choose to have a 1v1, 2v2, 3v3, 4v4, 5v5, etc. as many as they would like (Limit 5v5 for basketball, 11v11 for football, 5v5 for basketball, 2v2 for tennis and 1v1 for boxing). Players can enter as a solo player, or enter as a team. If they enter as a solo, they will be paired with other random solo players, or they can play by themselves against others in a 1v1. If there are any problems or bugs that occur during a game, players may pause the game and call for a judge who will mediate and solve any problems.
                        </p>
                    </div>
                    <Row className='mb-5 pb-5'>
                        <Col lg={6} className='mb-4'>
                            <img className='w-100' src={img01} alt="img01" />
                            <h4 className='title'>Soccer</h4>
                        </Col>
                        <Col lg={6} className='mb-4'>
                            <img className='w-100' src={img02} alt="img01" />
                            <h4 className='title'>Football</h4>
                        </Col>
                        <Col lg={6} className='mb-4'>
                            <img className='w-100' src={img03} alt="img01" />
                            <h4 className='title'>Basketball</h4>
                        </Col>
                        <Col lg={6} className='mb-4'>
                            <img className='w-100' src={img04} alt="img01" />
                            <h4 className='title'>Tennis</h4>
                        </Col>
                        <Col lg={7} className='m-auto pb-5'>
                            <img className='w-100' src={img05} alt="img01" />
                            <h4 className='title'>Boxing</h4>
                        </Col>
                    </Row>
                </Col >
            </Container >
            <PageFooter />
        </div >
    )
}

export default Section05