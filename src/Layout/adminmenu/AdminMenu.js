import React from 'react';
import {NavLink} from "react-router-dom";

const AdminMenu = () => {
    return (
        <>
            <div className='text-center'>
                <div className="list-group pt-5 pe-3 ps-3">
                    <h4>Admin Panel</h4>
                    <NavLink to="/home/create-category" className="list-group-item list-group-item-action">Create
                        Category</NavLink>
                    <NavLink to="/home/create-product" className="list-group-item list-group-item-action">Create
                        Product</NavLink>
                    <NavLink to="/home/products" className="list-group-item list-group-item-action">
                        Products</NavLink>
                    <NavLink to="/home/users" className="list-group-item list-group-item-action">Users</NavLink>
                </div>
            </div>
        </>
    );
};

export default AdminMenu;
