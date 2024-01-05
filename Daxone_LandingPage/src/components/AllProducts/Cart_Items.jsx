import React from 'react'
import Carts from './Carts'
import img1 from '../../assets/images/pro-hm1-1.jpg'
import img2 from '../../assets/images/pro-hm1-2.jpg'
import img3 from '../../assets/images/pro-hm1-3.jpg'
import img4 from '../../assets/images/pro-hm1-4.jpg'
import img5 from '../../assets/images/pro-hm1-5.jpg'
import img6 from '../../assets/images/pro-hm1-6.jpg'
import img7 from '../../assets/images/pro-hm1-7.jpg'
import img8 from '../../assets/images/pro-hm1-8.jpg'

const Cart_Items = () => {
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
        {
            img: img5,
            category: "chair",
            heading: "Golden East Spot Chair",
            price: "$250",
            oldPrice: "$300"
        },
        {
            img: img6,
            category: "chair",
            heading: "Golden East Spot Chair",
            price: "$280",
            oldPrice: "220"
        },
        {
            img: img7,
            category: "chair",
            heading: "Golden East Spot Chair",
            price: "$290",
            oldPrice: "$230"
        },
        {
            img: img8,
            category: "chair",
            heading: "Golden East Spot Chair",
            price: "$210",
            oldPrice: "$180"
        },
    ]
  return (
    <div className='CartItems container'>
      <Carts arr={arr}/>
    </div>
  )
}

export default Cart_Items
