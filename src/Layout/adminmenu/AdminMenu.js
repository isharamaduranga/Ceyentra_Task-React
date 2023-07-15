import React from 'react';
import {NavLink} from "react-router-dom";

const AdminMenu = () => {
    return (
        <>
            <div className='text-center'>
                <div className="list-group pt-5 pe-3 ps-3">
                    <h4>Admin Panel</h4>
                    <NavLink to="/home/admin/get-category" className="list-group-item list-group-item-action">
                        Categories</NavLink>
                    <NavLink to="/home/admin/create-product" className="list-group-item list-group-item-action">Create
                        Product</NavLink>
                    <NavLink to="/home/admin/products" className="list-group-item list-group-item-action">
                        Products</NavLink>
                    <NavLink to="/home/admin/users" className="list-group-item list-group-item-action">Users</NavLink>
                </div>
            </div>
        </>
    );
};

export default AdminMenu;
