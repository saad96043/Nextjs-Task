import Image from 'next/image'
import React from 'react'
import { CgProfile } from "react-icons/cg";
import { FaPlus } from "react-icons/fa";
import yellowLogo from "../../assets/yellowLogo.png"
const Navbar = () => {
  return (
    <div className='flex justify-between bg-black pt-2 pl-6 pr-6 pb-1'>
      <Image src={yellowLogo} height={200} width={40} />
      <div className='flex gap-5 items-center  justify-around'>
        <div className='flex items-center gap-1'>
          <p className='text-white'><CgProfile /></p>
          <button className='text-white text-[0.7rem]'>Sign in</button>
        </div>
        <div className='relative'>
          <p className='text-white text-[0.7rem] absolute font-extrabold top-2 left-1'><FaPlus /></p>
          <button className='border text-white text-[0.7rem] pl-4 pr-3 pt-1 pb-1 rounded-md'>Add Listing</button>
        </div>

      </div>
    </div>
  )
}

export default Navbar