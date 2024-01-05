import React from 'react'
import FooterLinks from './FooterLinks'
import Logo from '../navbar/Logo'

const FooterImg = () => {
  return (
    <div>
      <Logo/>
      <p className='pt-4 pb-4 fs-5 text-muted'>Follow us:</p>
      <FooterLinks/>
    </div>
  )
}

export default FooterImg
