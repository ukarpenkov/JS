import React, { Component } from 'react';
import './error-indication.css';
import icon from './zvsm.png'


const ErrorIndication = () => {
    return (
        <div className='error-indication'>
            <img src={icon} alt='error-icon' />
            <span className='boom'>Boom!</span>
            <span>Какие-то проблемы с отображением</span>
            <span>(Но дроиды скоро ее починят)</span>
        </div>
    )
}

export default ErrorIndication