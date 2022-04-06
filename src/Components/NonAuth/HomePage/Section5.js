import React from 'react'
import { Container } from 'react-bootstrap'
import SingleCarousal from './../Carousals/SingleCarousal';

const Section5 = () => {
  return (
    <div className="section05 m-auto text-light py-5">
      <Container>

        <div className="col-lg-8 m-auto text-center">
          <h3 className="our-family">Arenas</h3>
          <p className='m-0 p-0'>
            There are currently five different arenas, each with its own sport:
          </p>
          <p className='m-0 p-0'>
            Soccer, Basketball, Football, Tennis, and Boxing.
          </p>
          <div className="my-5">
            <em className=''>
              <h4>More arenas and sports will be added as the project progresses</h4>
            </em>
          </div>
        </div>
        <SingleCarousal />

      </Container>
    </div>
  )
}

export default Section5