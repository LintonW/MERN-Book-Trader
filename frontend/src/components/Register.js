import React from 'react';
import { Link } from 'react-router-dom';
import BackgroundImage from '../images/leaf2.svg';

//register component
const Register = ({
    getFullName,
    getContactNumber,
    getEmail,
    getPassword,
    register,
}) => {
    return (
        <div className="registerContainer">
            <img className="backgroundImage" src={BackgroundImage} alt="" />
            <div className="form">
                <h1>Register Your Details</h1>
                <br />
                <form action="">
                    <input
                        onChange={getFullName}
                        placeholder="Full Name"
                        type="text"
                    />
                    <br />
                    <input
                        onChange={getContactNumber}
                        placeholder="Contact Number"
                        type="text"
                    />
                    <br />
                    <input
                        onChange={getEmail}
                        placeholder="E-mail"
                        type="text"
                    />
                    <br />
                    <input
                        onChange={getPassword}
                        placeholder="Password"
                        type="text"
                    />
                    <br />
                    <Link to="/">
                        <button onClick={register}>Register</button>
                    </Link>
                </form>
            </div>
        </div>
    );
};

export default Register;
