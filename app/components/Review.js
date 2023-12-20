import Image from 'next/image'
import React from 'react'
import review from '../../assets/review.jpeg'
import { review1 } from '../data/review1'
import { CgProfile } from "react-icons/cg";
const Review = () => {
    return (
        <div className='mt-5'>
            <h2 className='text-2xl lg:ml-0 ml-9'>Customer Reviews</h2>
            <div className='bg-yellow-300 lg:w-[1070px] w-[290px] h-[3px] lg:ml-0 ml-9'></div>


            <div className='pt-5 pb-10 flex justify-evenly gap-16'>
                <div className='lg:flex hidden lg:flex-col'>
                    <Image src={review} height={300} width={610} className='rounded-md' />
                    <p className='text-[0.8rem] text-yellow-400 pt-3'>vishaldfw</p>
                    <p className='text-[0.6rem]'>Write a review</p>
                    <p>Arzona Luxuru Art Club</p>
                    <p className='text-[0.6rem]'>This is good <span className='text-yellow-400'>continue reading</span></p>
                    <div className='flex gap-2 text-[0.6rem]'>
                        <button className='border-blue-600 text-blue-600 border rounded-md p-1'>Interesting</button>
                        <button className='border-red-500 rounded-md p-1 border'>LoL</button>
                        <button className='border-red-500 rounded-md p-1 border'>Love</button>
                    </div>
                </div>
                <div className='lg:flex lg:flex-row flex flex-col items-center flex-wrap gap-10 lg:mr-0 mr-9'>
                    {
                        review1.map((data) => (
                            <div key={data.id}>
                                <div className='flex gap-2'>
                                    <div className='relative'>
                                        <Image height={200} width={200} src={data.image} className='rounded-lg' />
                                        <p className='absolute text-gray-500 top-8 text-4xl -right-4'><CgProfile /></p>
                                    </div>
                                    <div className='text-[0.7rem] text-gray-500'>
                                        <p className=''>{data.name}</p>
                                        <p>Wrote a review</p>
                                    </div>
                                </div>
                                <div className='text-[0.7rem] text-gray-500'>
                                    <p>{data.Res_name}</p>
                                    <p>{data.review} <span className='text-yellow-400'>Continue reading...</span></p>
                                </div>
                                <div className='flex gap-2 text-[0.6rem]'>
                                    <button className='border-blue-600 text-blue-600 border rounded-md p-1'>Interesting</button>
                                    <button className='border-red-500 rounded-md p-1 border'>LoL</button>
                                    <button className='border-red-500 rounded-md p-1 border'>Love</button>
                                </div>
                            </div>
                        ))
                    }

                </div>
            </div>

        </div>
    )
}

export default Review