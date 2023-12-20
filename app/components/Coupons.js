import React from 'react'

import c2 from '../../assets/c2.jpeg'
import c3 from '../../assets/c3.jpeg'
import Image from 'next/image'
import { data } from '../data/data'
import { FaCheckCircle } from "react-icons/fa";
import { IoMdCall } from "react-icons/io";
import { CiMapPin } from "react-icons/ci";
import { CiClock2 } from "react-icons/ci";
import { FaMapMarkerAlt } from "react-icons/fa";


const Coupons = () => {
  return (
      <div className='pb-10 w-10/12 mx-auto mt-16'>
          <h2 className='text-2xl'>New! Coupons and Deals</h2>
          <div className='bg-yellow-300 w-[1070px] h-[3px]'></div>
          <div className='flex justify-around pt-4 gap-7'>
              {
                  data.map((data) => (
                      <div key={data.id} className='border flex flex-col gap-2'>
                          <Image src={data.image} height={10} width={350} />
                          <div className='flex justify-between ml-2 mr-2 mt-2'>
                              <p className='text-yellow-400 text-[0.8rem]'>{data.cuisine}</p>
                              <div className='flex items-center gap-1'>
                                  <p className='text-[0.8rem] text-green-300'><CiClock2 /></p>
                                  <p className='text-[0.8rem] text-green-300'>{data.status}</p>
                              </div>

                          </div>
                          <div className='flex items-center ml-2 gap-1'>
                              <p className='font-semibold'>{data.name}</p>
                              <p className='text-blue-400'><FaCheckCircle /></p>
                          </div>
                          <p className='text-[0.8rem] text-gray-500 ml-2'>{data.cuisine}</p>
                          <div className='flex items-center justify-between ml-2 mr-2'>
                              <p className='text-[0.8rem] bg-green-500 rounded-sm p-[2px]'>{data.rating}</p>
                              <div className='flex gap-1 items-center'>
                                  <p className='text-[0.8rem]'><FaMapMarkerAlt /></p>
                                  <p className='text-[0.8rem]'>{data.location}</p>
                              </div>
                          </div>
                          <div className='flex justify-between ml-2 mr-2 '>
                              <div className='flex items-center gap-1 translate-x-12'>
                                  <p className='text-grey-300 text-[0.8rem]'><IoMdCall /></p>
                                  <p className='text-grey-300 text-[0.8rem]'>{data.call}</p>
                              </div>
                              <div className='flex items-center gap-1 justify-center -translate-x-16 border-l-2 pl-8'>
                                  <p className='text-grey-300 text-[0.8rem]'><CiMapPin /></p>
                                  <p className='text-grey-300 text-[0.8rem]'>{data.map}</p>
                              </div>
                          </div>

                      </div>
                  ))
              }
          </div>
      </div>
  )
}

export default Coupons