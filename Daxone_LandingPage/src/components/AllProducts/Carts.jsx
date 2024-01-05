import React from 'react'

const Carts = ({arr}) => {
    console.log(arr)
  return (
    <>
        {
            arr.map((item,index)=>{
                // console.log(item)
                const {img,category,heading,price,oldPrice} = item;
                return(
                    <div key={index} className='Carts mt-5'>
                        <img src={img} alt="" width={300} height={250}/>
                        <p>{category}</p>
                        <p>{heading}</p>
                        <p>{price} <span style={{textDecoration: "line-through"}} className='text-muted ps-3'>{oldPrice}</span></p>
                    </div>
                )
            })
        }
    </>
  )
}

export default Carts;
