import React, { useContext } from 'react';
import { Box } from '@mui/material';
import { useFormik } from 'formik';
import './Login.css';
import Input from '../../components/UI/Input/input';
import { Link, useNavigate } from 'react-router-dom';
import { FaRegUser } from 'react-icons/fa';
import { manualLoginUser } from '../../services/auth';
import { toast } from 'react-toastify';
import {useAuth} from "../../context/AuthContext";
import Layout from "../../Layout/Layout";

function Login() {
    const[auth,setAuth]=useAuth();


    const navigate = useNavigate();


    const initialValues = {
        username: '',
        password: '',
    };

    const validate = (values) => {
        let errors = {};

        if (!values.username) {
            errors.username = 'User Name Can Not be Blank';
        }
        if (!values.password) {
            errors.password = 'Password is empty, Check Again!!';
        }
        return errors;
    };

    const onSubmit = async (values, { resetForm }) => {
        try {
            const response = await manualLoginUser({
                username: values.username,
                password: values.password,
            });
            // Assuming the response includes a token
            const token = response.token;

            // Check if the token exists
            if (token) {

                localStorage.setItem('token', token);
                setAuth({token:token})

                // Call the onLogin function passed from the AuthProvider

                // Redirect to the Home page
                navigate('/home');
                toast.success('Log In Successfully ...');
            } else {
                // Handle authentication error
                toast.error('Authentication failed !!!');
            }
            // Reset the form if needed
            resetForm({ values: '' });
        } catch (error) {
            // Handle errors here
            resetForm({ values: '' });
            toast.error('Authentication failed !!!');
        }
    };

    const formik = useFormik({
        initialValues,
        onSubmit,
        validate,
    });

    return (
        <Layout title={"Login Page - Ecommerce"}>
            <div className="d-flex align-items-center justify-content-center" style={{ height: '80vh' }}>
                <Box
                    className="shadow-lg rounded-4 p-4"
                    component="form"
                    sx={{
                        '& .MuiTextField-root': { m: 1, width: '20vw', height: '8vh' },
                    }}
                    noValidate
                    autoComplete="off"
                    onSubmit={formik.handleSubmit}
                >
                    <div className="text-center mb-2">
                        <FaRegUser className="pb-1 text-primary text-center" size="50px" />
                    </div>
                    <h3 className="text-center">Login Form</h3>
                    <br />

                    <Input
                        label="User Name"
                        id="outlined-size-small"
                        name="username"
                        value={formik.values.username}
                        size="small"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        helperText={
                            formik.errors.username && formik.touched.username ? (
                                <span className="small text-danger">{formik.errors.username}</span>
                            ) : null
                        }
                    />

                    <Input
                        label="Password"
                        id="outlined-password-input"
                        name="password"
                        value={formik.values.password}
                        size="small"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        helperText={
                            formik.errors.password && formik.touched.password ? (
                                <span className="small text-danger">{formik.errors.password}</span>
                            ) : null
                        }
                        type="password"
                        autoComplete="current-password"
                    />

                    <div className="d-flex flex-wrap p-2  align-items-center justify-content-center">
                        <button type="submit" className="btn mt-1 btn-success align-items-center w-100">
                            LOG IN
                        </button>
                    </div>
                    <hr className='text-bg-secondary'/>
                    <p className=' m-0 text-center'>Dont Have an Account ?</p>
                    <div className="d-flex flex-wrap ps-2 pe-2 mt-1 align-items-center justify-content-center">
                        <Link to="/signup" className="btn btn-info align-items-center w-100">SIGN UP</Link>
                    </div>
                </Box>
            </div>

        </Layout>
    );
}

export default Login;
