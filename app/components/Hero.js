import React from 'react';
import { IoSearchOutline } from 'react-icons/io5';
import { IoIosBusiness } from 'react-icons/io';
import { SiSkypeforbusiness } from 'react-icons/si';
import { MdBusinessCenter } from 'react-icons/md';
import { RiAmazonLine } from 'react-icons/ri';
import { SiFlipkart } from 'react-icons/si';

const Hero = () => {
    return (
        <div className='bg-cover bg-center h-[600px] flex flex-col gap-2 items-center justify-center relative ' style={{ backgroundImage: 'url("/backgroun.jpg")' }}>
            <p className='text-white font-bold text-[2rem]'>Take your local Online Business with Online pro</p>
            <p className='text-white'>Lets uncover the best places to eat, drink and shop nearest you </p>

            <div className='relative flex items-center'>
                <input
                    type='text'
                    placeholder='Enter the Type of business you want to do...'
                    className='w-[350px] rounded-l-md p-3 border-t border-b border-l border-gray-300'
                />
                <div className='border-t border-b border-r border-gray-300 h-full w-2'></div>
                <input
                    type='text'
                    placeholder='Enter another placeholder...'
                    className='w-[350px] -translate-x-1 rounded-r-md p-3 border-t border-b border-r border-gray-300'
                />
                <div className='absolute right-3  transform  bg-yellow-400 h-full pr-3 translate-x-2 pl-2 rounded-r-md'>
                    <IoSearchOutline className='text-white translate-y-3 text-2xl' />
                </div>
            </div>

            <div className='absolute -bottom-7 flex gap-[70px]'>
                <div className='text-black rounded-full bg-yellow-400 p-2'>
                    <IoIosBusiness className='text-[60px]' />
                </div>
                <div className='text-black rounded-full bg-yellow-400 p-2 '>
                    <MdBusinessCenter className='text-[60px]' />
                </div>
                <div className='text-black rounded-full bg-yellow-400 p-2 '>
                    <SiSkypeforbusiness className='text-[60px]' />
                </div>
                <div className='text-black rounded-full bg-yellow-400 p-2 '>
                    <RiAmazonLine className='text-[60px]' />
                </div>
                <div className='text-black rounded-full bg-yellow-400 p-2 '>
                    <SiFlipkart className='text-[60px]' />
                </div>
            </div>
        </div>
    );
};

export default Hero;
