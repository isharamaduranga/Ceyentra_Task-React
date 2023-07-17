import React from 'react';
import './Header.css'
import {Link, NavLink} from "react-router-dom";

import {useAuth} from "../../context/AuthContext";
import {toast} from "react-toastify";
import { Badge } from 'antd';
import {MdShoppingCart} from "react-icons/md";

const Header = () => {
    const [auth, setAuth] = useAuth();
    const handleLogOut = () => {
        setAuth({
            ...auth,
            token:''
        })
        localStorage.removeItem('token');
        toast.success("Log Out Successfully ...")
    };
    return (
            <nav className="navbar bg-dark navbar-expand-lg navbar-dark  ">
                <div className="container-fluid">

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span><i className=" fa-sharp fa-solid fa-bars"></i></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                        <Link
                            className="navbar-brand text-warning"
                        >
                            <MdShoppingCart className="pb-1 pe-2 text-success" size="35px"/>  E-Commerce
                        </Link>
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            {!auth.token ? (

                                <>
                                <li className="nav-item">
                                    <NavLink
                                        to="/"
                                        className="nav-link "
                                        aria-current="page"
                                    >
                                        LOGIN
                                    </NavLink>
                                </li>

                                <li className="nav-item">
                                    <NavLink
                                        to="/signup"
                                        className="nav-link "
                                        aria-current="page"
                                    >
                                        SIGN-UP
                                    </NavLink>
                                </li>
                            </>) :
                                (<>
                                    <li className="nav-item">
                                        <NavLink
                                            to="/home"
                                            className="nav-link "
                                            aria-current="page"
                                        >
                                            HOME
                                        </NavLink>
                                    </li>

                                    <li className="nav-item dropdown ">
                                        <NavLink className="nav-link dropdown-toggle  " role="button"
                                                 data-bs-toggle="dropdown" aria-expanded="false">
                                            ADMIN
                                        </NavLink>

                                        <ul className="dropdown-menu">
                                            <li>
                                                <NavLink
                                                    to="/home/admin"
                                                    className="dropdown-item"
                                                >DashBoard
                                                </NavLink>
                                            </li>

                                            <li>
                                                <NavLink
                                                    onClick={handleLogOut}
                                                    to="/"
                                                    className="dropdown-item"
                                                >LOG-OUT
                                                </NavLink>
                                            </li>
                                        </ul>
                                    </li>

                                    <li className="nav-item">
                                        <NavLink
                                            to="/category"
                                            className="nav-link "
                                            aria-current="page"
                                        >
                                            CATEGORY
                                        </NavLink>
                                    </li>


                                    <li className="nav-item mt-2">
                                        <Badge count={5} overflowCount={10}>
                                            <NavLink
                                                to="/home/cart"
                                                className="nav-link"
                                                href="#">
                                                CART
                                            </NavLink>
                                        </Badge>
                                    </li>

                            </>)

                            }
                        </ul>
                    </div>
                </div>
            </nav>
    );
};

export default Header;
