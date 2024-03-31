import React from 'react'
import Bloghero from '../Components/Blog/Bloghero/Bloghero';
import Blogcontainer from '../Components/Blog/Blogcontainer/Blogcontainer';

const Blog = () => {
  return (
    <div className='blog'>
         <Bloghero />
         <Blogcontainer />
    </div>
  )
}

export default Blog;