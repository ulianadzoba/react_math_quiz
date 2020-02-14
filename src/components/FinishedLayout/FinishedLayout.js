import React from 'react';
import './FinishedLayout.css';

const FinishedLayouts = props => {
    const result = props.result;
    if (result < 7) {
        return (
            <div className='finished-block'>
                <div className='result'> Your result is < strong > {props.result}</strong ></div>
                <div className='advise'>Don't worry! You can try again.</div>
                <div><button className='try-again' onClick={props.onRetry}>Try again!</button></div>
            </div>
        )
    } else {
        return (
            <div className='finished-block'>
                <div className='result'> Congratulation! Your result is < strong > {props.result}</strong ></div >
                <div className='advise'>You are cool!</div>
            </div>
        )
    }
};

export default FinishedLayouts;