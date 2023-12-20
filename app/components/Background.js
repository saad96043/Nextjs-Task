import Image from 'next/image'
import React from 'react'
import banner from '../../assets/banner.jpg'
const Background = () => {
  return (
      <div className='mt-16 bg-yellow-400 h-[270px] flex justify-center items-center gap-4'>
          <div>
              <Image src={banner} height={200} width={300} className='rounded-full bg-cover'/>
          </div>
          <div className='flex flex-col items-start gap-4'>
              <p className='text-[2rem] font-bold'>Take Your local Business <br /> Online and Grow Like a Pro </p>
              <p className='text-[1rem]'>Upgrade your business details including hours, payment <br/> options and more. Many of the benefits of YP are free! </p>
           <button className='bg-yellow-600 p-2 rounded-md items-start'>CLAIM YOUR BUSINESS</button>
          </div>
              
    </div>
  )
}

export default Background