import React from 'react';
import logo from './logo.svg';
import './App.css';
import Footer from './Components/GlobalComponents/footer';
import Header from './Components/GlobalComponents/header';
import Carousel from './Components/GlobalComponents/bannercourse';
import { FaWhatsapp } from "react-icons/fa";
import FixedLinks from './Components/Homepage/fixed-links';
import Card from './Components/Homepage/city-card';

function App() {
  return (
    <div className='relative'>
     <Carousel />
      {/* <Header /> */}
      <Card />
      <Footer />
      <FixedLinks />
</div>
  );
}

export default App;
