import React from 'react'
import Bloghero from '../Blog/Bloghero/Bloghero';
import blogimg from "../../assests/images/Home/aboutimg.jpg"

const Blog1 = () => {
  return (
    <div className='Blog1'>
        <Bloghero />
        <div className="blogsContainer h-full w-11/12 mx-auto py-8 flex flex-col ">
            <div className="blogHeading h-full w-fit">
                <h1 className='text-6xl border-b  text-primary font-semibold py-2'>My First Blog Post</h1>
                <p className='text-md py-2 text-text_color font-normal'>Posted on feb 23 , 2023</p>
            </div>
            <img className='w-full h-[550px] object-cover py-2' src={blogimg} alt="" />
            {/* topic - 1 */}
            <h2 className='text-4xl font-bold text-primary border-b border-primary py-2 w-fit'>Heading: Lorem ipsum dolor sit</h2>
            <p className='text-lg pl-6 py-2'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio, nemo modi consequatur qui, aperiam blanditiis fugit illo nulla quasi veniam eum exercitationem accusantium! Ex ipsam, quis temporibus voluptate eos harum quidem placeat tempora magnam saepe tenetur odio aperiam laboriosam autem sed doloremque voluptas officia odit nostrum quisquam ipsa ratione quas!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis eos doloremque nemo perferendis quaerat deserunt! Non, quo? Unde eveniet vel quis maxime nisi! Sequi mollitia, voluptates maiores adipisci maxime unde?
            </p>
            {/* topic - 2 */}
            <h2 className='text-4xl font-bold text-primary border-b border-primary py-2 w-fit'>Heading: Lorem ipsum dolor sit</h2>
            <p className='text-lg pl-6 py-2'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio, nemo modi consequatur qui, aperiam blanditiis fugit illo nulla quasi veniam eum exercitationem accusantium! Ex ipsam, quis temporibus voluptate eos harum quidem placeat tempora magnam saepe tenetur odio aperiam laboriosam autem sed doloremque voluptas officia odit nostrum quisquam ipsa ratione quas!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis eos doloremque nemo perferendis quaerat deserunt! Non, quo? Unde eveniet vel quis maxime nisi! Sequi mollitia, voluptates maiores adipisci maxime unde?
            </p>
            {/* topic - 3 */}
            <h2 className='text-4xl font-bold text-primary border-b border-primary py-2 w-fit'>Heading: Lorem ipsum dolor sit</h2>
            <p className='text-lg pl-6 py-2'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio, nemo modi consequatur qui, aperiam blanditiis fugit illo nulla quasi veniam eum exercitationem accusantium! Ex ipsam, quis temporibus voluptate eos harum quidem placeat tempora magnam saepe tenetur odio aperiam laboriosam autem sed doloremque voluptas officia odit nostrum quisquam ipsa ratione quas!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis eos doloremque nemo perferendis quaerat deserunt! Non, quo? Unde eveniet vel quis maxime nisi! Sequi mollitia, voluptates maiores adipisci maxime unde?
            </p>
            {/* topic - 4 */}
            <h2 className='text-4xl font-bold text-primary border-b border-primary py-2 w-fit'>Heading: Lorem ipsum dolor sit</h2>
            <p className='text-lg pl-6 py-2'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio, nemo modi consequatur qui, aperiam blanditiis fugit illo nulla quasi veniam eum exercitationem accusantium! Ex ipsam, quis temporibus voluptate eos harum quidem placeat tempora magnam saepe tenetur odio aperiam laboriosam autem sed doloremque voluptas officia odit nostrum quisquam ipsa ratione quas!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis eos doloremque nemo perferendis quaerat deserunt! Non, quo? Unde eveniet vel quis maxime nisi! Sequi mollitia, voluptates maiores adipisci maxime unde?
            </p>
        </div>
    </div>
  )
}

export default Blog1;