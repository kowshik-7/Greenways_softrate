import React from 'react'
import Contacthero from '../Components/Contact/Contacthero/Contacthero';
import Testimonial from '../Components/Home/Testimonial/Testimonial';
import Contactdeatils from '../Components/Contact/Contacthero/Contactdeatils';
import Header from '../Components/Header/Header';
import Footer from '../Components/Footer/Footer';

const Contact = () => {
  return (
    <div>
        <Header />
        <Contacthero />
        <Contactdeatils />
        <Testimonial />
        <Footer />
    </div>
  )
}

export default Contact;