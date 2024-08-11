import React from 'react'
import HeroSection from "./subcomponents/HeroSection"
import Recipes from "./subcomponents/Recipes"

const Home = ({recipes}) => {
  return (
    <>
    <HeroSection/>
    <Recipes recipes={recipes} />   {/* props drilling*/}
    </>
  )
}

export default Home