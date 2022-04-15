import React from 'react';
import Expart from '../Expart/Expart'

import expert1 from '../../../images/experts/expert-1.jpg';
import expert2 from '../../../images/experts/expert-2.jpg';
import expert3 from '../../../images/experts/expert-3.jpg';
import expert4 from '../../../images/experts/expert-4.jpg';
import expert5 from '../../../images/experts/expert-5.jpg';
import expert6 from '../../../images/experts/expert-6.png';

const experts = [
    {id: 1, name: 'will smith', img: expert1},
    {id: 2, name: 'john david', img: expert2},
    {id: 3, name: 'david miller', img: expert3},
    {id: 4, name: 'stepen hoqs', img: expert4},
    {id: 5, name: 'nilson nicolar', img: expert5},
    {id: 6, name: 'willium rash', img: expert6},
]

const Exparts = () => {
    return (
        <div className='container my-5' id='experts'>
            <h2 className='text-center py-4'>Our Experts</h2>
            <div className='row row-cols-1 row-cols-md-3 g-5'>
                {
                    experts.map(expert => <Expart
                        key={expert.id}
                        expert={expert}
                    ></Expart> )
                }
            </div>
        </div>
    );
};

export default Exparts;