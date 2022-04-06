import { faDiscord, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Col, Container } from 'react-bootstrap'
import mainLogo from '../../../Assets/Logos/mainLogo.png'
import playIcon from '../../../Assets/ButtonIcons/playIcon.png'
import playButton from '../../../Assets/ButtonIcons/playNowButton.png'
import Zoom from 'react-reveal/Zoom';

const MainBanner = () => {
    return (
        <div className='HomeMainBanner'>
            <Container>
                <Col lg={2} className='col-3 m-auto'>
                    <img className='w-100 mt-5 mb-2' src={mainLogo} alt='mainLogo' />
                </Col>
                <Col lg={6} className='m-auto text-center'>
                    <div className="mainBannerContent text-dark">
                        <h1><Zoom left cascade>ArenaVerse</Zoom></h1>
                        <h4><Zoom right cascade>an online, open world PVP </Zoom></h4>
                        <div className="socialMediaIcons">
                            <a href="#" className='text-warning'>
                                <FontAwesomeIcon icon={faTwitter} />
                            </a>
                            <a href="#" className='text-warning'>
                                <FontAwesomeIcon icon={faPaperPlane} />
                            </a>
                            <a href="#" className='text-warning'>
                                <FontAwesomeIcon icon={faDiscord} />
                            </a>
                            <a href="#" className='text-warning'>
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