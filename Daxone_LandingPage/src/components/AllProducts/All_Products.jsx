import React from 'react'
import Product_Cnt from './Product_Cnt';
import Cart_Items from './Cart_Items';

const All_Products = () => {
  return (
    <div>
      <Product_Cnt heading="All Product"/>
      <Cart_Items/>
    </div>
  )
}

export default All_Products;
