import React, { useEffect,useState} from 'react';

function Hero() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem("token");
        setIsLoggedIn(!!token);
    }, []);

    const login = () => {
        window.location.href = "http://localhost:3000/login"
    }

    return ( 
        <div className='container p-5 mb-5'>
            <div className='row text-center'>
                <img src='media/images/homeHero.png' alt='Hero Images' className='mb-5'/>
                <h1 className='mt-5'>Invest in everything</h1>
                <p>Online platform to invest in stock, derivatives, mutual funds, and more</p>
                <button className='p-2 btn btn-primary fs-5 mb-5' style={{width:"20%", margin: "0 auto"}} onClick={login}>Invest Now</button>
            </div>
        </div>
     );
}

export default Hero;