import React from 'react';
import mechanic1 from '../../../images/experts/expert-1.jpg'
import mechanic2 from '../../../images/experts/expert-2.jpg'
import mechanic3 from '../../../images/experts/expert-3.jpg'
import mechanic4 from '../../../images/experts/expert-4.jpg'
import mechanic5 from '../../../images/experts/expert-5.jpg'
import Expert from '../Expert/Expert';

const experts = [

    {   img : mechanic1,
        name : 'Ikram',
        expertize : "Oil Expert"
    },
    {   img : mechanic2,
        name : 'Yusuf',
        expertize : "Engine Expert"
    },
    {   img : mechanic3,
        name : 'Foysal',
        expertize : "Shatter Expert"
    },
    {   img : mechanic4,
        name : 'Sifat',
        expertize : "All Rounder"
    },
    {   img : mechanic5,
        name : 'Sany',
        expertize : "Oil Expert"
    },
   
]

const Experts = () => {
    return (
       <div className='container' id='experts'>
        <h3 className='text-primary my-4'>See Our Experts</h3>
           <div className=" row">
                {
                    experts.map(expert => <Expert key={expert.name} expert={expert}></Expert>)
                }
            </div>
       </div>
    );
};

export default Experts;