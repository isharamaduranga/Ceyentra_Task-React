import {useState,useEffect} from "react";

import {Outlet} from 'react-router-dom'
import Spinner from "../components/Spinner";
import {useAuth} from "../context/AuthContext";


export default function PrivateRoute() {
    const [ok,setOk] =useState(false);
    const [auth,setAuth] = useAuth();

    useEffect(() => {

        if (!localStorage.getItem('token')) {
            setOk(false)
        }else{
            setOk(true)
        }

    }, [auth?.token]);

    return ok ? <Outlet/>  : <Spinner path = "" />;

}
