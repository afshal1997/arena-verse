import React from 'react'
import { Col, Card, Container, Row } from 'react-bootstrap';
import Line from '../../../Assets/Home/line.png'
import Flash from 'react-reveal/Flash';

const RoadMap = () => {
   return (
      <div className="road-map">
         <Container>
            <Col lg={8} className="m-auto">
               <Flash><h2 className="road-map__heading our-family text-center text-light">Release Roadmap</h2></Flash>
               <p className="text-center text-light">
                  Our roadmap is subject to change based on a variety of influential factors, be sure to check our Telegram and Twitter regularly to stay up to date.
               </p>
            </Col>
            <div className="position-relative card-transparent my-5 py-5">
               <img src={Line} className="line-image" alt="" />
               <Row>
                  <Col className="m-auto me-0 p-0" lg={4}>
                     <Card className="card-bg-transparent road-map-card p-3">
                        <ul>
                           <li>ArenaVerse conceptualization</li>
                           <li>Creation of whitepaper</li>
                           <li>ArenaVerse characters designed</li>
                        </ul>
                     </Card>
                  </Col>

                  <Col className="m-auto me-0 p-0" lg={4}>
                  </Col>
               </Row>
               <Row>
                  <Col className="m-auto ms-0 p-0" lg={4}>
                  </Col>
                  <Col className="m-auto ms-0 p-0" lg={4}>
                     <Card className="card-bg-transparent road-map-card p-3">
                        <ul>
                           <li>Conceptualization of Arenas and game environment</li>
                           <li>Website development</li>
                           <li>Partnership planning with other projects</li>
                           <li>Creation of social media accounts and online community through discord and telegram</li>
                        </ul>
                     </Card>
                  </Col>
               </Row>
               <Row>
                  <Col className="m-auto me-0 p-0" lg={4}>
                     <Card className="card-bg-transparent road-map-card p-3">
                        <ul>
                           <li>Smart contract development and audit</li>
                           <li>Start of marketing campaign</li>
                           <li>ICO of ArenaVerse NFTs</li>
                           <li>Start of game development</li>
                        </ul>
                     </Card>
                  </Col>

                  <Col className="m-auto me-0 p-0" lg={4}>
                  </Col>
               </Row>
               <Row>

                  <Col className="m-auto ms-0 p-0" lg={4}>
                  </Col>
                  <Col className="m-auto ms-0 p-0" lg={4}>
                     <Card className="card-bg-transparent road-map-card p-3">
                        <ul>
                           <li>Launch of ArenaVerse Marketplace</li>
                           <li>Listing on more exchanges and multi-chain support</li>
                           <li>Release of Roadmap 2.0</li>
                        </ul>
                     </Card>
                  </Col>
               </Row>
            </div>
         </Container>
      </div>
   )
}

export default RoadMap