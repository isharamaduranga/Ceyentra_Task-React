import React from 'react';
import Layout from "../../../Layout/Layout";
import AdminMenu from "../../../Layout/adminmenu/AdminMenu";

const Category = () => {
    return (<Layout title={"Categories - E-Commerce"}>
            <div className="container-fluid  p-3">
                <div className="row">
                    <div className="col-md-3" style={{height: '78vh', borderRight: '1px solid gray'}}>
                        <AdminMenu/>
                    </div>

                    <div className="col-md-9">
                        <h2>All Categories page</h2>
                    </div>
                </div>
            </div>
        </Layout>);
};

export default Category;
