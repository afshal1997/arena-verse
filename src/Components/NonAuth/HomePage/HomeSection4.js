import React from 'react'
import { Container } from 'react-bootstrap'
import { Flip } from 'react-reveal'
import AvatarCarousal2 from '../Carousals/AvatarCarousal2'

const HomeSection04 = () => {
   return (
      <div className="section04 m-auto text-light py-5">
         <Container>
            <div className="col-lg-6 mb-5 m-auto text-center">
               <h3 className=""><Flip right cascade>marketplace</Flip></h3>
               <p>
                  <Flip right cascade>
                     Buy, sell, and trade ArenaVerse NFTs through our very own marketplace! Avoid having to use 3rd party marketplaces and get rid of all the hassle and extra fees!
                  </Flip>
               </p>
            </div>
            <AvatarCarousal2 />
         </Container>
      </div>
   )
}

export default HomeSection04