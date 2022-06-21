import React from "react";
import './Service.css'

const Service = ({service}) => {
    const {name, img, price, description} = service
    console.log(service)
    return (
        <div className="service">
           
            <img  src={img} alt="" />
            <h3>{name}</h3>
            <h4>Price : {price}</h4>
            <p><small>{description}</small></p>
            <button className="main-button btn btn-success">Book A Service</button>
        </div>
    );
};

export default Service;