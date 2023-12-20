import Image from 'next/image'
import React from 'react'
import b1 from '../../assets/business1.jpeg'
import b3 from '../../assets/b3.jpeg'
import b4 from '../../assets/b4.jpeg'
import b5 from '../../assets/b5.webp'

const Business = () => {
  return (
      <div className='pt-[110px]  lg:flex lg:flex-row  flex flex-col gap-5 relative  items-center lg:justify-center lg:gap-4 pb-16'>
          <div>
              <Image src={b5} height={300} width={350} className='lg:rounded-none rounded-lg'/>
          </div>
          <div>
              <Image src={b3} height={300} width={350} className='lg:rounded-none rounded-lg' />
          </div>
          <div>
              <Image src={b4} height={300} width={350} className='lg:rounded-none rounded-lg' />
          </div>
      </div>
  )
}

export default Business