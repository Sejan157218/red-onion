import React from 'react';
import { Link } from 'react-router-dom';
import './Banner.css';


const Banner = () => {
    return (
        <div className="banner-container d-flex justify-content-center align-items-center my-1">
            <div>
                <h1 className="mb-3">Best Food Waiting For Your Belly</h1>
                <input className="w-100" type="text" placeholder="Search food items" />
                <button className="btn-search">Search</button>
            </div>
        </div>
    );
};

export default Banner;