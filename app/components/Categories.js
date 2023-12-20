import React from 'react';
import { category } from '../data/Categorydata';
import { SiDcentertainment } from 'react-icons/si';
import { FcAutomotive } from 'react-icons/fc';
import { FaGlassCheers, FaBriefcaseMedical } from 'react-icons/fa';
import { MdRestaurant } from 'react-icons/md';
import { FaRegBuilding, FaLandMineOn } from 'react-icons/fa6';

const IconsMap = {
    'Automative': <FcAutomotive />,
    'Bars': <FaGlassCheers />,
    'Health & Medical': <FaBriefcaseMedical />,
    'Restaurant': <MdRestaurant />,
    'real Estate': <FaRegBuilding />,
    'Landscaping services': <FaLandMineOn />,
};

const Categories = () => {
    return (
        <div>
            <h2 className='text-2xl lg:ml-0 ml-9'>Featured Categories</h2>
            <div className='bg-yellow-300 lg:w-[1070px] w-[290px] lg:ml-0 ml-9 h-[3px]'></div>
            <div className='lg:flex lg:flex-row lg:flex-wrap flex flex-col items-center justify-between pt-5'>
                {category.map((data) => (
                    <div key={data.id} className='border-2 bg-gray-200 w-[280px] h-[100px] flex flex-col  items-center mb-5'>
                        <p className='text-[50px]'> {IconsMap[data.name]}</p>
                       
                        <p>{ data.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Categories;
