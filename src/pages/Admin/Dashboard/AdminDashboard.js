import React from 'react';
import Layout from "../../../Layout/Layout";
import AdminMenu from "../../../Layout/adminmenu/AdminMenu";
import {useAuth} from "../../../context/AuthContext";
import admBg from '../../../assets/admin_dash_bg.jpg'
const AdminDashboard = () => {
    const[auth]= useAuth();
    return (
        <Layout title={"Admin Dashboard - Ecommerce"}>
            <div className="container-fluid  p-3">
                    <div className="row">
                        <div className="col-md-3" style={{height:'78vh',borderRight:'1px solid gray'}}>
                            <AdminMenu/>
                        </div>
                        <div className="col-md-9 p-3">
                            <div className="card shadow-lg p-5 ">
                                <img
                                src={admBg}
                                alt={'admin_background'}
                                className={'rounded-5 object-fit-contain'}
                                />
                            </div>
                        </div>
                    </div>
            </div>
        </Layout>
    );
};

export default AdminDashboard;
