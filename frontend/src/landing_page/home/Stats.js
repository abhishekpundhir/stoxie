import React from 'react'
function Stats() {
    return (
        <div className='container'>
            <div className='row'>

                <div className='col-6'>
                    <h1>Trust with Confidence</h1>

                    <h2>Client first Service</h2>
                    <p>That's why 20+ crore clients trust Stoxie with ~ ₹16 lakh crores of equity investments, making us Worlds largest broker , contributing to 19% of daily retail exchange volumes Globally.</p>

                    <h2>No spam or Gimmicks</h2>
                    <p>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like. . <b>Our philosophies</b></p>

                    <h2>Stoxie Empire</h2>
                    <p>Not just an app, but a whole ecosystem. Our investments in 300+ fintech startups offer you tailored services specific to your needs.</p>

                    <h2>Do better with money</h2>
                    <p>With initiatives like <b>Nudge</b> and<b> Kill Switch</b>   , we don't just facilitate transactions, but actively help you do better with your money.</p>
                </div>

                <div className='col-6'>
                    <img src='media/img/ecosystem.png' style={{ width: "75%" }} />
                    <div>
                        <a href=''>Explor Products</a>
                        <a href=''>Try Kite Demo</a>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Stats;