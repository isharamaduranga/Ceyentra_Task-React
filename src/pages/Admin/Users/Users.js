import React from 'react';
import Layout from "../../../Layout/Layout";
import AdminMenu from "../../../Layout/adminmenu/AdminMenu";

const Users = () => {
    return (
        <Layout title={'All Users - E-Commerce'}>
            <div className="container-fluid  p-3">
                <div className="row">
                    <div className="col-md-3"  style={{ minHeight: '78vh' }}>
                        <AdminMenu/>
                    </div>

                    <div className="col-md-9" style={{ borderLeft: '1px solid gray' }}>
                        <h2> All Users Page ...</h2>
                    </div>
                </div>
            </div>

        </Layout>
    );
};

export default Users;
