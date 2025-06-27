import React from 'react';

function Team() {
    return (
        <div className='container mb-5'>
         <div className='row p-5 mt-3 border-top'>
           <h1 className='text-center'>People</h1>
         </div>
          <div className='row fs-5 p-3' style={{lineHeight:"1.8" , fontSize:"1.2em"}}>
             <div className='col-6 p-3 text-center'>
               <img src='media/images/mohit.jpg' style={{borderRadius:"100%", width:"50%" }}/>
               <h4 className='mt-4'>Mohit Rajak</h4>
               <h6>Founder, CEO</h6>
             </div>
            
             <div className='col-6'>
              <p>Mohit Rajak founded Zerodha in 2025 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.</p>
              <p>He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).</p>
              <p>Playing basketball is his zen.</p>
              <p>Connect on <a href='' style={{textDecoration:"none"}}>HomePage</a> /<a href='' style={{textDecoration:"none"}}>TrandinQna </a>/ <a href=''style={{textDecoration:"none"}}> Twitter</a> </p>
             </div>
        </div>
     </div>
    );
}

export default Team;