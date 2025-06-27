import React from 'react';

function Hero() {
    return ( 
        <section className='container-fluid' id='supportHero'>
        <div className='p-5' id='supportWrapper'>
           <h4>Support Portal</h4>
           <a href=''>Support Portal</a>
        </div>
        <div className='row p-3 m-3'>
        <div className='col-6 p-5'>
           <h1 className='fs-3'>Search for an answer or browse help topics to create a ticket</h1>
           <input placeholder='Eg. how do I activate F&O'/>
           <br/>
           <a href='' style={{margin:"5px" , lineHeight:"1.3"}}>Track account opening</a>
           <a href=''style={{margin:"5px" , lineHeight:"1.3"}}>Track segment activation</a>
           <a href=''style={{margin:"5px" , lineHeight:"1.3"}}>Intraday margins</a>
           <a href=''style={{margin:"5px" , lineHeight:"1.3"}}>Kite user manual</a>
        </div>
        <div className='col-6 p-5'>
           <h1>Featured</h1>
           <ol>
            <li><a href=''>Surveillance measure on scrips - February 2025</a></li>
            <li><a href=''>Current Takeovers and Delisting - February 2025</a></li>
           </ol>
        </div> 
        </div>
    </section>
     );
}

export default Hero;