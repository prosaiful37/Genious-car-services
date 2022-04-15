import React from 'react';
import { Link, useParams } from 'react-router-dom';

const ServiceDetails = () => {
    const {serviceId} = useParams();
    return (
        <div className='my-5'>
            <h4>This is service details : {serviceId}</h4>
            <div className='text-center'>
                <Link to='/checkout'>
                    <button className='btn btn-secondary'>Please Checkout</button>
                </Link>
            </div>
        </div>
    );
};

export default ServiceDetails;