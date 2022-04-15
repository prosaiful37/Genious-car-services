import React from 'react';

import sleeping from '../../../images/sleeping.jpg';

const NotFound = () => {
    return (
        <div>
            <h2 className='text-dark text-center'> Mechanic is sleeping</h2>
            <img className='img-100 img-fluid' src={sleeping} alt="" />
        </div>
    );
};

export default NotFound;