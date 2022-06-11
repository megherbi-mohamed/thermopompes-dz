import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'

const About = () => {
    return (
        <>
            <img className='fixed top-0 left-0 w-full h-full z-[-1]' src="/images/bg_services.jpg" alt="" />
            <div className='w-full'>
                <div className='pt-[150px] pb-[100px] lg:pt-[250px] lg:pb-[150px] px-[15px] text-center relative after:content-[""] after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-[#0000007a] after:z-[-1]'>
                    <h2 className='text-[4rem] text-white font-bold z-10'>A propos</h2>
                    <div className='flex items-center justify-center z-10'>
                        <Link to='/' className="text-[#f35d22] font-bold">Acceuil</Link>
                        <span className='mx-[15px] text-white font-bold'>|</span>
                        <p className='text-white font-bold'>A propos</p>
                    </div>
                </div>
                <div className='w-full bg-white p-[20px] lg:p-[50px]'>

                </div>
            </div>
        </>
    )
}

export default About