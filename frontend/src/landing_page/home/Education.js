import React from 'react'
function Education() {
    return (  
         <div className='container  mt-5'>
            <div className='row'>
                <div className='col-6 '>
                    <img src='media/img/varsity.png' style={{width:"60%"}}/>
                    </div>

                    
               

                <div className='col-6'>
                    <h1 className='mb-5 mt-4 fs-4'>Free and Open Market Mentorship</h1>
                    <p className='mt-5'>Stoxie, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
                    <a href="#" style={{ textDecoration: "none" }}> Stoxie E-Book{" "}<i style={{ textAlign: "center" }} class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                    <p className='mt-5'>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
                    <a href="#" style={{ textDecoration: "none" }}> TradingQ&A{" "}<i style={{ textAlign: "center" }} class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                </div>
               
                

            </div>
 </div>
    );
}

export default Education;