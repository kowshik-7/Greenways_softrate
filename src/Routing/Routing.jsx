import React from 'react'
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Home from '../Pages/Home';
import About from '../Pages/About';
import Contact from '../Pages/Contact';
import Blog from '../Pages/Blog';
import Blog1 from '../Components/Blogs/Blog1';
import Referal from '../Pages/Referal';
import Virtualoffice from '../Pages/Virtualoffice';

const Routing = () => {
  return (
    <div>    
        <Router >
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About />}/>
                <Route path="/referal" element={<Referal />} />
                <Route path='/virtualoffice' element={<Virtualoffice />} />
                <Route path='/contact' element= {<Contact />} />
                <Route path='/blog' element={<Blog />} />
                <Route path="/blog1" element={<Blog1 />} />
            </Routes>
        </Router>
    </div>
  )
}

export default Routing;