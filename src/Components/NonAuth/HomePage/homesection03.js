import React from 'react'
import { Container } from 'react-bootstrap'
import AvatarCarousal1 from '../Carousals/AvatarCarousal1'

const HomeSection03 = () => {
  return (
    <div className="section03 m-auto text-light py-5">
      <Container>
        <div className="col-lg-6 mb-5 m-auto text-center">
          <div className="section03Content">
            <h3 className="">Avatars</h3>
            <p>
              Collect and trade Avatars to build the ultimate sports team!
              Earn passive income by renting out your ArenaVerse NFT to others to use in game
            </p>
          </div>
        </div>
        <AvatarCarousal1 />
      </Container>
    </div>
  )
}

export default HomeSection03