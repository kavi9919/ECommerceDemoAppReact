import React from 'react'
import Product from './Product'
import NavBar from '../Components/NavBar';
import ImageUploader from '../Components/ImageUploader';
const LandingPage = () => {
  return (
    <div>
        <NavBar/>
        <Product/>
        {/* <ImageUploader/> */}
    </div>
  )
}

export default LandingPage