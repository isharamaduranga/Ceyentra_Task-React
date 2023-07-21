import React, {Component} from 'react';
import Layout from "../../../Layout/Layout";
import AdminMenu from "../../../Layout/adminmenu/AdminMenu";
import {deleteUser, getAllUsers} from "../../../services/users";
import {toast} from "react-toastify";

class Users extends Component {

    /** natural place to set up the initial state and other initial values. */
/** “this” holds the reference to current execution context in javascript. */
    constructor(props) {
        super(props);
        this.state = {
            users: [],
        };
        this.getAllUserList = this.getAllUserList.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

   /** method is called after the component is rendered. */
    componentDidMount() {
        this.getAllUserList();
    }

    /** Get All Users */
    async getAllUserList() {
        try {
            const data = await getAllUsers();
            this.setState({users: data});
        } catch (error) {
            console.error('Error fetching users:', error);
        }
    }

    /** Handle delete user*/
    async handleDelete(userId) {
        try {
            await deleteUser(userId);
            toast.success('User Deleted Successfully...');
            // Navigate back to the admin home page
            this.props.history.push('/home/admin');
        } catch (error) {

        }
    }

    render() {
        const {users} = this.state;

        return (
            <Layout title={'All Users - E-Commerce'}>
                <div className="container-fluid p-3">
                    <div className="row">
                        <div className="col-md-3" style={{minHeight: '78vh'}}>
                            <AdminMenu/>
                        </div>

                        <div className="col-md-9" style={{borderLeft: '1px solid gray'}}>
                            <h2 className={'text-center'}> All Users</h2>
                            <hr/>
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
                                                    onClick={() => this.handleDelete(user.id)}
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
    }
}

export default Users;
