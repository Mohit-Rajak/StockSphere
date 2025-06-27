import React from 'react';

function State() {
    return ( 
      <div className='container p-3'>
         <div className='row p-5'>
            <div className='col-lg-6 col-sm-12 p-5'>
              <h1 className='fs-2 mb-5'>Trust with confidence</h1>
               <h2 className='fs-4'>Customers-first always</h2>
               <p className='text-muted'>That's why 1.5+ crore customers trust Zerodha with 3.5+ lakh crores worth of equity investment.</p>
               <h2 className='fs-4'>No spam or gimmicks</h2>
               <p className='text-muted'>No gimmicks, spam, "gamification", or annoying push notification. High quality apps that you use at your pace, the way you like.</p>
               <h2 className='fs-4'>The Zerodha universe</h2>
               <p className='text-muted'>No just an app but a whole ecosystem Our invesment in 30+ fintech startups offer you tailored services specifiv to you need.</p>
               <h2 className='fs-4'>Do better with money</h2>
               <p className='text-muted'>With initiatives like Nudge and Kill Switch. we don't just facilities transactions. but activity help you do better with your money.</p>
            </div>
            <div className='col-lg-6 col-sm-12 p-5'>
              <img src='media/images/ecosystem.png' style={{width:"90%"}}/>
              <div className='text-center'>
                <a href='' className='mx-5' style={{textDecoration:"none"}}>Explore our product <i class="fa-solid fa-right-long"></i></a>
                <a href='' style={{textDecoration:"none"}}>Try Kite demo</a>
              </div>
            </div>
         </div>
      </div>
     );
}

export default State;