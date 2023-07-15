import React from 'react';
import notFoundImg from "../../assets/errorpage.webp";
import {Link} from 'react-router-dom'
const PageNotFound = () => {
    return (
        <div className="text-center mt-5 h-100">
            <img className="not_found_image pt-5 w-25 " src={notFoundImg} alt='not_found_image' />
            <h3 className="pb-5">Oops ! Page Not Found !!!</h3>

            <Link to="/" className="pnf-btn text-dark">Go Back Home</Link>
        </div>
    );
};

export default PageNotFound;
