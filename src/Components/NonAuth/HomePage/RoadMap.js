import React from 'react'
import { Col, Card, Container } from 'react-bootstrap';

const RoadMap = () => {
   return (
      <div className="road-map">
         <Container>
            <Col lg={8} className="m-auto">
               <h2 className="road-map__heading our-family text-center text-light">Release Roadmap</h2>
               <p className="text-center text-light">
                  Our roadmap is subject to change based on a variety of influential factors, be sure to check our Telegram and Twitter regularly to stay up to date.
               </p>
            </Col>
            <Col className="col-4" lg={4} className="bg-transparent">
               <Card className="road-map-card">
                  <ul>
                     <li>ArenaVerse conceptualization</li>
                     <li>Creation of whitepaper</li>
                     <li>ArenaVerse characters designed</li>
                  </ul>

               </Card>
            </Col>
         </Container>
      </div>
   )
}

export default RoadMap