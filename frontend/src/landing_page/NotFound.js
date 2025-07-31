import React from 'react'
import "../landing_page/stylesheet.css"
function NotFound() {
    return (
        <div className='container p-7 mb-5'>
            <div className='row text-center'>
             {/* <img src='media/img/notfound.png' alt='Hero Image' className='mb-5'/> */}
             <h1 className='mt-5 mb-2'>Go Borderless With Stoxie </h1>
             <p className='text-muted'> Zero-cost investing. ₹20 smart trades. One ultra-modern platform.</p>
             <button className='btn-1 mb-5'>Join Now</button>
            </div>
        </div>
    ); 
}

export default NotFound;