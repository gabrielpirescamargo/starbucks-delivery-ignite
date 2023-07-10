import React from 'react'
import List from '../../components/Products/List'
import Hero from '../../components/Hero/Hero'
import './Products.css'

const Product = () => {
  return (
    <div>
      <Hero/>
      <div className='productsHeader'>
      <h2 className='nossoscafes'>
        Nossos cafés
      </h2>
      <List />
    </div>
    </div>
  )
}

export default Product
