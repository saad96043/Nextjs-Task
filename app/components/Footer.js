import React from 'react'
import { About, Location, SiteDirectory, categories } from '../data/Footerdata'
import yellowLogo from "../../assets/yellowLogo.png"
import Image from 'next/image'

const Footer = () => {
    return (

        <div>
            <div className='bg-black text-yellow-400 mt-16 flex justify-around'>
                <div className='flex flex-col justify-evenly gap-4 pt-16 '>
                    <p className='font-bold text-sm'>Popular Categories</p>
                    {
                        categories.map((data) => (
                            <div key={data.id}>
                                <p className='text-[0.7rem]'>{data.name}</p>
                            </div>

                        ))
                    }
                </div>
                <div className='flex flex-col justify-evenly gap-4 pt-16 '>
                    <p className='font-bold text-sm'>Popular Locations</p>

                    {
                        Location.map((data) => (
                            <div key={data.id}>
                                <p className='text-[0.7rem]'>{data.name}</p>
                            </div>

                        ))
                    }
                </div>
                <div className='flex flex-col justify-evenly gap-4 pt-16'>
                    <p className='font-bold text-sm'>About</p>

                    {
                        About.map((data) => (
                            <div key={data.id}>
                                <p className='text-[0.7rem]'>{data.name}</p>
                            </div>

                        ))
                    }
                </div>
                <div className='flex flex-col justify-evenly gap-4 pt-16'>
                    <p className='font-bold text-sm'>Site Directory</p>

                    {
                        SiteDirectory.map((data) => (
                            <div key={data.id}>
                                <p className='text-[0.7rem]'>{data.name}</p>
                            </div>

                        ))
                    }
                </div>

            </div>

            <div className='bg-black text-white flex justify-around text-[0.7rem] items-center pt-12 pb-10'>
                <Image src={yellowLogo} width={40}/>
                <div className='flex flex-col gap-2'>
                    <p className='font-bold'>About us</p>
                    <p>We delivers culinary delights to your doorstep. Enjoy a diverse menu, prompt service, <br/> and a hassle-free dining experience. Order now for a taste of convenience!"</p>
                </div>
                <button className='rounded-[100px] border-white border p-3'>Contact Us</button>
            </div>
        </div>

    )
}

export default Footer