import React from 'react'
function Hero() {
    return (
        <div className='container mt-5 mb-5'>

            <div className='row p-5 mt-5 text-center '>
                <h1>Charges</h1>
                <h3 className='text-fade2'>Free Equity investments flat 50&#8377; traday and F&O trades</h3>
            </div>


            <div className='row  p-5 fs-6 '>

                <div className='col-4 p-5 text-center'>
                    <img src='media\img\pricingEquity.svg' />
                    <h3>Free Equity Delivery</h3>
                    <p className='text-fade2'>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
                </div>

                <div className='col-4 p-5 text-center'>
                    <img src='media\img\intradayTrades.svg' />
                    <h3>Intraday and F&O trades</h3>
                    <p className='text-fade2'>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
                </div>

                <div className='col-4 p-5 text-center'>
                    <img src='media\img\pricingEquity.svg' />
                    <h3>Free direct MF</h3>
                    <p className='text-fade2'>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
                </div>
            </div>
        </div>
    );
}

export default Hero;