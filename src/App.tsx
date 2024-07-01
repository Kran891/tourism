import React from 'react';
import logo from './logo.svg';
import './App.css';
import Footer from './Components/GlobalComponents/footer';
import Header from './Components/GlobalComponents/header';
import Carousel from './Components/GlobalComponents/bannercourse';
import { FaWhatsapp } from "react-icons/fa";
import FixedLinks from './Components/Homepage/fixed-links';
import Card from './Components/Homepage/city-card';
import CityCards from './Components/Homepage/city-cards';
import { CITYIMAGES } from './constansts/cities-const';

function App() {
  return (
    <div className='relative'>
     <Carousel />
      {/* <Header /> */}
      <Card heading='Top Cities to Visit' description='Experience the thrill of discovering off-the-beaten-path gems and famous landmarks in top destinations worldwide - your wanderlust awaits!' Card={CityCards} data={CITYIMAGES}/>
      <Footer />
      <FixedLinks />
</div>
  );
}

export default App;
