import React from 'react'
import "../stylesheet.css"
function Pricing() {
    return (
        <div className='container   '>
            <div className='row'>
                <div className='col-4'>
                    <h1 className='mb-4 fs-4'>Why overpay to underperform?</h1>
                    <p>We didn't just change the pricing model—we rewrote the rulebook. Transparent fees. Flat pricing. No surprises. Just the way smart investing should be.</p>
                    <a href="" style={{ textDecoration: "none" }}> Explore Prices{" "}<i style={{ textAlign: "center" }} class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                </div>
                <div className='col-2'></div>
                <div className='col-6'>

                    <div className='row text-center  mb-5'>

                        <div className='col r p-4 background-fade'>
                            <h1  className='mb-3 text-fade2'><span>&#8377;</span>0 </h1>
                            <p className='text-fade2'>Free account opening</p>
                        </div> 
                     

                        <div className='col r  p-4 background-fade'>
                        <h1 className='mb-3 text-fade2'><span>&#8377;</span>20 </h1>
                        <p className='text-fade2'>Intraday and F&O</p>
                    </div>

                    </div>

                    
                </div>

            </div>

        </div>


    );
}

export default Pricing;