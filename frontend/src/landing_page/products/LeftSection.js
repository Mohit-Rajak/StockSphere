import React from 'react';

function LeftSection({
    imageUrl,
    productName,
    productDescription,
    tryDemo,
    learnMore,
    googlePlay,
    appStore,
}) {
    return ( 
       <div className='container mt-5'>
         <div className='row'>
          <div className='col-6 p-5'>
             <img src={imageUrl} style={{width:"97%"}}/>
          </div>
          <div className='col-6 p-5 mt-5'>
             <h1>{productName}</h1>
             <p>{productDescription}</p>
             <div>
             <a href={tryDemo} style={{textDecoration:"none"}}>Try Demo <i class="fa-solid fa-right-long"></i></a>
             <a href={learnMore} style={{marginLeft:"50px" , textDecoration:"none"}}>Learn More <i class="fa-solid fa-right-long"></i></a>
             </div>
             <div className='mt-3'>
             <a href={googlePlay}><img src="media/images/googlePlayBadge.svg" /></a>
             <a href={appStore}><img src="media/images/appstoreBadge (1).svg"  style={{marginLeft:"50px"}} /></a>
             </div>
          </div>
         </div>
       </div>
     );
}

export default LeftSection;