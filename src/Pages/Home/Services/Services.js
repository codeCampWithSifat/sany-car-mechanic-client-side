import { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {
    const [services , setServices] = useState([]);
    useEffect(() => {
        fetch(`./services.json`)
        .then(res => res.json())
        .then(data => setServices(data));
    },[])
    return (
        <div>
            <h3 className='my-5 text-danger'>See Our Services</h3>
            <div className='services-container container'>
          {
            services.map(service => <Service key ={service.name} service={service}></Service>)
          }
        </div>
        </div>
    );
};

export default Services;