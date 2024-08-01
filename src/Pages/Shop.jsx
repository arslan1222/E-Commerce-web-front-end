import React from 'react'
import Hero from "../Components/Hero/Hero";
import Papular from '../Components/Papular/Papular';
import { Offer } from '../Components/Offers/Offer';
import { NewCollections } from '../Components/NewCollections/NewCollections';
import { NewsLetter } from '../Components/NewsLetter/NewsLetter';
import Footer from '../Components/Footer/Footer'
export const Shop = () => {
  return (
    <div>
      <Hero />
      <Papular />
      <Offer />
      <NewCollections />
      <NewsLetter/>
    </div>
  )
}

export default Shop;
