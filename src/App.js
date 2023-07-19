import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login/Login';
import PageNotFound from './pages/PageNotFound/PageNotFound';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import Signup from "./pages/Signup/Signup";
import Home from "./pages/Home/Home";
import PrivateRoute from "./Routes/ProtectedRoute";
import AdminDashboard from "./pages/Admin/Dashboard/AdminDashboard";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Policy from "./pages/Policy/Policy";
import Category from "./pages/Admin/Category/Category";
import CreateProduct from "./pages/Admin/Product/CreateProducts";
import Products from "./pages/Admin/Product/Products";
import Users from "./pages/Admin/Users/Users";
import UpdateProducts from "./pages/Admin/Product/UpdateProducts";
import ProductDetailsPage from "./pages/Admin/Product/ProductDetailsPage";
import Categories from "./pages/Categories/Categories";
import CategoryProduct from "./pages/CategoryProduct/CategoryProduct";
import CartPage from "./pages/Cart/CartPage";

function App() {
    return (
        <>
            <ToastContainer />
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/signup" element={<Signup/>} />
                <Route path="/home" element={<PrivateRoute/>} >
                    <Route path="" element={<Home/>} />
                    <Route path="admin" element={<AdminDashboard/>} />
                    <Route path="admin/get-category" element={<Category/>} />
                    <Route path="admin/create-product" element={<CreateProduct/>} />
                    <Route path="admin/products" element={<Products/>} />
                    <Route path="admin/categories" element={<Categories/>} />
                    <Route path="admin/category/:id" element={<CategoryProduct/>} />
                    <Route path="admin/products/:id" element={<UpdateProducts/>} />
                    <Route path="admin/product/:id" element={<ProductDetailsPage />} />
                    <Route path="admin/cart" element={<CartPage/>} />
                    <Route path="admin/users" element={<Users/>} />
                </Route>
                <Route path="/about" element={<About/>}/>
                <Route path="/contact" element={<Contact/>}/>
                <Route path="/policy" element={<Policy/>}/>
                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </>

    );
}

export default App;