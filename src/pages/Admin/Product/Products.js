import React, {useEffect, useState} from 'react';
import Layout from "../../../Layout/Layout";
import AdminMenu from "../../../Layout/adminmenu/AdminMenu";
import {getAllProducts} from "../../../services/product";
import {Link} from "react-router-dom";

const MyComponent = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetchProducts();
    },[])

    const fetchProducts = async () => {
        try {
            const data = await getAllProducts();
            setProducts(data)
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    }


    return (<Layout title={"All Products - E-Commerce "}>
            <div className="container-fluid  p-3">
                <div className="row">
                    <div className="col-md-3" style={{minHeight: '78vh'}}>
                        <AdminMenu/>
                    </div>

                    <div className="col-md-9" style={{borderLeft: '1px solid gray'}}>

                        <h1 className='text-center'>All Products List</h1>
                        <hr/>
                        <div className="d-flex flex-wrap justify-content-center gap-4">
                            {products?.map(p => (<Link
                                    key={p.id}
                                    to={`/home/admin/products/${p.id}`}
                                    className='product_link'
                                >
                                    <div key={p.id} className="card m-2 border border-1 shadow border-info rounded-5"
                                         style={{width: '20rem', height: '25rem'}}>

                                        <img src={p.image}
                                             className="card-img-top img-thumbnail object-fit-cover img-fluid"
                                             alt={p.title}
                                             style={{height: '13rem'}}
                                        />
                                        <hr className={'m-2'}/>
                                        <div className="card-body">
                                            <h5 className="card-text">{p.title.substring(0, 25)}</h5>
                                            <p className="card-text">{p.description.substring(0, 55)}</p>
                                            <h1 className="card-text badge badge-pill badge-danger fs-5">{`${p.price} $`}</h1>
                                        </div>
                                    </div>
                                </Link>))}
                        </div>


                    </div>
                </div>
            </div>
        </Layout>);
};

export default MyComponent;
