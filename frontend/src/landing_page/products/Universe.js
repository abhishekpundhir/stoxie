import React from 'react'
import "../stylesheet.css"
function Universe() {
    return (
        <div className='container p-7 mb-5'>
            <div className='row text-center'>
                <img src='media/img/hero2.png' alt='Hero Image' className='mb-5' />
                <h1 className='mt-5 mb-2'>The Stoxie Glory </h1>
                <p className='text-fade'> Built for the modern investor — connect with powerful platforms that complement your Stoxie journey</p>
                <button className='btn-1 mb-5'>Join Now</button>
            </div>
        </div>
    );
}

export default Universe;