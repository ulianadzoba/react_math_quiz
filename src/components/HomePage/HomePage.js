import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

const HomePage = props => {
    return (
        <div className='home-page'>
            <div className='home-page-title'>Welcome to Math Quiz</div>
            <Link to="/quiz">
                <div className='home-button'>
                    <button>Get started</button>
                </div>
            </Link>
        </div>

    )
}

export default HomePage;