import React from 'react'
import { Container } from 'react-bootstrap'
import AvatarCarousal1 from '../Carousals/AvatarCarousal1'

const HomeSection03 = () => {
  return (
    <div className="section03 m-auto text-light py-5">
      <Container>
        <div className="col-lg-9 m-auto text-center">
          <h3 className="">Avatars</h3>
          <p>
            Collect and trade Avatars to build the ultimate sports team!
            Earn passive income by renting out your ArenaVerse NFT to others to use in game

          </p>
        </div>
        <AvatarCarousal1 />
      </Container>
    </div>
  )
}

export default HomeSection03