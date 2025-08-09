import React from 'react'
function Brokerage() {
    return (
        <div className='container mt-5 mb-5'>

            <div className='row  p-5 fs-6 '>
                <div className='col-8 p-4 text-center'>
                    <a style={{ textDecoration: "none" , color:"white" }} href=''><h3 className='fs-4'>Brokerage Calculator</h3></a>
                    <ul  className='text-fade2 ' style={{textAlign:"left" , lineHeight:"2rem"}}>
                        <li>Call & Trade and RMS auto-squareoff: Additional charges of ₹50 + GST per order.</li>
                        <li>Digital contract notes will be sent via e-mail.</li>
                        <li>Physical copies of contract notes, if required, shall be charged ₹50 per contract note. Courier charges apply.</li>
                        <li>For NRI account (non-PIS), 0.5% or ₹100 per executed order for equity (whichever is lower).</li>
                        <li>For NRI account (PIS), 0.5% or ₹200 per executed order for equity (whichever is lower).</li>
                        <li>If the account is in debit balance, any order placed will be charged ₹40 per executed order instead of ₹20 per executed order.</li>
                    </ul>

                </div>
                <div className='col-4 p-4'><a style={{ textDecoration: "none",color:"white" }} href=''><h3 className='fs-4'> List of Charges </h3></a></div>




            </div>
        </div>
    );
}

export default Brokerage;