import React from 'react'
import FooterImg from './FooterImg'
import FooterItems from './FooterItems'
import FooterNews from './FooterNews'

const Footer = () => {
  return (
    <>
    <div className='Footer'>
      <FooterImg/>
      <FooterItems list={["Shopping Cart", "Wishlist", "Checkout", "Support"]} list_heading="USEFUL LINK"/>
      <FooterItems list={["About", "Products", "Terms and conditions", "Help Center"]} list_heading="ABOUT US"/>
      {/* <FooterItems list="Subscribe to get all new updates" list_heading="ABOUT US"/> */}
      <FooterNews list_heading="NEWSLETTER"/>
    </div>
    </>
  )
}

export default Footer
