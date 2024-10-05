"use client"
import Image from 'next/image'
import Akash from '../../../../public/akash.png'
import { Contex } from '../../../contex/DarkContext'
import { useContext } from 'react'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'

const Profile = () => {
    let { dark } = useContext(Contex)
    return (
        <div className={`${dark ? "dark" : null}`}>
            <div className='bg-[#fff] dark:bg-[#0c0c0c] text-[#0c0c0c] rounded-3xl p-10  h-[38.75rem]'>
                <div className="rounded-b-3xl rounded-tl-3xl w-72 h-72 bg-stone-200 overflow-hidden">
                    <Image className='h-full w-full object-cover' src={Akash} alt='a' />
                </div>
                <div className="mt-[49px] mb-[57px]">
                    <h3 className='font-normal text-sm leading-[170%] uppercase text-center text-[#78cc6d]'>next js developer</h3>
                    <h2 className="mt-2 font-semibold text-3xl leading-[107%] text-center dark:text-[#fff] text-[#0c0c0c]">AR AKASH</h2>
                    <div className="icon mt-5">
                        <Link href='#'>
                            <FontAwesomeIcon icon={faLinkedin} />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile