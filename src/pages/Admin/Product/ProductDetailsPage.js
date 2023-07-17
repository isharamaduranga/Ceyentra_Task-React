import React, {useEffect, useState} from 'react';
import Layout from "../../../Layout/Layout";
import {getSingleProduct} from "../../../services/product";
import {useNavigate, useParams} from "react-router-dom";
import {Rate} from 'antd';

const ProductDetails = () => {
    const navigate = useNavigate();
    const params = useParams();
    const [product, setProduct] = useState([]);
    /** Get Single Product using product_Id */
    const fetchSingleProducts = async () => {

        try {
            const product = await getSingleProduct(params.id);
            setProduct(product);

        } catch (error) {
            console.error('Error getting product: ', error.message);
        }
    }

    useEffect(() => {
        fetchSingleProducts();
        // eslint-disable-next-line
    }, []);


    return (
        <Layout>
            <h1 className='text-center pt-3 '>Product Details</h1>
            <hr/>
            <div className="d-flex align-items-center justify-content-center ">
                <div className=" p-4  shadow-lg border border-1 border-secondary rounded-5"
                     style={{width: '65vw'}}
                >
                    <div className="row pe-4 ps-5 ">
                        <div className="col-md-4 p-5 mt-3 mb-3 border border-1 border-info rounded-5">
                            <img src={`${product.image}`}
                                 className="card-img-top"
                                 alt={`${product.title}`}
                            />
                        </div>
                        <div className="col-md-8 mt-3 ps-5">
                            <h6 className='pt-4'>
                                <span className='text-warning'>Name : </span>{`${product.title}`}
                            </h6>
                            <h6 className='pt-4'>
                                <span className='text-warning'>Description : </span>{`${product.description}`}
                            </h6>
                            <h6 className='pt-4'>
                                <span className='text-warning'>Price : </span>{`${product.price} $`}
                            </h6>
                            <h6 className='pt-4'>
                                <span className='text-warning'>Category : </span>{`${product?.category}`}
                            </h6>

                            <h6 className='pt-4'>
                            <span className='text-warning'>Ratings :
                                {
                                    <Rate allowHalf defaultValue={`${product?.rating?.rate}`}/>
                                }
                                {`  ${product?.rating?.rate}`}
                            </span>
                                <div>
                                    <button className='btn btn-success m-auto mt-5 w-50'>ADD TO CART</button>
                                </div>
                            </h6>
                        </div>

                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default ProductDetails;
