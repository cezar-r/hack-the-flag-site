import './App.css';
import React from 'react';
import {Link, Routes, Route, useNavigate, Navigate} from 'react-router-dom';

import { validNetIds } from './admin-panel';


const LoginField = () => {
    const navigate = useNavigate();

    const handleSubmit = event => {
        event.preventDefault();
        const netId = event.target[0].value;
    
        if (validNetIds.includes(netId)) {
            console.log("youre in")
            navigate('/announcements')
        }
    }
    

    return (
        <form onSubmit={handleSubmit}>
            <input className="loginButton" type="text" placeholder = "Enter NetID"></input>    
        </form>
    );
};

export default LoginField;