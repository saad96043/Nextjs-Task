import React from 'react'
import { data } from '../data/data'
import Image from 'next/image'
import { FaCheck } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { CiMapPin } from "react-icons/ci";
import b3 from '../../assets/b3.jpeg'
const Featured = () => {
  return (
      <div className='mt-5'>
          <h2 className='text-2xl'>Featured Restaurants</h2>
          <div className='bg-yellow-300 w-[1070px] h-[3px]'></div>

          <div className='flex justify-center gap-4'>
              <div className='mt-5 flex flex-col gap-4 rounded-md w-[80%]'>
                  {

                      data.map((data) => (
                          <div key={data.id}>
                              <div className='flex gap-3 border'>
                                  <Image src={data.image} height={200} width={200} />
                                  <div className='text-[0.7rem] text-gray-500'>
                                      <p>{data.type}</p>
                                      <div className='flex items-center gap-1'>
                                          <p className='text-black text-[1rem]'>{data.name}</p>
                                          <p className='text-blue-500 font-bold'><FaCheck /></p>
                                      </div>
                                      <p>{data.rating}</p>
                                      <p>{data.price}</p>
                                      <p>{data.address}</p>
                                  </div>
                              </div>
                              <div className='flex border justify-around gap-1b text-[0.8rem] mt-3 text-gray-500'>
                                  <div className='flex items-center'>
                                      <p><IoCall /></p>
                                      <p>{data.call}</p>
                                  </div>
                                  <div className='flex pl-[100px] -translate-x-28 items-center border-l-2 gap-1'>
                                      <p><CiMapPin /></p>
                                      <p>{data.location}</p>
                                  </div>

                              </div>
                          </div>
                      ))
                  }
              </div>
              <div className='mt-5'>
                <Image src={b3} height={900} width={400} className='h-[400px]'/>
              </div>
          </div>
         
    </div>
  )
}

export default Featured