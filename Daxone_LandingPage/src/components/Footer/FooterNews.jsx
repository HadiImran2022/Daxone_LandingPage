import React from 'react'
import Footer_Icon from '../../assets/images/footer-search.png'

const FooterNews = ({list_heading}) => {
  return (
    <div>
      <h5 className='fs-5 text-dark' style={{fontWeight: "500"}}>{list_heading}</h5>
      <p style={{fontWeight: "500"}} className="pb-5 pt-5">Subscribe to get all new updates</p>
      <input className='FooterInp' placeholder='Enter your email' type="text" /> <img className='Footer_Icon' src={Footer_Icon} alt="" /> 
    </div>
  )
}

export default FooterNews
