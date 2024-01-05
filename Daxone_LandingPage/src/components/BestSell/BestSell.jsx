import React from 'react'
import Product_Cnt from '../AllProducts/Product_Cnt'
import BestSell_Items from './BestSell_Items'

const BestSell = () => {
  return (
    <div className='SellingItems'>
      <Product_Cnt heading="Best Sell"/>
      <BestSell_Items/>
    </div>
  )
}

export default BestSell
