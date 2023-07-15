import React from 'react';
import {useAuth} from "../../context/AuthContext";
import Layout from "../../Layout/Layout";
function Home(props) {
     const[auth,setAuth]=useAuth();
    return (
        <Layout>
            <h1>Home page</h1>
            <pre>{JSON.stringify(auth,null,4)}</pre>
        </Layout>
    );
}

export default Home;