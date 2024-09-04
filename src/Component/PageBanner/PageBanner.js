import React from 'react'
import "./PageBanner.css"

const PageBanner = ({ banner ,title}) => {
    return (
        <div className='PageBanner'>
            <img src={banner} alt="" />
            <h1>{title}</h1>
        </div>
    )
}

export default PageBanner
