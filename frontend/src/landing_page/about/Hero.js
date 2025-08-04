import React from 'react'
import "../stylesheet.css"
function Hero() {
    return (
        <div className='container mt-5 mb-5'>
            <div className='row p-5'>
                <h1 className='text-center fs-4'>We Reimagined Broking with Radical Transparency <br /><br />Now, We're Building a Technology-first future for Investors Everywhere.</h1>
            </div>

            <div className='row p-2 fs-6 text-fade2'>
                <div className='col-6 p-5 alink'>
                    <p>
                        Stoxie was born with a singular mission — to dismantle the barriers that hold everyday investors back.<br /><br />
                        Launched on a bold vision, we set out to reimagine what investing could be: simpler, smarter, and built on technology that doesn't just support traders — it empowers them.<br /><br />
                        The name <strong>Stoxie</strong> blends the essence of stocks with style, speed, and strength — a symbol of confidence in a world of financial noise.<br /><br />
                        Today, Stoxie is more than just a platform. It's a movement.<br /><br />
                        With over <strong>2 million+ investors</strong> executing billions in trades each year, we now contribute to over <strong>19% of global daily retail volume</strong> — a force reshaping the future of finance.<br /><br />
                        And we're just getting started.
                    </p>
                </div>
                <div className='col-6 p-5 alink text-fade2'>
                     <p>
                        At Stoxie, we believe that knowledge is as valuable as capital.<br /><br />
                        That's why we lead open educational and community initiatives designed to empower the next generation of traders and investors — no gatekeeping, just growth.<br /><br />
                        Through <strong>Stoxie Ventures</strong>, our fintech fund and incubator, we actively back startups shaping the future of finance, technology, and wealth creation — all with the aim of expanding access to global capital markets.<br/><br/>
                        But we're not just building products — we're building a movement.<br /><br />
                        Stay updated on what we're crafting, launching, and exploring by following our <a href="#">blog</a>, diving into <a href="#">media features</a>, or exploring the <a href="#">philosophies</a> that power the Stoxie universe.
                    </p>
                    </div>
                </div>
            </div>
           
            

            );
}

            export default Hero;