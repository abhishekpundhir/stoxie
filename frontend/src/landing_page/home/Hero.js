import React from 'react'
import "../stylesheet.css"
function Hero() {
    return (
        <div className='container  kp '>
            <div className='row text-center flex-between mb-7'>
                {/* <h1 className='koko'>Welcome, <br/> To <b><span id='grediant-text'>Stoxie.Com....</span></b>  Your Global Investment Broker</h1> */}

                <img src='media/img/herobanner.jpg' alt='Hero Image' className='mb-5' style={{
                    border: "1px solid black",
                    borderRadius: " 4px",
                    padding: " 5px",
                    width: "150px",
                    width: "100%", height: "100%", borderRadius: "5%"
                }} />


            </div>

            <div className='row text-center flex-between'>
                <h1 >The world is your portfolio</h1>
                <p className='text-fade'>Online Platfrom to invest Globally in Stocks, Derrivatives , mutul funds and more</p>
                <button className='btn-1 mb-5'>Join Now</button>
            </div>
        </div>
    );
}

export default Hero;