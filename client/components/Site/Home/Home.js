import React from 'react'
import Navbar from '../Navbar'
import Landing from './Landing'
import Card from './Card'
import ProtectYourFuture from './ProtectYourFuture'
import HowItWorksSection from './HowItWorksSection'
import WhatDoWeCover from './WhatDoWeCover'
import WhatWeDontCover from './WhatWeDontCover'
import Plans from './Plans'
import Protection from './Protection'
import WhatDoYouGet from './WhatDoYouGet'
import WhatDoYouGetMobile from './WhatDoYouGetMobile'
import PlansMobile from './PlansMobile'
import BePrepared from './BePrepared'
const Home = () => {
  return (
    <>
      <Navbar />
      <Landing />
      <Card />
      <ProtectYourFuture />
      <HowItWorksSection />
      <WhatDoWeCover />
      <WhatWeDontCover />
      <Plans />
      <Protection />
      <WhatDoYouGet />
      <WhatDoYouGetMobile />
      <PlansMobile />
      <BePrepared />
    </>
  )
}
export default Home
