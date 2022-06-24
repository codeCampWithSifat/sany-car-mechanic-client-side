import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

const Login = () => {
    const {googleSignIn} = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";



    const handleGoogleSignIn = () => {
        googleSignIn()
        .then(() => {
            navigate(from, { replace: true });
        })
    }
    return (
        <div>
            <h2>Please Login </h2>
            <button onClick={handleGoogleSignIn}
            type="button" className="btn btn-outline-success">Google Login</button>
        </div>
    );
};

export default Login;