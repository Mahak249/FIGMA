import React from 'react'
import Navbar from './components/navbar'
import Header from './components/header'
import Footer from './components/footer'
import Products from './components/product'
import Shoes from './components/shoes'
import Shoes3 from './components/shoes3'
import Shoes2 from './components/shoes2'
import Hero from './components/hero'
import Sidebar from './components/Sidebar'
import Product from './components/product'







const page = () => {
  return ( 
    <div >
      <Navbar/>
      <Header/>
      <Hero/>
      <Sidebar/>

      <Shoes3/>

      <Shoes/>
      <Shoes2/>
      <Product/>
  
      <Footer/>

      
    </div>
  
  )
}

export default page