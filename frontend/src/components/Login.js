import React from 'react';
import { Link } from 'react-router-dom';
import BackgroundImage from '../images/leaf1.svg';

//login component
const Login = ({ login, getEmail, getPassword }) => {
    return (
        <div className="loginContainer">
            <img className="backgroundImage" src={BackgroundImage} alt="" />
            <div className="form">
                <h1>Please Sign In</h1>
                <br />
                <form action="">
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
                    <Link to="/landing">
                        <button onClick={login}>Login</button>
                    </Link>
                </form>
            </div>

            <div className="signUp">
                <h2>
                    Don't Have An Account?
                    <Link className="h2Link" to="/register">
                        <h2>Sign Up Here</h2>
                    </Link>
                </h2>
            </div>
        </div>
    );
};

export default Login;
