import React from 'react'
import MainBanner from '../../Components/NonAuth/HomePage/MainBanner'
import HomeSection02 from '../../Components/NonAuth/HomePage/HomeSection02'
import '../../Components/NonAuth/HomePage/Home.css'
import '../../Components/NonAuth/HomePage/MediaQuerie.css'

const Home = () => {
  return (
    <div>
      <MainBanner/>
      <HomeSection02/>
    </div>
  )
}

export default Home