import React from 'react'
import img1 from '../../assets/images/pro-hm1-1.jpg'
import img2 from '../../assets/images/pro-hm1-2.jpg'
import img3 from '../../assets/images/pro-hm1-3.jpg'
import img4 from '../../assets/images/pro-hm1-4.jpg'
import Carts from '../AllProducts/Carts'

const BestSell_Items = () => {
    const arr = [
        {
            img: img1,
            category: "chair",
            heading: "Golden East Spot Chair",
            price: "$210",
            oldPrice: ""
        },
        {
            img: img2,
            category: "chair",
            heading: "Golden East Spot Chair",
            price: "$220",
            oldPrice: "$280"
        },
        {
            img: img3,
            category: "chair",
            heading: "Golden East Spot Chair",
            price: "$215",
            oldPrice: "$270"
        },
        {
            img: img4,
            category: "chair",
            heading: "Golden East Spot Chair",
            price: "$225",
            oldPrice: "$285"
        },
    ]
  return (
    <div className='CartItems container'>
    <Carts arr={arr}/>
  </div>
  )
}

export default BestSell_Items;
