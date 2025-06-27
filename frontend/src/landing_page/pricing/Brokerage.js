import React from 'react';

function Brokerage() {
    return (
        <div className='container'>
          <div className='row p-5 mt-5 border-top'>
            <div className='col-8 p-4'>
                <h3 className='fs-5 mb-4 text-center'> <a href='' style={{textDecoration:"none"}}> Brokerage calculator</a></h3>
                <ul style={{lineHeight:"2.5" , fontSize:"14px"}} className='text-muted'>
                    <li>When trading at Zerodha, STT/CTT can be a lot more than the brokerage we charge.</li>
                    <li>BSE has revised transaction charges in M, MT, TS and MS groups to ₹275 per crore.</li>
                    <li>Equity and Futures - ₹10 per crore + GST of the traded value.</li>
                    <li>Options - ₹50 per crore + GST traded value (premium value).</li>
                    <li>Currency - ₹0.05 per lakh + GST of turnover for Futures and ₹2 per lakh + GST of premium.</li>
                    <li>Delivery & MTF Brokerage: 0.5% per executed order.</li>
                </ul>
            </div>
            <div className='col-4 p-4'>
                <h3 className='fs-5 mb-4'> <a href='' style={{textDecoration:"none"}}> List of charges</a></h3>
            </div>
         </div>
       </div>
    );
}

export default Brokerage;