import React from "react"

import HomeLayout from "../components/home-layout"
import SEO from "../components/seo"

import HomeHero from "../components/home-sections/home-hero"
import HomeCanvas from "../components/home-sections/home-canvas"
import HomeSimple from "../components/home-sections/home-simple"
import HomeMiddle from "../components/home-sections/home-middle"
import HomeThreeCol from "../components/home-sections/home-three-col"
import LeadershipSection from "../components/leadership-section"
import HomeParallax from "../components/home-sections/home-parallax"
import HomeBottom from "../components/home-sections/home-bottom"

const IndexPage = () => (
  <HomeLayout>
    <SEO title="Home" />
    <HomeHero/>
    <HomeCanvas/>
    <HomeSimple/>
    <HomeMiddle/>
    <HomeThreeCol/>
    <LeadershipSection/>
    <HomeParallax/>
    <HomeBottom/>
  </HomeLayout>
)

export default IndexPage
