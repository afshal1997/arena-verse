import { faDiscord, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Col, Container } from 'react-bootstrap'
import playIcon from '../../../Assets/ButtonIcons/playIcon.png'
import playButton from '../../../Assets/ButtonIcons/playNowButton.png'
import Zoom from 'react-reveal/Zoom';
import mainBannerVideo from '../../../Assets/Videos/ArenaVerseHomeBannerVide.mp4'
import ComingSoonPopup from '../../../UI/Modals/ComingSoonPopup'

const MainBanner = () => {
    const [modalShow, setModalShow] = React.useState(false);
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
                        <h1>ArenaVerse</h1>
                        <h4>an online, open world PVP</h4>
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
                        <img className='playIcon' onClick={() => setModalShow(true)} src={playIcon} alt='playIcon' />
                        <img className='playButton' onClick={() => setModalShow(true)} src={playButton} alt='playButton' />
                    </div>
                </Col>
            </Container>
            <ComingSoonPopup
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </div>
    )
}

export default MainBanner