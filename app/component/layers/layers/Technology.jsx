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
import Js from '../../../../public/icon/js.svg'
import Reacti from '../../../../public/icon/react.svg'
import Next from '../../../../public/icon/next.svg'
import Redux from '../../../../public/icon/redux.svg'
import Image from 'next/image'

export const Technology = ({ dark }) => {
    return (
        <div className={`${dark ? "dark" : null}`}>
            <div className='mt-4 py-75px dark:bg-[#0c0c0c] bg-[#fff]'>
                <div className="content pl-[25px] py-[90px]">
                    <p className='dark:text-[#fff] text-[#0c0c0c] border-2 dark:border-[#ffffff1f] rounded-full inline-flex py-2 px-5 items-center gap-2'>
                        <FontAwesomeIcon className='h-3 dark:text-[#fff] group-hover:text-[#78cc6d] text-[#0c0c0c]' icon={faCode} />
                        Technical Skills
                    </p>
                    <h2 className='mt-3 mb-[45px] dark:text-[#fff] text-[#0c0c0c] font-medium text-[2.38rem] leading-[130%]'>Technologies</h2>
                    <div className="flex gap-5">
                        <div className="skill rounded-2xl w-96 h-28 border-2 dark:text-[#fff] text-[#0c0c0c] dark:border-[#ffffff1f]">
                            <Image className='h-5 w-5' src={Next} alt='Next'/>
                        </div>
                        <div className="skill border-2 dark:border-[#ffffff1f] dark:text-[#fff] text-[#0c0c0c] rounded-2xl w-96 h-28">
                            a
                        </div>
                    </div>
                    <div className="flex gap-5 mt-7">
                        <div className="skill border-2 dark:border-[#ffffff1f] dark:text-[#fff] text-[#0c0c0c] rounded-2xl w-96 h-28">
                            a
                        </div>
                        <div className="skill border-2 dark:border-[#ffffff1f] dark:text-[#fff] text-[#0c0c0c] rounded-2xl w-96 h-28">
                            a
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
