import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBriefcase } from '@fortawesome/free-solid-svg-icons'
import { faFilePdf } from '@fortawesome/free-solid-svg-icons'
import { faCode } from '@fortawesome/free-solid-svg-icons'
import { faScrewdriverWrench } from '@fortawesome/free-solid-svg-icons'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { faNewspaper } from '@fortawesome/free-solid-svg-icons'
import { faUserPen } from '@fortawesome/free-solid-svg-icons'
import { faSun } from '@fortawesome/free-regular-svg-icons'
import { faBarsStaggered } from '@fortawesome/free-solid-svg-icons'





const Navbar = () => {
    return (
        <div className='w-[66px] flex flex-col gap-2'>
            <div className="bg-[#0C0C0C] center rounded-3xl w-full h-16 cursor-pointer group">
                <FontAwesomeIcon className='h-[26px] w-[26px] text-[#fff] group-hover:text-[#78cc6d]' icon={faBarsStaggered} />
            </div>
            <div className="bg-[#0c0c0c] center rounded-3xl w-full h-16 cursor-pointer group">
                <FontAwesomeIcon className='h-[26px] w-[26px] text-[#fff] group-hover:text-[#78cc6d]' icon={faSun} />
            </div>
            <div className="bg-[#0c0c0c] rounded-3xl w-full cursor-pointer ">
                <Link className='w-full py-5 inline-flex justify-center relative group' href="">
                    <FontAwesomeIcon className='h-4 text-[#fff] group-hover:text-[#78cc6d]' icon={faUserPen} />
                    <div className="absolute left-[65%] transition-all duration-300 ease-linear top-1/2 -translate-y-1/2 text-xs text-[#0C0C0C] uppercase py-1 px-3 font-medium bg-[#78cc6d] rounded-full opacity-0 invisible group-hover:visible group-hover:opacity-100 group-hover:left-[75%]">
                        about
                    </div>
                </Link>
                <Link className='w-full py-5 inline-flex justify-center relative group' href="">
                    <FontAwesomeIcon className='h-4 text-[#fff] group-hover:text-[#78cc6d]' icon={faCode} />
                    <div className="absolute left-[65%] transition-all duration-300 ease-linear top-1/2 -translate-y-1/2 text-xs text-[#0C0C0C] uppercase py-1 px-3 font-medium bg-[#78cc6d] rounded-full opacity-0 invisible group-hover:visible group-hover:opacity-100 group-hover:left-[75%]">
                        skills
                    </div>
                </Link>
                <Link className='w-full py-5 inline-flex justify-center relative group' href="">
                    <FontAwesomeIcon className='h-4 text-[#fff] group-hover:text-[#78cc6d]' icon={faScrewdriverWrench} />
                    <div className="absolute left-[65%] transition-all duration-300 ease-linear top-1/2 -translate-y-1/2 text-xs text-[#0C0C0C] uppercase py-1 px-3 font-medium bg-[#78cc6d] rounded-full opacity-0 invisible group-hover:visible group-hover:opacity-100 group-hover:left-[75%]">
                        services
                    </div>
                </Link>
                <Link className='w-full py-5 inline-flex justify-center relative group' href="">
                    <FontAwesomeIcon className='h-4 text-[#fff] group-hover:text-[#78cc6d]' icon={faBriefcase} />
                    <div className="absolute left-[65%] transition-all duration-300 ease-linear top-1/2 -translate-y-1/2 text-xs text-[#0C0C0C] uppercase py-1 px-3 font-medium bg-[#78cc6d] rounded-full opacity-0 invisible group-hover:visible group-hover:opacity-100 group-hover:left-[75%]">
                        projects
                    </div>
                </Link>
                <Link className='w-full py-5 inline-flex justify-center relative group' href="">
                    <FontAwesomeIcon className='h-4 text-[#fff] group-hover:text-[#78cc6d]' icon={faFilePdf} />
                    <div className="absolute left-[65%] transition-all duration-300 ease-linear top-1/2 -translate-y-1/2 text-xs text-[#0C0C0C] uppercase py-1 px-3 font-medium bg-[#78cc6d] rounded-full opacity-0 invisible group-hover:visible group-hover:opacity-100 group-hover:left-[75%]">
                        resume
                    </div>
                </Link>
                <Link className='w-full py-5 inline-flex justify-center relative group' href="">
                    <FontAwesomeIcon className='h-4 text-[#fff] group-hover:text-[#78cc6d]' icon={faNewspaper} />
                    <div className="absolute left-[65%] transition-all duration-300 ease-linear top-1/2 -translate-y-1/2 text-xs text-[#0C0C0C] uppercase py-1 px-3 font-medium bg-[#78cc6d] rounded-full opacity-0 invisible group-hover:visible group-hover:opacity-100 group-hover:left-[75%]">
                        article
                    </div>
                </Link>
                <Link className='w-full py-5 inline-flex justify-center relative group' href="">
                    <FontAwesomeIcon className='h-4 text-[#fff] group-hover:text-[#78cc6d]' icon={faPaperPlane} />
                    <div className="absolute left-[65%] transition-all duration-300 ease-linear top-1/2 -translate-y-1/2 text-xs text-[#0C0C0C] uppercase py-1 px-3 font-medium bg-[#78cc6d] rounded-full opacity-0 invisible group-hover:visible group-hover:opacity-100 group-hover:left-[75%]">
                        contact
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Navbar