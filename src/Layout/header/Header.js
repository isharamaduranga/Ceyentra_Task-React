import React from 'react';
import './Header.css'
import {Link, NavLink} from "react-router-dom";
import {HiShoppingBag} from "react-icons/hi";
const Header = () => {
    return (
        <>
            <nav className="navbar bg-dark navbar-expand-lg navbar-dark">
                <div className="container-fluid">

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span><i className=" fa-sharp fa-solid fa-bars"></i></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                        <Link
                            to="/"
                            className="navbar-brand text-warning"
                        >
                            <HiShoppingBag className="pb-1 text-warning" size="35px"/> App-Test
                        </Link>
                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <NavLink
                                        to="/login"
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
                                        SIGN UP
                                    </NavLink>
                                </li>
                            </ul>
                    </div>
                </div>
            </nav>
        </>

    );
};

export default Header;
