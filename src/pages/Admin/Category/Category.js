import React, { useEffect, useState } from 'react';
import Layout from "../../../Layout/Layout";
import AdminMenu from "../../../Layout/adminmenu/AdminMenu";
import { getCategories, getByCategory } from "../../../services/category";
import { Link } from "react-router-dom";

import categoryBg from '../../../assets/category.png'
const Category = () => {
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [categoryData, setCategoryData] = useState([]);

    useEffect(() => {
        fetchCategories();
    }, []);

    const fetchCategories = async () => {
        try {
            const response = await getCategories();
            setCategories(response);
        } catch (error) {
            console.error('Error fetching categories:', error);
        }
    };

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
                        <h2 className={'text-center'}>All Categories page</h2>

                        <div className="d-flex flex-row justify-content-evenly flex-wrap">
                        {categories.map(category => (
                            <div key={category} className=" mt-3 mb-3 gx-3 gy-3 ">
                                <Link onClick={() => handleCategoryClick(category)}>
                                    <div className="card border border-info shadow " style={{width: '15rem',height:'15rem'}}>
                                        <img src={categoryBg} className="card-img-top" alt={category} style={{margin:"auto", width:'150px'}}/>
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
                                <h2>{selectedCategory} Category</h2>
                                {/* Render the category data here */}
                                {categoryData.map(item => (
                                    <div key={item.id}>
                                        <h4>{item.title}</h4>
                                        <p>{item.description}</p>
                                        <img src={item.image} alt={item.category} />
                                    </div>
                                ))}
                            </>
                        )}
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Category;
