import React from 'react';
import Layout from "../../Layout/Layout";
import {useNavigate, useParams} from "react-router-dom";
import {useState,useEffect} from "react";
import {getByCategory} from "../../services/category";

const CategoryProduct = () =>{
    const navigate=useNavigate();
    const params = useParams();
    const[product,setProduct]=useState([]);
    const[category,setCategory]=useState([]);

    const getProductsByCategory = async () => {
        try {
            const data = await getByCategory(params.id);
            setProduct(data)
            setCategory(data[0].category)

        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        if (params.id) getProductsByCategory();
    }, [params.id]);

        return (
            <Layout>
                <div className="container mt-3">
                    <h1 className={'text-center'}>Category - {category}</h1>
                    <h5 className={'text-center'}>{product?.length} results Found...😍</h5>
                    <hr/>
                    <div className="d-flex flex-wrap justify-content-center gap-2">
                        {product?.map(p => (
                            <div key={p.id} className="card m-2 border  shadow border-info rounded-5"
                                 style={{width: '18rem', height: '27rem'}}>

                                <img src={p.image}
                                     className="card-img-top img-thumbnail   mt-2"
                                     alt={p.title}
                                     style={{height:'12rem',width:'max-content',margin:'auto'}}
                                />
                                <hr className={'m-2'}/>
                                <div className="card-body">
                                    <h5 className="card-text">{p.title.substring(0, 20)}</h5>
                                    <small className="card-text">{p.description.substring(0, 45)}</small>
                                    <br/>
                                    <h1 className="card-text badge badge-pill badge-danger mt-2 fs-5">{`${p.price} $`}</h1>


                                    <div className={'pt-2'}>
                                        <button
                                            className="btn btn-info btn-sm me-1"
                                            onClick={()=>{
                                                navigate(`/home/admin/product/${p.id}`);
                                            }}
                                        >More Details
                                        </button>

                                        <button
                                            className="btn btn-primary btn-sm ms-1"
                                            onClick={()=> {
                                                /*  setCart([...cart,p])
                                                  //Create & set Cart items to save in local Storage using JSON Array format
                                                  localStorage.setItem('cart',JSON.stringify([...cart,p]));

                                                  toast.success('Item Added to Cart ✅')*/
                                            }}
                                        >
                                            Add To Cart
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </Layout>
        );
}

export default CategoryProduct;