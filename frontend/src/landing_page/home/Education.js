import React from 'react';

function Education() {
    return (  
        <div className='container mt-5'>
        <div className='row'>
           <div className='col-6'>
              <img src='media/images/education.svg' style={{width:"70%"}}/>
           </div>
           <div className='col-6'>
              <h1 className='mb-3 fs-2'>Free and open market education</h1>
              <p>Versity, the largest online stock market educatioin book in the world convering everything from the basics to advanced trading.</p>
              <a href='' style={{textDecoration:"none", textAlign:"center"}} className='mt-3 mb-3 '>Versity <i class="fa-solid fa-right-long"></i></a>

              <p className='mt-5'>TradingQ&A, the most active trading and investment community in india for all market related queries.</p>
              <a href='' style={{textDecoration:"none", textAlign:"center"}} className='mt-3'>TradingQ&A <i class="fa-solid fa-right-long"></i></a>
           </div>
        </div>
    </div>
    );
}

export default Education;