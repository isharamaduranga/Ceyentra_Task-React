import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login/Login';
import PageNotFound from './pages/PageNotFound/PageNotFound';
import Header from './Layout/header/Header';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import Signup from "./pages/Signup/Signup";
import Home from "./pages/Home/Home";
import PrivateRoute from "./Routes/ProtectedRoute";
import AdminDashboard from "./pages/Admin/AdminDashboard";

function App() {
    return (
        <>
            <ToastContainer />
            <Header />
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/signup" element={<Signup/>} />
                <Route path="/home" element={<PrivateRoute/>} >
                    <Route path="" element={<Home/>} />
                    <Route path="admin" element={<AdminDashboard/>} />
                </Route>
                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </>

    );
}

export default App;