import React from 'react'
import Herosection from '../Components/Home/Herosection/Herosection';
import Aboutus from '../Components/Home/Aboutus/Aboutus';
import Essentials from '../Components/Home/Essentials/Essentials';
import Greenpass from '../Components/Home/Greenpass/Greenpass';
import Faciliteis from '../Components/Home/Faciliteis/Faciliteis';
import Imagegallery from '../Components/Home/Imagegallery/Imagegallery';
import Header from '../Components/Header/Header';
import Footer from '../Components/Footer/Footer';

const Home = () => {
  return (
    <div className='homeSection'>
          <Header />
          <Herosection />
          <Aboutus />
          <Faciliteis />
          {/* <Pricing /> */}
          <Essentials />
          <Greenpass />
          <Imagegallery />
          <Footer />
    </div>
  )
}

export default Home;