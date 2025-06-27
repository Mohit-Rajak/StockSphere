import React from 'react';

function RightSection({
    imageUrl,
    productName,
    productDescription,
    learnMore,
}) {
    return ( 
       <div className='container mt-5'>
        <div className='row'>
          <div className='col-6 mt-5'>
            <h1>{productName}</h1>
            <p>{productDescription}</p>
            <a href=''>{learnMore}Learn more <i class="fa-solid fa-right-long"></i></a>
          </div>
      
          <div className='col-6'>
            <img src={imageUrl}/>
          </div>
         </div>
       </div>
     );
}

export default RightSection;