import React from 'react'
import "../stylesheet.css"
function Hero() {
    return (
        <div className='container p-5 mb-5'>
            <div className='row text-center'>
             <img src='media/img/homeHero.png' alt='Hero Image' className='mb-5'/>
             <h1 className='mt-5'>The world is your portfolio</h1>
             <p>Online Platfrom to invest Globally in Stocks, Derrivatives , mutul funds and more</p>
             <button className='btn-1 mb-5'>Join Now</button>
            </div>
        </div>
    ); 
}

export default Hero;