import React from 'react'
import Slider from 'react-slick';
import { AvatarCarousa3Content } from '../../../UI/Content/AvatarCarousa3/AvatarCarousa3Content';
import AvatarCarousa3Data from '../../../UI/Content/AvatarCarousa3/AvatarCarousa3Data';
import { singleSlideCarousal } from './../../../utils/utils';
const SingleCarousal = () => {

   return (
      <Slider {...singleSlideCarousal}>
         {
            React.Children.toArray(
               AvatarCarousa3Content.map((data) => {
                  return(
                     <AvatarCarousa3Data {...data}/>
                  )
               }
               )
            )
         }
      </Slider>
   )
}

export default SingleCarousal