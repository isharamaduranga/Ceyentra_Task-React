import React, { useEffect, useState, useCallback } from 'react';
import Layout from "../../../Layout/Layout";
import AdminMenu from "../../../Layout/adminmenu/AdminMenu";
import {deleteUser, getAllUsers} from "../../../services/users";
import {useNavigate} from "react-router-dom";
import {toast} from "react-toastify";

const Users = () => {
    const navigate=useNavigate();
    const [users, setUsers] = useState([]);
    const [userId, setUserId] = useState('');

    // Use useCallback to memoize the getAllUserList function
    const getAllUserList = useCallback(async () => {
        try {
            const data = await getAllUsers();
            setUsers(data);
        } catch (error) {
            console.error('Error fetching users:', error);
        }
    }, []);

    useEffect(() => {
        getAllUserList();
    }, [getAllUserList]);



    const handleDelete = async (userId) => {
        try {
            await deleteUser(userId) // Delete the product using its ID
            toast.success('User Deleted Successfully...');
            navigate('/home/admin'); // Navigate back to the products page
        } catch (error) {
            toast.error('Failed to delete User');
        }
    };

    return (
        <Layout title={'All Users - E-Commerce'}>
            <div className="container-fluid p-3">
                <div className="row">
                    <div className="col-md-3" style={{ minHeight: '78vh' }}>
                        <AdminMenu />
                    </div>

                    <div className="col-md-9" style={{ borderLeft: '1px solid gray' }}>
                        <h2 className={'text-center'}> All Users</h2>
                        <hr />
                        <div className='w-100'>
                            <table className="table table-sm table-hover">
                                <thead className='bg-light'>
                                <tr>
                                    <th scope="col">#No</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Phone</th>
                                    <th scope="col">Address</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Actions</th>
                                </tr>
                                </thead>
                                <tbody>
                                {users?.map((user) => (
                                    <tr key={user.id}>
                                        <td>{user.id}</td>
                                        <td>{user.name.firstname}</td>
                                        <td>{user.phone}</td>
                                        <td>{user.address.city}</td>
                                        <td>{user.email}</td>
                                        <td>
                                            <button className="btn btn-primary btn-sm ms-2">
                                                Edit
                                            </button>

                                            <button
                                                className="btn btn-danger btn-sm ms-2"
                                                onClick={() => handleDelete(user.id)}
                                            >
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

        </Layout>
    );
};

export default Users;
