import React from 'react';
import { IoSearchOutline } from 'react-icons/io5';
import { IoIosBusiness } from 'react-icons/io';
import { SiSkypeforbusiness } from 'react-icons/si';
import { MdBusinessCenter } from 'react-icons/md';
import { RiAmazonLine } from 'react-icons/ri';
import { SiFlipkart } from 'react-icons/si';

const Hero = () => {
    return (
        <div className='bg-cover bg-center lg:h-[600px] h-[400px] lg:w-full w-[500px] flex flex-col gap-2 items-center justify-center relative ' style={{ backgroundImage: 'url("/backgroun.jpg")' }}>
            <p className='text-white font-bold lg:text-[2rem] text-[1rem] text-center'>Take your local Online Business with Online pro</p>
            <p className='text-white lg:text-[1.2rem] text-[0.7rem]'>Lets uncover the best places to eat, drink and shop nearest you </p>

            <div className='relative flex items-center'>
                <input
                    type='text'
                    placeholder='Enter the Type of business you want to do...'
                    className='w-[350px]  lg:mr-0 mr-[60px] rounded-l-md lg:p-3 text-[0.8rem]  lg:ml-0 ml-[3rem]  pl-4 border-t border-b lg:border-l border-gray-300'
                />
                <div className='border-t border-b border-r border-gray-300 h-full w-2'></div>
                <input
                    type='text'
                    placeholder='Enter another placeholder...'
                    className='w-[350px] lg:flex hidden -translate-x-1 rounded-r-md p-3 border-t text-[0.8rem] border-b border-r border-gray-300'
                />
                <div className='absolute lg:right-3  right-12 transform  bg-yellow-400 h-full lg:pr-3 translate-x-2 pl-2 rounded-r-md'>
                    <IoSearchOutline className='text-white lg:translate-y-3 -translate-y-0 lg:translate-x-0 -translate-x-1 lg:text-2xl text-xl' />
                </div>
            </div>

            <div className='absolute lg:-bottom-7 -bottom-4 flex lg:gap-[70px] gap-5 justify-center'>
                <div className='text-black rounded-full bg-yellow-400 p-2'>
                    <IoIosBusiness className='lg:text-[60px] text-lg' />
                </div>
                <div className='text-black rounded-full bg-yellow-400 p-2 '>
                    <MdBusinessCenter className='lg:text-[60px] text-sm' />
                </div>
                <div className='text-black rounded-full bg-yellow-400 p-2 '>
                    <SiSkypeforbusiness className='lg:text-[60px] text-sm' />
                </div>
                <div className='text-black rounded-full bg-yellow-400 p-2 '>
                    <RiAmazonLine className='lg:text-[60px] text-sm' />
                </div>
                <div className='text-black rounded-full bg-yellow-400 p-2 '>
                    <SiFlipkart className='lg:text-[60px] text-sm' />
                </div>
            </div>
        </div>
    );
};

export default Hero;
