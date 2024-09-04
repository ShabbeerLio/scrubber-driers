import React from 'react'
import "./Products.css"
import PageBanner from '../../Component/PageBanner/PageBanner'

const Products = ({ item }) => {
    return (
        <div className='Products'>
            <PageBanner banner={item.cover} title={item.title} />
            <div className='Products-main'>
                <div className='Products-box'>
                    {item.products.map((j) => (
                        <div className='Products-card'>
                            <img src={j.cover} alt="" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Products
