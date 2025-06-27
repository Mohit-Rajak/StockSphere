import React from 'react';

function Hero() {
    return (
        <div className='container text-center mt-5 border-bottom mb-5'>
            <h1 className='mt-5' style={{fontSize:"48px" , opacity:"0.9" , padding:"5px"}}>Zerodha Products</h1>
                <p className='fs-5'>Sleek, modern, and intuitive trading platforms</p>
                <p className='fs-6 mb-5'>Check out our <a href='#' style={{textDecoration:"none"}}>investment offerings <i class="fa-solid fa-right-long"></i></a></p>
        </div>
    );
}

export default Hero;