import React, { useEffect, useState } from 'react';
import Layout from "../../../Layout/Layout";
import AdminMenu from "../../../Layout/adminmenu/AdminMenu";
import {getByCategory } from "../../../services/category";
import { Link } from "react-router-dom";

import categoryBg from '../../../assets/category.png'
import useCategory from "../../../hooks/useCategory";
const Category = () => {
    const categories = useCategory();
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [categoryData, setCategoryData] = useState([]);



    const handleCategoryClick = async (category) => {
        setSelectedCategory(category);
        try {
            const response = await getByCategory(category);
            setCategoryData(response);
        } catch (error) {
            console.error(`Error fetching data for category '${category}':`, error);
        }
    };

    return (
        <Layout title={"Categories - E-Commerce"}>
            <div className="container-fluid p-3">
                <div className="row">
                    <div className="col-md-3" style={{ minHeight: '78vh' }}>
                        <AdminMenu />
                    </div>

                    <div className="col-md-9" style={{ borderLeft: '1px solid gray' }}>
                        <h2 className={'text-center pt-5'}>All Categories page</h2>
                        <hr/>
                        <div className="d-flex flex-row justify-content-evenly flex-wrap">
                        {categories.map(category => (
                            <div key={category} className=" mt-5 mb-5 gx-3 gy-3 ">
                                <Link onClick={() => handleCategoryClick(category)}>
                                    <div className="card border border-info shadow " style={{width: '15rem',height:'15rem'}}>
                                        <img src={categoryBg}
                                             className="card-img-top"
                                             alt={category}
                                             style={{margin:"auto", width:'150px'}}
                                        />
                                        <hr className={'m-2'}/>
                                        <div className="card-body">
                                            <h6 className={'text-center text-uppercase'}>{category}</h6>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        ))}
                        </div>

                        <hr/>
                        {selectedCategory && (
                            <>
                                <h2 className={'text-center'}>{selectedCategory} Category</h2>

                                <div className="d-flex flex-wrap justify-content-center gap-4">
                                    {categoryData.map(item => (
                                        <div key={item.id} className="card m-2 border border-1 shadow border-warning" style={{ width: '20rem', height: '28rem' }}>
                                            <img src={item.image}
                                                 className="card-img-top img-thumbnail object-fit-cover img-fluid"
                                                 alt={item.id}
                                                 style={{ height: '15rem' }}
                                            />
                                            <div className="card-body">
                                                <h5 className="card-title">{item.title.substring(0, 20)}</h5>
                                                <p className="card-text">{item.description.substring(0, 80)}</p>
                                                <h3 className={'p-2 badge badge-pill badge-danger fs-5'}>{`${item.price} $`}</h3>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Category;
