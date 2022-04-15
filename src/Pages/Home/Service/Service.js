import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Service.css';

const Service = ({service}) => {
    const {id,name, img, description, price} = service;
    const navigate = useNavigate();
    const navigateToServiceDetails = id =>{
        navigate(`/service/${id}`)
    }
    return (
        <div className='service'>
            <img src={img} alt="" />
            <h2>{name}</h2>
            <h4>Price: ${price}</h4>
            <p><small>{description}</small></p>
            <Button onClick={() => navigateToServiceDetails(id)} variant="secondary" size="lg">
                Book: {name}
            </Button>{' '}
        </div>
    );
};

export default Service;