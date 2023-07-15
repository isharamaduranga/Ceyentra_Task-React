import React, {useState} from 'react';
import './Signup.css'
import {useFormik} from "formik";
import {Box} from "@mui/material";
import {BiUserPin} from "react-icons/bi";
import Input from "../../components/UI/Input/input";
import {Link, useNavigate} from "react-router-dom";
import {createUserWithEmailAndPassword,updateProfile} from 'firebase/auth';
import {auth} from "../../config/firebase";
import {toast} from 'react-toastify';


function Signup(props) {
    const navigate = useNavigate();
    const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

    const initialValues = {
        name: "", email: "", password: ""
    }
    const validate = (values) => {
        let errors = {}

        if (!values.name) {
            errors.name = "Name Can Not be Blank";
        }
        if (!values.email) {
            errors.email = "E-Mail Can Not be Blank";
        }
        if (!values.password) {
            errors.password = "Password is empty , Check Again!!"
        }
        return errors;
    }

    const onSubmit = (values, {resetForm}) => {

        console.log(values);

        setSubmitButtonDisabled(true);
        createUserWithEmailAndPassword(auth, values.email, values.password).then((res) => {
            console.log(res);
            toast.success(`${values.name} Sign-Up Successfully ...`)
            setSubmitButtonDisabled(false);

            const user = res.user;
            updateProfile(user,{

            })
            resetForm({values:''})
            navigate("/login");

        }).catch((err) => {
            toast.error(err.message)
            setSubmitButtonDisabled(false);
            console.log(err);
        })

        /*

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


    return (<div className="d-flex  align-items-center justify-content-center  " style={{height: '86vh'}}>

        <Box
            className="shadow-lg rounded-4 p-4"
            component="form"
            sx={{
                '& .MuiTextField-root': {m: 1, width: '20vw', height: '7vh'},
            }}
            noValidate
            autoComplete="off"
            onSubmit={formik.handleSubmit}
        >

            <div className='text-center'>
                <BiUserPin className="pb-1 text-primary text-center" size="55px"/>
            </div>
            <h3 className="text-center">SignUp Form</h3>
            <br/>

            <Input
                label="Name"
                id="outlined-size-small"
                name="name"
                value={formik.values.name}
                size="small"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                helperText={formik.errors.name && formik.touched.name ?
                    <span className="small text-danger">{formik.errors.name}</span> : null}
            />

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

            <div className="d-flex flex-wrap p-2 align-items-center justify-content-center">
                <button
                    type="submit"
                    className="btn mt-1 btn-success w-100 "
                    disabled={submitButtonDisabled}
                >
                    SIGN UP
                </button>
            </div>
            <hr  className='text-bg-secondary'/>
            <p className=' m-0 text-center'>Already Have an Account ?</p>
            <div className="d-flex flex-wrap ps-2 pe-2 mt-1 mb-1 align-items-center justify-content-center">
                <Link to="/" className="btn btn-info align-items-center w-100">LOG IN</Link>
            </div>
        </Box>
    </div>);
}

export default Signup;