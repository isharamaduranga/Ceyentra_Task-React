import React from 'react';
import Layout from "../../Layout/Layout";
import AdminMenu from "../../Layout/adminmenu/AdminMenu";
import {useAuth} from "../../context/AuthContext";

const AdminDashboard = () => {
    const[auth]= useAuth();
    return (
        <Layout title={"Admin Dashboard - Ecommerce"}>
            <div className="container-fluid  p-3">
                    <div className="row">
                        <div className="col-md-3" style={{height:'78vh',borderRight:'1px solid gray'}}>
                            <AdminMenu/>
                        </div>
                        <div className="col-md-9">
                            <div className="card w-75 p-3">
                                <h3>Admin Name{auth?.token}</h3>
                            </div>
                        </div>
                    </div>
            </div>
        </Layout>
    );
};

export default AdminDashboard;
