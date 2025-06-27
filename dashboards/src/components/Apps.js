import React from 'react';

function Apps() {
    const appList = [
        {
            name: 'Stock Sphere',
            description: `Stock Sphere is a full-stack stock market web application that provides users with real-time stock data, company insights, and personalized watchlists. Built using the MERN stack (MongoDB, Express.js, React, and Node.js), it allows users to:
            - Search and track stocks in real time
            - View graphical trends and analytics
            - Add/remove stocks from a watchlist
            - Get personalized stock recommendations
            - Use secure authentication (JWT-based login/signup)
            The project also integrates third-party APIs to fetch accurate stock data and implements a clean, user-friendly interface.`
        },
        {
            name: 'Zerodha Clone',
            description: `This project is a clone of the popular stock trading platform Zerodha. It is designed to mimic the UI/UX of Zerodha while incorporating core features such as:
            - Clean and modern dashboard for users
            - Real-time stock price updates and charts
            - Portfolio management tools
            - Order placement simulation (Buy/Sell)
            - Mobile-responsive design for seamless use across devices
            Technologies used include React for the frontend, Chart.js for data visualization, and dummy APIs for stock data simulation. The project showcases a professional, production-level UI design and can be extended with backend integration.`
        }
    ];

    return ( 
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4"></h1>
            <ul>
                {appList.map((app, index) => (
                    <li key={index} className="mb-6 p-4 border rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold mb-2">{app.name}</h3>
                        <p className="text-gray-700" style={{ whiteSpace: 'pre-wrap' }}>{app.description}</p>
                    </li>
                ))}
            </ul>
        </div>
     );
}

export default Apps;