import Cards from './components/cards/Cards'
import Carousels from './components/carousals/Carousels'
import React from 'react'
import Features from './components/features/Features'
import Footer from './comman/footer/Footer'
import MultiCarousel from './components/carousals/MultiCarousel'
import HomeSearch from './components/homeSearch/HomeSearch'
import SelectedCategory from './components/selectedCategory/SelectedCategory'
import AccordionAndCard from './components/AccordionAndCard/accordionAndCard'

function Home() {
  return (
    <div> 
      {/* <AccordionAndCard></AccordionAndCard> */}
      {/* <SelectedCategory></SelectedCategory> */}
      <Carousels></Carousels>
      <Cards></Cards>
      <Features></Features>
      <MultiCarousel></MultiCarousel>
      <Footer></Footer>
      
    </div>
  )
}

export default Home
