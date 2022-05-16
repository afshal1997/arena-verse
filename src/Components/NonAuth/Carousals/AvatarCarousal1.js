import React from 'react'
import Slider from "react-slick";
import { Row } from 'react-bootstrap';
import { AvatarCarousalSettings } from '../../../utils/AvatarCarousalSettings';
import AvatarCarousa1Data from '../../../UI/Content/AvatarCarousa1/AvatarCarousa1Data';
import { AvatarCarousa1Content } from '../../../UI/Content/AvatarCarousa1/AvatarCarousa1Content';
const AvatarCarousal = () => {
   return (
      <div>

         <Row>
            <Slider {...AvatarCarousalSettings}>
               {
                  React.Children.toArray(
                     AvatarCarousa1Content.map((data) => {
                        return (
                           <AvatarCarousa1Data {...data} />
                        )
                     })
                  )
               }
            </Slider>
         </Row>
      </div >
   )
}

export default AvatarCarousal