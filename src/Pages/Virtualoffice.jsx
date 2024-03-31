import React from 'react'
import Virtualhero from '../Components/Virtualoffice/Virtualhero/Virtualhero';
import Aboutvirtual from '../Components/Virtualoffice/Aboutvirtual/Aboutvirtual';
import Virtualcard from '../Components/Virtualoffice/Virtualcard/Virtualcard';

const Virtualoffice = () => {
  return (
    <div className='Virtualoffice'>
        <Virtualhero />
        <Aboutvirtual />
        <Virtualcard />
    </div>
  )
}

export default Virtualoffice;