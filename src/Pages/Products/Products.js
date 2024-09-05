import React, { useEffect, useState } from 'react';
import './Products.css';
import PageBanner from '../../Component/PageBanner/PageBanner';
import Table from '../../Component/Table/Table';
import CallAction from '../../Component/CallAction/CallAction';
import FAQs from '../../Component/Work/FAQs';

const Products = ({ item }) => {
    const [data, setData] = useState(null);

    useEffect(() => {
        setData(null);

        if (item) {
            setData(item);
        }
    }, [item]);

    return (
        <>
            <div className='Products'>
                {data && (
                    <>
                        <PageBanner banner={data.cover} title={data.title} desc={data.description} />
                        <div className='Products-main'>
                            <div className='Products-box'>
                                {/* <p>{data.description}</p> */}
                                {data.products.map((j) => (
                                    <div key={j.id} className='Products-item'>
                                        <div className='Products-card'>
                                            <img src={j.cover} alt="" />
                                        </div>
                                        <div className="product-detail">
                                            <Table item={j} />
                                        </div>
                                    </div>
                                ))}
                                <div className="product-faq">
                                    <FAQs />
                                </div>
                            </div>
                        </div>
                    </>
                )}
            </div>
            <CallAction />
        </>
    );
}

export default Products;
