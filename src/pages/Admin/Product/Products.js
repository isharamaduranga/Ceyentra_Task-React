import React from 'react';
import Layout from "../../../Layout/Layout";
import AdminMenu from "../../../Layout/adminmenu/AdminMenu";
import {Link} from "react-router-dom";
import useProduct from "../../../hooks/useProduct";

const MyComponent = () => {

    const products = useProduct();

    return (<Layout title={"All Products - E-Commerce "}>
            <div className="container-fluid  p-3">
                <div className="row">
                    <div className="col-md-3" style={{minHeight: '78vh'}}>
                        <AdminMenu/>
                    </div>

                    <div className="col-md-9" style={{borderLeft: '1px solid gray'}}>

                        <h1 className='text-center'>All Products List</h1>
                        <hr/>
                        <div className="d-flex flex-wrap justify-content-center gap-2">
                            {products?.map(p => (<Link
                                    key={p.id}
                                    to={`/home/admin/products/${p.id}`}
                                    className='product_link'
                                >
                                    <div key={p.id} className="card m-2 border  shadow border-info rounded-5"
                                         style={{width: '18rem', height: '25rem'}}>

                                        <img src={p.image}
                                             className="card-img-top mt-2"
                                             alt={p.title}
                                             style={{
                                                 height:'11rem',
                                                 width:'13rem',
                                                 margin:'auto'
                                        }}
                                        />
                                        <hr className={'m-2'}/>
                                        <div className="card-body">
                                            <h5 className="card-text">{p.title.substring(0, 25)}</h5>
                                            <small className="card-text">{p.description.substring(0, 55)}</small>
                                            <br/>
                                            <h1 className="card-text badge badge-pill badge-danger mt-2 fs-5">{`${p.price} $`}</h1>
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
