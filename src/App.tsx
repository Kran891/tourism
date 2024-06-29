import React from 'react';
import logo from './logo.svg';
import './App.css';
import Footer from './Components/GlobalComponents/footer';
import Header from './Components/GlobalComponents/header';
import Carousel from './Components/GlobalComponents/bannercourse';

function App() {
  return (
    <>
     <Carousel />
      <Header />
      
      <Footer />
    </>
  );
}

export default App;
