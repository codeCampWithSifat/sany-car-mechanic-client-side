import React from 'react';
import { useLocation , Navigate} from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import {Spinner} from 'react-bootstrap'


const PrivateRoute = ({children}) => {
    const {user, isLoading} = useAuth();
    const location = useLocation();

    if(isLoading) {
       return <Spinner animation="border" variant="info" />
    }
    return (
        user.email ? children : <Navigate to="/login" state={{ from: location }} replace />
    );
};

export default PrivateRoute;