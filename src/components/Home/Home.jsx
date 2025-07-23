import React from 'react'
import Hero from '../Hero/Hero'
import HdProducts from '../../Pages/HdProducts'
import PopularProducts from '../PopularProducts/PopularProducts'
import Collection from '../Collection/Collection'
import Products from '../Products/Products'
import OfferSection from '../OfferSection/OfferSection'
import Marquee from '../Maquee/Marquee'


const Home = () => {
  return (
    <>
      <Hero />
      <Marquee/>
      <Products />
      <PopularProducts />
      <Collection />
      <OfferSection />
      {/* <Newsletter /> */}
      </>
  )
}
export default Home
