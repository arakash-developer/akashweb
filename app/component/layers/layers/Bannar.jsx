"use client"
import { useContext } from 'react'
import { Contex } from '../../../contex/DarkContext'
import { Technology } from './Technology'
import { Toolstack } from './Toolstack'
const Bannar = () => {
    let { dark } = useContext(Contex)
    return (
        <div className={` w-full ${dark ? "dark" : null} lg:h-[100vh] lg:overflow-scroll lg:no-scrollbar cursor-pointer`}>
                <div className='dark:bg-[#0c0c0c] bg-[#fff] rounded-tr-3xl'>
                    <div className="content pt-[80px] pb-[95px] pl-[45px]">
                        <p className='font-normal text-2xl leading-[130%] dark:text-[#fff] text-[#0c0c0c]'>Hello, I’m <span className='text-[#78cc6d]'>Senior Next Js Developer</span></p>
                        <h1 className='mt-[18px] max-w-[672px] font-medium text-[3.25rem] leading-[130%] dark:text-[#fff] text-[#0c0c0c]'>Senior Web Developer and <span className='text-[#0c0c0c] bg-[#78cc6d] rounded-full px-2 rotate-2 inline-block'>Web Scientist</span>  Based in Dhaka, Bangladesh.</h1>
                        <p className='py-8 font-normal text-sm leading-[170%] dark:text-[#eaeaea] text-[#0c0c0cd3]'>Have worked in a variety of positions, including key developer, solution designer, and data architect.
                            Strong engineering background combined with closely working with business customers.
                        </p>
                        <div className="flex justify-start items-center gap-[100px]">
                            <div className="flex gap-[20px] items-center">
                                <h2 className='font-normal text-6xl leading-[140%] dark:text-[#fff] text-[#0c0c0c]'>96</h2>
                                <p className='font-normal text-sm leading-[170%] dark:text-[#eaeaea] max-w-[80px]'>Completed Projects</p>
                            </div>
                            <div className="flex gap-[20px] items-center">
                                <h2 className='font-normal text-6xl leading-[140%] dark:text-[#fff] text-[#0c0c0c]'>8</h2>
                                <p className='font-normal text-sm leading-[170%] dark:text-[#eaeaea] max-w-[80px]'>Years of Experience</p>
                            </div>
                            <div className="flex gap-[20px] items-center">
                                <h2 className='font-normal text-6xl leading-[140%] dark:text-[#fff] text-[#0c0c0c]'>10+</h2>
                                <p className='font-normal text-sm leading-[170%] dark:text-[#eaeaea] max-w-[80px]'>Awards Winning</p>
                            </div>
                        </div>
                    </div>
                </div>
                <Technology />
                <Technology />
                <Technology />
                <Technology />
                <Technology />
                <Technology />
                <Technology />
                <Technology />
                <Technology />
                <Technology />
                <Technology />
                <Technology />
                <Technology />
                <Technology />
                <Technology />
                <Toolstack />
        </div>
    )
}

export default Bannar