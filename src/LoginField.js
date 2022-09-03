import './App.css';
import React from 'react';
import { useNavigate } from 'react-router-dom';

import { validNetIds } from './admin-panel';


const LoginField = () => {
    const navigate = useNavigate();

    const handleSubmit = event => {
        event.preventDefault();
        const netId = event.target[0].value;
    
        if (validNetIds.includes(netId)) {
            console.log("youre in");
            navigate('/announcements');
        } else {
            console.log("who tf is " + netId);
            console.log("try 'cezarr' for now and add ur netid in admin-panel");
        }
    }
    
    return (
        <form  onSubmit={handleSubmit}>
            <input className="loginButton" type="text" placeholder = "Enter NetID"></input>    
        </form>
    );
};

export default LoginField;