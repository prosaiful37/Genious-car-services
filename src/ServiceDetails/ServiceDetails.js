import React from 'react';
import { useParams } from 'react-router-dom';

const ServiceDetails = () => {
    const {serviceId} = useParams();
    return (
        <div>
            <h4>This is service details : {serviceId}</h4>
        </div>
    );
};

export default ServiceDetails;