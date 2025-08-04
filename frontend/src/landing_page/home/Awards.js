import React from 'react'
import "../stylesheet.css"
function Awards() {
    return (
        <div className='container mt-5' >
            <div className='row align-items-center'>
                <div className='col-6 p-5'>
                    <img src='media/img/growthicon.jpg'  style={{width:"90%" , borderRadius:"20%"}} />
                </div>


                <div className='col-6 p-6 mt-3'>
                    <h1>The Global Stock Broker for You</h1>
                    <p className='text-fade'>From Wall Street to worldwide, 2 million+ Stoxie users move over 19% of all daily market volumes—investing and trading without borders, In: </p>

                    <div className='row text-fade'>
                        <div className=' col-6'> <ul>
                            <li> <p> Future and options</p> </li>
                            <li>  <p> Commodity derivatives</p> </li>
                            <li> <p> Currency derrivatives</p>   </li>
                        </ul></div>
         <br></br>
                        <div className=' col-6'> <ul>
                            <li><p> Stocks & IPOs</p> </li>
                            <li>   <p> Direct mutual funds</p> </li>
                            <li> <p> Bonds and Govt. Securities</p> </li>
                        </ul></div>
                    </div>
                      <img src='media\img\pressLogos.png' style={{width:"90%"}}/>
                </div>
            </div>
        </div>

    );
}

export default Awards;