import React from 'react';
import { useLocation , Navigate} from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const PrivateRoute = ({children}) => {
    const {user} = useAuth();
    const location = useLocation();

    return (
        user.email ? children : <Navigate to="/login" state={{ from: location }} replace />
    );
};

export default PrivateRoute;