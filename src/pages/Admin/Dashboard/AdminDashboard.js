import React, { useState, useEffect } from 'react';
import Layout from "../../../Layout/Layout";
import AdminMenu from "../../../Layout/adminmenu/AdminMenu";
import { useAuth } from "../../../context/AuthContext";
import admBg from '../../../assets/admin_dash_bg.jpg';

const AdminDashboard = () => {
    const [auth] = useAuth();
    const [currentDate, setCurrentDate] = useState(new Date());

    // Function to update the current date and time
    const updateCurrentDate = () => {
        setCurrentDate(new Date());
    };

    // Update the current date and time every second (1000ms)
    useEffect(() => {
        const intervalId = setInterval(updateCurrentDate, 1000);

        // Clean up the interval on component unmount to avoid memory leaks
        return () => clearInterval(intervalId);
    }, []);

    return (
        <Layout title={"Admin Dashboard - Ecommerce"}>
            <div className="container-fluid p-3">
                <div className="row">
                    <div className="col-md-3" style={{ height: '78vh', borderRight: '1px solid gray' }}>
                        <AdminMenu />
                    </div>
                    <div className="col-md-9 p-3">
                        <div className="card shadow-lg p-4">
                            <div className="card-body text-center bg-secondary rounded-5 text-light">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="bg-dark rounded-5 ms-5 me-5 p-3">
                                            <h2 className="card-title text-success">Today's Date</h2>
                                            <h4 className="card-text">{currentDate.toDateString()}</h4>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="bg-dark rounded-5 ms-5 me-5 p-3">
                                        <h2 className="card-title text-danger">Live Time</h2>
                                        <h4 className="card-text">{currentDate.toLocaleTimeString()}</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <img
                                src={admBg}
                                alt={'admin_background'}
                                className={'pt-2 rounded-5 object-fit-cover'}
                                style={{ height: '45vh' }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default AdminDashboard;
