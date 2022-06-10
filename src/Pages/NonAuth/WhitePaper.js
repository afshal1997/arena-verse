import React from 'react'
import MainBanner from '../../Components/NonAuth/WhitePaper/MainBanner'
import Section02 from '../../Components/NonAuth/WhitePaper/Section02'
import '../../Components/NonAuth/WhitePaper/WhitePaper.css'
import '../../Components/NonAuth/WhitePaper/MediaQuerie.css'
import '../../styles/styles.css'
import Section03 from '../../Components/NonAuth/WhitePaper/Section03'
import Section04 from '../../Components/NonAuth/WhitePaper/Section04'
import Section05 from '../../Components/NonAuth/WhitePaper/Section05'
import Section06 from '../../Components/NonAuth/WhitePaper/Section06'
import Section07 from '../../Components/NonAuth/WhitePaper/Section07'
import Section08 from '../../Components/NonAuth/WhitePaper/Section08'
import Section09 from '../../Components/NonAuth/WhitePaper/Section09'
import Section10 from '../../Components/NonAuth/WhitePaper/Section10'
import ScrollToTop from './ScrollToTop'

const WhitePaper = () => {
  return (
    <div className='WhitePaperBody'>
      <ScrollToTop>
        <MainBanner />
        <Section02 />
        <Section03 />
        <Section04 />
        <Section05 />
        <Section06 />
        <Section07 />
        <Section08 />
        <Section09 />
        <Section10 />
      </ScrollToTop>
    </div>
  )
}

export default WhitePaper