import React from 'react'
import { Container } from 'react-bootstrap'
import { Flip } from 'react-reveal';
import SingleCarousal from './../Carousals/SingleCarousal';

const Section5 = () => {
  return (
    <div className="section05 m-auto text-light py-5">
      <Container>

        <div className="col-lg-7 m-auto text-center">
          <h3 className="our-family"><Flip right cascade>Arenas</Flip></h3>
          <p className='m-0 p-0'>
            <Flip right cascade>
              There are currently five different arenas, each with its own sport:
            </Flip>
          </p>
          <p className='m-0 p-0'>
            <Flip right cascade>
              Soccer, Basketball, Football, Tennis, and Boxing.
            </Flip>
          </p>
          <div className="my-5">
            <em className=''>
              <Flip right cascade>
                <h4>More arenas and sports will be added as the project progresses</h4>
              </Flip>
            </em>
          </div>
        </div>
        <SingleCarousal />
      </Container>
    </div>
  )
}

export default Section5