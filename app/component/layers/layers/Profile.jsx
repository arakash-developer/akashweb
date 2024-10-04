import Image from 'next/image'
import React from 'react'
import Akash from '../../../../public/akash.png'

const Profile = () => {
  return (
    <div className='bg-[#0c0c0c] rounded-3xl w-96 h-[38.75rem]'>
        <div className="rounded-b-3xl rounded-tl-3xl w-72 h-72 bg-stone-200 m-10 overflow-hidden">
            <Image className='h-full w-full object-cover' src={Akash} alt='a'/>
        </div>
        <div className="mt-[49px] mb-[57px]">
            <h3 className='font-normal text-sm leading-[170%] uppercase text-center text-[#78cc6d]'>next js developer</h3>
            <h2 className="mt-2 font-semibold text-3xl leading-[107%] text-center text-[#fff]">AR AKASH</h2>
            <div className="icon mt-5">

            </div>
        </div>
    </div>
  )
}

export default Profile