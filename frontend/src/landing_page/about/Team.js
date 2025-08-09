import React from 'react'
import "../stylesheet.css"
function Team() {
    return (  
        <div className='container mt-5 mb-5'>
            <div className='row p-3'>
                <h1 className='text-center '>Team</h1>
            </div>

            <div className='row p-2 fs-6 text-muted '>
                <div className='col-6 p-5 alink text-center'>
                  <img className='.shadow-2' src='media/img/founder.jpg' id='founderProfil'/>
                  <h4 className='text-fade' style={{marginTop:"12px"}}>Abhishek Singh</h4>
                  <h5 className='text-fade'style={{fontSize:"15px"}}>Founder , CEO</h5>
                </div>
                <div className='col-6 text-fade2  p-5 alink mt-4'>
                     <p className='alink'>
                        At Stoxie, we believe that knowledge is as valuable as capital.<br /><br />
                        That's why we lead open educational and community initiatives designed to empower the next generation of traders and investors — no gatekeeping, just growth.<br /><br />
                        Through <strong>Stoxie Ventures</strong>, our fintech fund and incubator, we actively back startups shaping the future of finance, technology, and wealth creation — all with the aim of expanding access to global capital markets.<br/><br/>
                        But we're not just building products — we're building a movement.<br /><br />
                        Stay updated on what we're crafting, launching, and exploring by following our <a className='text-fade2'  href="#">blog</a>, diving into <a className='text-fade2'   href="#">media features</a>, or exploring the <a className='text-fade2'   href="#">philosophies</a> that power the Stoxie universe.
                    </p>
                    </div>
                </div>
            </div>
           
            
    );
}

export default Team;