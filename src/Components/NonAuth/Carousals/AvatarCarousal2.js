import React from 'react'
import Slider from "react-slick";
import { AvatarCarousa1Content } from '../../../UI/Content/AvatarCarousa2/AvatarCarousa2Content';
import AvatarCarousa2Data from '../../../UI/Content/AvatarCarousa2/AvatarCarousa2Data';
import { AvatarCarousalSettings } from '../../../utils/AvatarCarousalSettings';
const AvatarCarousa2 = () => {
   return (
      <div className='ntf-icons mb-5'>
         <Slider {...AvatarCarousalSettings}>
            {
               React.Children.toArray(
                  AvatarCarousa1Content.map((data) => {
                     return (
                        <AvatarCarousa2Data {...data} />
                     )
                  }
                  )
               )
            }
         </Slider>
      </div >
   )
}

export default AvatarCarousa2