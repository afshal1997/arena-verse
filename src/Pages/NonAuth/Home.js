import React from 'react'
import MainBanner from '../../Components/NonAuth/HomePage/MainBanner'
import HomeSection02 from '../../Components/NonAuth/HomePage/HomeSection02'
import '../../Components/NonAuth/HomePage/Home.css'
import '../../Components/NonAuth/HomePage/MediaQuerie.css'
import HomeSection03 from '../../Components/NonAuth/HomePage/homesection03'
import HomeSection04 from './../../Components/NonAuth/HomePage/HomeSection4';
import Section5 from './../../Components/NonAuth/HomePage/Section5';
import Section06 from '../../Components/NonAuth/HomePage/Section06'
import Section7 from '../../Components/NonAuth/HomePage/Section7'
import OurTeam from '../../Components/NonAuth/HomePage/OurTeam'
import HomeSection08 from '../../Components/NonAuth/HomePage/HomeSection08'
import RoadMap from '../../Components/NonAuth/HomePage/RoadMap'
import ScrollToTop from './ScrollToTop'

const Home = () => {
  return (
    <div className='homePage'>
      <ScrollToTop>
        <MainBanner />
        <HomeSection02 />
        <HomeSection03 />
        <HomeSection04 />
        <Section5 />
        <Section06 />
        <Section7 />
        <HomeSection08 />
        <RoadMap />
        <OurTeam />
      </ScrollToTop>
    </div>
  )
}

export default Home