import React from 'react'

const FooterItems = ({list,list_heading}) => {
  return (
    <div>
      <ul className='FooterUL'>
        <h5 style={{fontWeight: "500"}} className='fs-5 pb-4 text-dark'>{list_heading}</h5>
        {
            list.map((items,index)=>{
                return(
                    <li className='text-muted' style={{padding: "6px 0px", fontWeight: "500"}} key={index}>{items}</li>
                )
            })
        }
      </ul>
    </div>
  )
}

export default FooterItems
