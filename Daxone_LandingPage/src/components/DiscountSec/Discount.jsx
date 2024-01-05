import React from 'react'
import Button from '../heroSection/Button'

const Discount = () => {
  return (
    <>
    <div className='d-flex align-items-center justify-content-center mt-5 pt-5 pb-5'>
        <div className="Discount_Img"></div>
        <div className="Discount_Space"></div>
        <div className="m-3 p-5">
        <p className='pb-3 text-muted fs-6' style={{maxWidth:300}}>Lorem Ipsum is simply dummy text of the 
                printing and typesetting industry.</p>
                <h1 className='pt-3 pb-3 fs-2 fw-bold'>Winter Discount <br />Up to 30%</h1>
                <p className='pt-3 pb-3 fs-6 text-muted' style={{maxWidth:400}}>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                <Button/>
        </div>
    </div>
    </>
  )
}

export default Discount
