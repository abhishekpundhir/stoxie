import React from 'react'
import "../landing_page/stylesheet.css"
import { Link } from 'react-router-dom';
function NotFound() {
    return (
        <div className='container p-7 mb-5'>
            <div className='row text-center'>
             {/* <img src='media/img/notfound.png' alt='Hero Image' className='mb-5'/> */}
             <h1 className='mt-5 mb-2'>404 Page Not Found </h1>
             <p className='text-muted'> Sorry, The Page Your Are Looking for is Not Exist</p>
            <Link to="/"><button className='btn-1 mb-5' >Go Home</button></Link> 
            </div>
        </div>
    ); 
}

export default NotFound;