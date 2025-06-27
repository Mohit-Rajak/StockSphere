import React from 'react';

function RaceTicket() {
    return ( 
       <div className='container'>
           <div className='row p-5 mt-5 mb-3'>
              <h1 className='fs-3 text-muted'>To create a ticket, select a relevant topic</h1>
              <div className='col-4 p-5 mt-5 mb-2'>
              <h4 className='' style={{fontSize:"17px"}}><i class="fa-solid fa-plus"></i> Account Opening</h4>
                <div className='row mt-4'>
                    <a href='' style={{textDecoration:"none"}} className='mt-2'>Resident individual</a>
                    <a href='' style={{textDecoration:"none"}} className='mt-2'>Minor</a>
                    <a href='' style={{textDecoration:"none"}} className='mt-2'>Non Resident Indian (NRI)</a>
                    <a href='' style={{textDecoration:"none"}} className='mt-2'>Company, Partnership, HUF and LLP</a>
                    <a href='' style={{textDecoration:"none"}} className='mt-2'>Glossary</a>
                </div>
              </div>
              <div className='col-4 p-5 mt-5'>
              <h4 className='' style={{fontSize:"17px"}}><i class="fa-solid fa-user"></i> Your Zerodha Account</h4>
              <div className='row mt-4'>
                    <a href='' style={{textDecoration:"none"}} className='mt-2'>Your Profile</a>
                    <a href='' style={{textDecoration:"none"}} className='mt-2'>Account modification</a>
                    <a href='' style={{textDecoration:"none"}} className='mt-2'>Client Master Report (CMR) and Depository Participant (DP)</a>
                    <a href='' style={{textDecoration:"none"}} className='mt-2'>Nomination</a>
                    <a href='' style={{textDecoration:"none"}} className='mt-2'>Transfer and conversion of securities</a>
                </div>
              </div>
              <div className='col-4 p-5 mt-5 mb-5'>
              <h4 className='' style={{fontSize:"17px"}}><i class="fa-solid fa-qrcode"></i>  Kite</h4>
              <div className='row mt-4'>
                    <a href='' style={{textDecoration:"none"}}>IPO</a>
                    <a href='' style={{textDecoration:"none"}}>Trading FAQs</a>
                    <a href='' style={{textDecoration:"none"}}>Margin Trading Facility (MTF) and Margins</a>
                    <a href='' style={{textDecoration:"none"}}>Nomination</a>
                    <a href='' style={{textDecoration:"none"}}>Transfer and conversion of securities</a>
                </div>
              </div>
               
              <div className='col-4 p-5 mt-5 mb-5'>
              <h4 className='' style={{fontSize:"17px"}}><i class="fa-solid fa-database"></i> Funds</h4>
                <div className='row mt-4'>
                    <a href='' style={{textDecoration:"none"}} className='mt-2'>Add money</a>
                    <a href='' style={{textDecoration:"none"}} className='mt-2'>Withdraw money</a>
                    <a href='' style={{textDecoration:"none"}} className='mt-2'>Add bank accounts</a>
                    <a href='' style={{textDecoration:"none"}} className='mt-2'>eMandates</a>
                    <a href='' style={{textDecoration:"none"}} className='mt-2'>Glossary</a>
                </div>
              </div>
              <div className='col-4 p-5 mt-5 mb-5'>
              <h4 className='' style={{fontSize:"17px"}}><i class="fa-solid fa-terminal"></i> Console</h4>
              <div className='row mt-4'>
                    <a href='' style={{textDecoration:"none"}} className='mt-2'>Portfolio</a>
                    <a href='' style={{textDecoration:"none"}} className='mt-2'>Corporate actions</a>
                    <a href='' style={{textDecoration:"none"}} className='mt-2'>Funds statement</a>
                    <a href='' style={{textDecoration:"none"}} className='mt-2'>Reports</a>
                    <a href='' style={{textDecoration:"none"}} className='mt-2'>Profile</a>
                    <a href='' style={{textDecoration:"none"}} className='mt-2'>Segments</a>
                </div>
              </div>
              <div className='col-4 p-5 mt-5 mb-5'>
              <h4 className='' style={{fontSize:"17px"}}><i class="fa-solid fa-indian-rupee-sign"></i> Coin</h4>
              <div className='row mt-4'>
                    <a href='' style={{textDecoration:"none"}}>Understanding mutual funds and Coin</a>
                    <a href='' style={{textDecoration:"none"}}>Coin app</a>
                    <a href='' style={{textDecoration:"none"}}>Coin web</a>
                    <a href='' style={{textDecoration:"none"}}>Transactions and reports</a>
                    <a href='' style={{textDecoration:"none"}}>National Pension Scheme (NPS)</a>
                </div>
              </div>
           </div>
       </div>
     );
}

export default RaceTicket;