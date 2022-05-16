import React from 'react'

const AvatarCarousa1Data = (props) => {
    return (
        <div>
            <img className="w-100" src={props.AvatarCarousa1Img} alt="" />
            <h4 className="text-center mt-3 shadow-text">{props.AvatarCarousa1title}</h4>
        </div>
    )
}

export default AvatarCarousa1Data