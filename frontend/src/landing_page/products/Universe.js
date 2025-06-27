import React from 'react';

function Universe() {
    return ( 
        <div className='container mt-5'>
        <div className='row text-center'>
            <h1>The Zerodha Universe</h1>
            <p className='mb-5'>Extend your trading and investment experience even further with our partner platforms</p>
        
        <div className='col-4 p-3 mt-5'>
          <img src="media/images/smallcaseLogo.png" style={{width:"140px" , marginBottom:"10px"}} />
            <p className='text-small text-muted' style={{fontSize:"13px"}}>Options trading platform that lets you create strategies, analyze positions, and examine data points like open interest, FII/DII, and more.</p>
          </div>
          <div className='col-4 p-3 mt-5'>
            <img src="media/images/sensibullLogo.svg" style={{width:"140px" , marginBottom:"10px"}}/>
            <p className='text-small text-muted'  style={{fontSize:"13px"}}>Thematic investing platform that helps you invest in diversified baskets of stocks on ETFs.</p>
          </div>
        
          <div className='col-4 p-3 mt-5'>
          <img src="media/images/streakLogo.png"style={{width:"140px", marginBottom:"10px"}}/>
            <p className='text-small text-muted' style={{fontSize:"13px"}}>Systematic trading platform that allow you to create and backtest strategies without coding.</p>
        </div>

        <div className='col-4 p-3 mt-5'>
          <img src="media/images/dittoLogo (1).png" style={{width:"100px", marginBottom:"10px"}}/>
            <p className='text-small text-muted' style={{fontSize:"13px"}}>Thematic investing platform that helps you invest in diversified baskets of stocks on ETFs.</p>
          </div>
          <div className='col-4 p-3 mt-5'>
            <img src="media/images/smallcaseLogo.png" style={{width:"140px", marginBottom:"10px"}}/>
            <p className='text-small text-muted' style={{fontSize:"13px"}}>Systematic trading platform that allows you to create and basktest strategies without coding.</p>
          </div>
        
          <div className='col-4 p-3 mt-5'>
          <img src="media/images/smallcaseLogo.png"style={{width:"140px", marginBottom:"10px"}}/>
            <p className='text-small text-muted' style={{fontSize:"13px"}}>Personalized advice on life and health insurance. No spam and no mis-selling.</p>
        </div>
        <button className='p-2 btn btn-primary fs-5 mb-5 mt-3' style={{width:"15%", margin: "0 auto"}}>Signup Now</button>
         </div>
       </div>
     );
}

export default Universe;