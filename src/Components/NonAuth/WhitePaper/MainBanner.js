import { faDiscord, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Col, Container } from 'react-bootstrap'
import { Zoom } from 'react-reveal'
import mainLogo from '../../../Assets/Logos/mainLogo.png'
import PageFooter from './PageFooter'
import mainBannerVideo from '../../../Assets/Videos/ArenaVerseBannerVideo.mp4'

const MainBanner = () => {
    return (
        <div className='mainBanner position-relative'>
            <video
                autoPlay="true"
                loop="true"
                muted="true"
                playsInline="true"
                className='mainBannerVideo'
                src={mainBannerVideo}
                type="video/mp4" />
            <Container>
                <Col lg={6} className='m-auto text-center mt-5 pt-5 mb-5 pb-5'>
                    <div className="mainBannerContent mainBannerContentZindex mt-5 pt-5 text-light mb-5">
                        <h1><Zoom left cascade>ArenaVerse</Zoom></h1>
                        <h4><Zoom right cascade>an online, open world PVP </Zoom></h4>
                        <div className="socialMediaIcons">
                            <a href="#" className='text-light'>
                                <FontAwesomeIcon icon={faTwitter} />
                            </a>
                            <a href="#" className='text-light'>
                                <FontAwesomeIcon icon={faPaperPlane} />
                            </a>
                            <a href="#" className='text-light'>
                                <FontAwesomeIcon icon={faDiscord} />
                            </a>
                            <a href="#" className='text-light'>
                                <FontAwesomeIcon icon={faInstagram} />
                            </a>
                        </div>
                    </div>
                </Col>
                <Col lg={6} className='m-auto text-center mb-5'>
                    <div className="mainBannerContent mainBannerContentZindex text-light mb-5">
                        <h2 className='mb-0'><Zoom right cascade>Token Of</Zoom></h2>
                        <h1 className='mt-0'><Zoom left cascade>WHITEPAPER</Zoom></h1>
                        <p>
                            ArenaVerse is an online, open world PVP, play-to-earn sports-based game that allows players to team up with others or go solo and play against others all across the globe for a chance to win money and other prizes!
                        </p>
                    </div>
                </Col>
                <Col lg={6} className='m-auto text-center mb-5 pb-5'>
                    <div className="mainBannerContent mainBannerContentZindex text-light mb-5">
                        <h6 className='mt-0'><Zoom left cascade>Version 1.0 - April 2022</Zoom></h6>
                        <h4>ENGLISH</h4>
                    </div>
                </Col>
            </Container>
            <PageFooter />
        </div>
    )
}

export default MainBanner