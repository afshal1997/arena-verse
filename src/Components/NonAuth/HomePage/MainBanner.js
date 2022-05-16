import { faDiscord, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Col, Container } from 'react-bootstrap'
import playIcon from '../../../Assets/ButtonIcons/playIcon.png'
import playButton from '../../../Assets/ButtonIcons/playNowButton.png'
import Zoom from 'react-reveal/Zoom';
import mainBannerVideo from '../../../Assets/Videos/ArenaVerseBannerVideo.mp4'

const MainBanner = () => {
    return (
        <div className='HomeMainBanner position-relative'>
             <video
                autoPlay="true"
                loop="true"
                muted="true"
                playsInline="true"
                className='mainBannerVideo'
                src={mainBannerVideo}
                type="video/mp4" />
            <Container className='mt-5 pt-5'>
                <Col lg={6} className='m-auto text-center mt-5 pt-5'>
                    <div className="mainBannerContent text-light">
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
                        <img className='playIcon' src={playIcon} alt='playIcon' />
                        <img className='playButton' src={playButton} alt='playButton' />
                    </div>
                </Col>
            </Container>
        </div>
    )
}

export default MainBanner