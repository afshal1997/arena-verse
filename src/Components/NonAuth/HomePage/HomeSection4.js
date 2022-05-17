import React from 'react'
import { Container } from 'react-bootstrap'
import AvatarCarousal2 from '../Carousals/AvatarCarousal2'

const HomeSection04 = () => {
   return (
      <div className="section04 m-auto text-light py-5" id='marketplace'>
         <Container>
            <div className="col-lg-6 mb-5 m-auto text-center">
               <div className="marketPlaceSection">
                  <h3 className="">marketplace</h3>
                  <p>
                     Buy, sell, and trade ArenaVerse NFTs through our very own marketplace! Avoid having to use 3rd party marketplaces and get rid of all the hassle and extra fees!
                  </p>
               </div>
            </div>
            <AvatarCarousal2 />
         </Container>
      </div>
   )
}

export default HomeSection04