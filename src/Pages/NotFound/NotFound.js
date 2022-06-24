import React from 'react';
import {Link} from 'react-router-dom'

const NotFound = () => {
    return (
        <div>
            <h3>This page is working right now</h3>
            <Link to="/home">
                <button className='btn btn-danger'>Go Back Home</button>
            </Link>
        </div>
    );
};

export default NotFound;