import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Zoom } from 'react-reveal'
import PageFooter from './PageFooter'
import arrowLine from '../../../Assets/Whitepaper/arrowLine1.png'

const Section04 = () => {
    return (
        <div id='earnMoney' className="section04 position-relative">
            <Container>
                <Col lg={8} className='text-light m-auto mb-5 pb-5'>
                    <div className="aboutArenaVerse mt-4 mb-5 pb-5">
                        <h2 className='backHeading text-center'>Introduction</h2>
                        <h2 className='text-center mb-5'><Zoom left cascade>How do you earn money?</Zoom></h2>
                        <div className="position-relative">
                            <Row>
                                <Col lg={4} className='m-auto'>
                                    <h5>Play in tournaments</h5>
                                </Col>
                                <img className='arrowLine' src={arrowLine} alt="arrowLine" />
                                <Col lg={7} className='m-auto'>
                                    <p>
                                        There will be daily and weekly tournaments that players may participate in as a team or as a solo, and have the chance to win tokens, avatars, or rare items as prizes.
                                    </p>
                                </Col>
                            </Row>
                        </div>
                        <div className="position-relative">
                            <Row>
                                <Col lg={4} className='m-auto'>
                                    <h5>The Arena tokens are an appreciating asset</h5>
                                </Col>
                                <img className='arrowLine' src={arrowLine} alt="arrowLine" />
                                <Col lg={7} className='m-auto mt-5 mb-4'>
                                    <p>
                                        On top of being able to earn tokens by playing the game, the tokens themselves are also appreciating assets, as the holders will be rewarded BUSD (Binance dollars which can be exchanged for fiat or other crypto currencies) everyday for simply holding the token (minimum 24 hour hold time after token purchase). These rewards come from the fees for every token transaction, which we then re-distribute to investors, and send directly to their wallet holding the Arena tokens. The more Arena tokens you hold, the more BUSD rewards you receive.
                                    </p>
                                </Col>
                            </Row>
                        </div>

                        <div className="position-relative">
                            <Row>
                                <Col lg={4} className='m-auto'>
                                    <h5>Wager against other players</h5>
                                </Col>
                                <img className='arrowLine' src={arrowLine} alt="arrowLine" />
                                <Col lg={7} className='m-auto'>
                                    <p>
                                        Players purchase in-game currency called Arena tokens which they can then be used to wager on games against other players through five of our current games (Soccer, Football, Basketball, Tennis, and Boxing). Since each game is held in an arena, others may enter and watch the game. They may also place wagers on others’ games.
                                    </p>
                                </Col>
                            </Row>
                        </div>
                        <div className="position-relative">
                            <Row>
                                <Col lg={4} className='m-auto'>
                                    <h5>Rent out your avatar</h5>
                                </Col>
                                <img className='arrowLine' src={arrowLine} alt="arrowLine" />
                                <Col lg={7} className='m-auto mt-5'>
                                    <p>
                                        As an ArenaVerse avatar holder, you have the ability to allow others to rent your avatar to be used in game. This provides the holder the ability to receive passive income from their NFTs as well as allow other players to play in the ArenaVerse without having to purchase an avatar.
                                    </p>
                                </Col>
                            </Row>
                        </div>
                        <div className="position-relative">
                            <Row>
                                <Col lg={4} className='m-auto'>
                                    <h5>Reach certain achievements and complete special quests</h5>
                                </Col>
                                <img className='arrowLine' src={arrowLine} alt="arrowLine" />
                                <Col lg={7} className='m-auto'>
                                    <p>
                                        Players can receive rewards for accomplishing certain achievements in game. These achievements will not be revealed to the public, and will be revealed as players accomplish them. There will also be weekly quests made public to everyone, and the first person or team to accomplish them will be rewarded.
                                    </p>
                                </Col>
                            </Row>
                        </div>
                        <div className="position-relative">
                            <Row>
                                <Col lg={4} className='m-auto'>
                                    <h5>Buy and sell limited edition avatars & items</h5>
                                </Col>
                                <img className='arrowLine' src={arrowLine} alt="arrowLine" />
                                <Col lg={7} className='m-auto mt-5'>
                                    <p>
                                        With each avatar having different designs and in-game stats, the value of each avatar will be completely unpredictable and will be decided by the players. This provides players the chance to mint extremely rare and high-performance avatars, which can be re-sold at whatever prices the players see as reasonable. Our mint price will never change.
                                    </p>
                                </Col>
                            </Row>
                        </div>
                    </div>
                </Col >
            </Container >
            <PageFooter />
        </div >
    )
}

export default Section04