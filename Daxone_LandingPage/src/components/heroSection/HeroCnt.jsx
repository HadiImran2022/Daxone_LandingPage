import React from 'react'
import Button from './Button'

const HeroCnt = () => {
  return (
    <>
    <div className='d-flex flex-column align-items-center justify-content-center'>
      <h1 className='mb-5' style={{fontSize: "40px"}}>30% off</h1>
      <h1 className='mb-5 display-3 text-bold' >Comfort Chair</h1>
      <p className='mb-5 fs-4' >Collect from Daxone & get 30% Discount.</p>
      <Button/>
    </div>
    </>
  )
}

export default HeroCnt
