import React from 'react';
import { Link } from 'react-router-dom';
import useCategory from '../../hooks/useCategory';
import categoryBg from '../../assets/category.png';
import Layout from '../../Layout/Layout';

const Categories = () => {
    const categories = useCategory();

    return (
        <Layout title={'All Categories'}>
            <div className="container">
                <h1 className={'text-center pt-5'}>All Categories</h1>
                <hr/>
                <div className="d-flex justify-content-center flex-wrap ">
                    {categories.map((category, index) => (
                        <div key={index} className="mt-5 mb-3 mx-3" style={{ flexBasis: '15rem' }}>
                            <Link to={`/home/admin/category/${category}`}>
                                <div className="card border border-info shadow" style={{ height: '15rem' }}>
                                    <img
                                        src={categoryBg}
                                        className="card-img-top"
                                        alt={category}
                                        style={{ margin: 'auto', width: '150px' }}
                                    />
                                    <hr className={'m-2'} />
                                    <div className="card-body">
                                        <h6 className={'text-center text-uppercase'}>{category}</h6>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </Layout>
    );
};

export default Categories;
