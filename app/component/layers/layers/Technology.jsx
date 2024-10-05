"use client"
import { useContext } from 'react'
import { Contex } from '../../../contex/DarkContext'

export const Technology = () => {
    let { dark } = useContext(Contex)
    return (
        <div className={`${dark ? "dark" : null}`}>
            <div className='mt-4 py-75px dark:bg-[#0c0c0c] bg-[#fff]'>
                <div className="content pl-[45px] py-[90px]">
                    <p className='dark:text-[#fff] text-[#0c0c0c]'>Technical Skills</p>
                    <h2 className='mt-3 mv-[45px] dark:text-[#fff] text-[#0c0c0c]'>Technologies</h2>
                    {/* <div className=""></div> */}
                </div>
            </div>
        </div>
    )
}
