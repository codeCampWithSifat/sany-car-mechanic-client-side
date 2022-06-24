import React from "react";
import './Service.css'
import {useNavigate} from 'react-router-dom'

const Service = ({service}) => {
    const {time,name, img, price, description} = service
    console.log(service)
    const navigate = useNavigate();

    const handleClick = id => {
        console.log(id)
        navigate(`/booking/${id}`)
    }

    return (
        <div className="service">
           
            <img  src={img} alt="" />
            <h3>{name}</h3>
            <h4>Price : {price}</h4>
            <p><small>{description}</small></p>
            <button 
            onClick={() => handleClick(time)}
            className="main-button btn btn-success">Book A Service</button>
        </div>
    );
};

export default Service;