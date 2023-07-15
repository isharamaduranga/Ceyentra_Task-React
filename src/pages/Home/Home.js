import React from 'react';
import {useAuth} from "../../context/AuthContext";
function Home(props) {
     const[auth,setAuth]=useAuth();
    return (
        <div>
            <h1>Home page</h1>
            <pre>{JSON.stringify(auth,null,4)}</pre>
        </div>
    );
}

export default Home;