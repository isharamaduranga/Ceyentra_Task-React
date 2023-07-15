import React from 'react';
import notFoundImg from "../../assets/errorpage.webp";
import {Link} from 'react-router-dom'
import Layout from "../../Layout/Layout";
import {useAuth} from "../../context/AuthContext";
const PageNotFound = () => {
    const [auth, setAuth] = useAuth();
    return (

        <Layout title={"Go Back - Page Not Found"}>
            <div className="text-center pt-4" style={{height:'80vh'}}>
                <img className="not_found_image pt-5 w-25 " src={notFoundImg} alt='not_found_image' />
                <h3 className="pb-5">Oops ! Page Not Found !!!</h3>

                {!auth.token? (<Link to="/" className="pnf-btn text-dark">Go Back Home</Link>) :
                    <Link to="/home/admin" className="pnf-btn text-dark">Go Back Home</Link>
                }

            </div>
        </Layout>
    );
};

export default PageNotFound;
