import React, {useState} from 'react';
import {Box} from "@mui/material";
import {useFormik} from "formik";
import './Login.css'
import Input from "../../components/UI/Input/input";

import {Link} from "react-router-dom";
import {FaRegUser} from "react-icons/fa";

function Login(props) {

    const initialValues = {
        email: "", password: ""
    }
    const validate = (values) => {
        let errors = {}

        if (!values.email) {
            errors.email = "E-Mail Can Not be Blank";
        }
        if (!values.password) {
            errors.password = "Password is empty , Check Again!!"
        }
        return errors;
    }

    const onSubmit = (values, {resetForm}) => {

        /*      const taskId = new Date();

              const apiURL = `https://task-list-5a410-default-rtdb.firebaseio.com/tasks/${taskId}.json`;

              const task = {
                  ...values,
                  status: 'New',
                  id: taskId,
              }
              axios.put(apiURL, task).then((res) => {
                  if (res.status === 200) {
                      setMsg('Task Saved Successfully ...');
                      resetForm({values:''})
                  }
              }).catch((err) => {
                  setMsg('Something Went wrong Not Saved !!!')
              })*/
    }


    const formik = useFormik({
        initialValues, onSubmit, validate,
    });


    return (<div className="d-flex  align-items-center justify-content-center  " style={{height: '84vh'}}>

            <Box
                className="shadow-lg rounded-4 p-4"
                component="form"
                sx={{
                    '& .MuiTextField-root': {m: 1, width: '20vw', height: '8vh'},
                }}
                noValidate
                autoComplete="off"
                onSubmit={formik.handleSubmit}
            >

                <div className='text-center mb-2'>
                    <FaRegUser className="pb-1 text-primary text-center" size="50px"/>
                </div>
                <h3 className="text-center">Login Form</h3>
                <br/>

                <Input
                    label="E-Mail"
                    id="outlined-size-small"
                    name="email"
                    value={formik.values.email}
                    size="small"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    helperText={formik.errors.email && formik.touched.email ?
                        <span className="small text-danger">{formik.errors.email}</span> : null}
                />

                <Input
                    label="Password"
                    id="outlined-password-input"
                    name="password"
                    value={formik.values.password}
                    size="small"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    helperText={formik.errors.password && formik.touched.password ?
                        <span className="small text-danger">{formik.errors.password}</span> : null}
                    type='password'
                    autoComplete="current-password"
                />

                <div className="d-flex flex-wrap align-items-center justify-content-center">
                    <button type="submit"
                            className="btn mt-1 btn-success align-items-center">
                        Submit
                    </button>
                </div>
                <p className='pt-3 m-0 text-center'>Already Have an Account ?</p>
                <div className='text-center'><Link to='/signup' className='badge bg-info'>SignUp</Link></div>

            </Box>
        </div>);
}

export default Login;