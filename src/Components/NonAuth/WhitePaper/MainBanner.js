import { faDiscord, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Col, Container } from 'react-bootstrap'
import { Zoom } from 'react-reveal'
import PageFooter from './PageFooter'

const MainBanner = () => {
    return (
        <div className='mainBanner position-relative'>
            <Container>
                <Col lg={6} className='m-auto text-center mt-5 pt-5 mb-5 pb-5'>
                    <div className="mainBannerContent mainBannerContentZindex mt-5 pt-5 text-light mb-5">
                        <h1><Zoom left cascade>ArenaVerse</Zoom></h1>
                        <h4><Zoom right cascade>an online, open world PVP </Zoom></h4>
                        <div className="socialMediaIcons">
                            <a href="https://twitter.com/arenaverse_io?s=21&t=HYi_vLaLvJd71V9Jzy27oA" className='text-light'>
                                <FontAwesomeIcon icon={faTwitter} />
                            </a>
                            <a href="https://t.me/ArenaVerseIo" className='text-light'>
                                <FontAwesomeIcon icon={faPaperPlane} />
                            </a>
                            <a href="https://discord.com/invite/arenaverse" className='text-light'>
                                <FontAwesomeIcon icon={faDiscord} />
                            </a>
                            <a href="https://instagram.com/arenaverse_io?igshid=YmMyMTA2M2Y=" className='text-light'>
                                <FontAwesomeIcon icon={faInstagram} />
                            </a>
                        </div>
                    </div>
                </Col>
                <Col lg={6} className='m-auto text-center mb-5'>
                    <div className="mainBannerContent mainBannerContentZindex text-light mb-5">
                        <h1 className='mt-0'><Zoom left cascade>WHITEPAPER</Zoom></h1>
                        <p>
                            ArenaVerse is an online, open world PVP, play-to-earn sports-based game that allows players to team up with their friends or go solo and play against others all across the globe for a chance to win arena tokens and exclusive prizes!
                        </p>
                    </div>
                </Col>
                <Col lg={6} className='m-auto text-center mb-5 pb-5'>
                    <div className="mainBannerContent mainBannerContentZindex text-light mb-5">
                        <h6 className='mt-0'><Zoom left cascade>Version 1.0 to May-June 2022</Zoom></h6>
                        <h4>ENGLISH</h4>
                    </div>
                </Col>
            </Container>
            <PageFooter />
        </div>
    )
}

export default MainBanner