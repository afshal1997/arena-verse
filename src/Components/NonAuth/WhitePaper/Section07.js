import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Zoom } from 'react-reveal'
import PageFooter from './PageFooter'
import tournamentsImg01 from '../../../Assets/Home/cartoon2.png'
import tournamentsImg02 from '../../../Assets/Home/cartoon1.png'
import tournamentsImg01Bg from '../../../Assets/Home/b1.png'
import tournamentsImg02Bg from '../../../Assets/Home/b2.png'
import vsImg from '../../../Assets/Home/vsImg.png'

const Section07 = () => {
    return (
        <div id='Sports' className="section03 position-relative">
            <Container>
                <Col lg={8} className='text-light m-auto mb-5 pb-'>
                    <div className="aboutArenaVerse mt-5 mb-5 pb-5">
                        <h2 className='backHeading text-center'>Sports</h2>
                        <h2 className='text-center mb-3'><Zoom left cascade>tournaments</Zoom></h2>
                        <p className='text-center'>
                            There will be daily, weekly, monthly, and seasonal tournaments for the five current sports. The tournaments will be free to enter, but there will  be some tournaments that you enter only if you have a certain amount of Arena points. Prizes can range from tokens, to rare items and avatars. Tournaments differ from regular games, in that the competitors may not place wagers on the tournament they participate in. Spectators however, will be able to place wagers on the tournaments, but only before the tournament begins. Bets may not be placed once the tournament begins. The transaction fees will be the same as regular wagers (5% maximum).
                        </p>
                        <Row>
                            <Col lg={4} className='m-auto'>
                                <div className="tournamentsImgs position-relative mt-5 mb-4">
                                    <img className='tournamentsImg01' src={tournamentsImg01} alt='tournamentsImg01' />
                                    <img className='tournamentsImgBg' src={tournamentsImg01Bg} alt='tournamentsImg01Bg' />
                                </div>
                            </Col>
                            <Col lg={3} className='m-auto col-7'>
                                <img className='w-100' src={vsImg} alt='vsImg' />
                            </Col>
                            <Col lg={4} className='m-auto'>
                                <div className="tournamentsImgs position-relative mt-5 mb-4">
                                    <img className='tournamentsImg02' src={tournamentsImg02} alt='tournamentsImg02' />
                                    <img className='tournamentsImgBg' src={tournamentsImg02Bg} alt='tournamentsImg02Bg' />
                                </div>
                            </Col>
                        </Row>
                        <h2 className='text-center mb-3 mt-5'><Zoom left cascade>Rankings</Zoom></h2>
                        <p className='text-center mb-5'>
                            Teams and individuals will receive tournament points for tournaments they participate and win games in. They will then be ranked based on those points. It is beneficial to acquire as many points as you can, as there will be exclusive tournaments in which you need a certain amount of points to participate in. As for regular gameplay, there are no ranking systems involved.
                        </p>
                    </div>
                </Col >
            </Container >
            <PageFooter />
        </div >
    )
}

export default Section07