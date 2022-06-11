import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClockFour, faEnvelope, faLocationDot, faPaperPlane, faPhone } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
    return (
        <>
            <div className='w-full h-[150px] bg-white'></div>
            <div className='w-full bg-[#0f2c49]'>
                <div className='2xl:w-[1400px] xl:w-[1200px] lg:w-[1000px] w-[90%] absolute top-[-90px] left-[50%] translate-x-[-50%] bg-[#f35d22] relative grid grid-cols-1 xl:grid-cols-[30%_70%] items-center'>
                    <div className='relative overflow-hidden h-[100px] md:h-[250px] xl:h-auto'>
                        <img className='w-full' src="/images/bg-newsletter.jpg" alt="" />
                    </div>
                    <div className='hidden xl:block w-[80px] h-[80px] rounded-full bg-white absolute top-[50%] xl:left-[320px] 2xl:left-[380px] translate-y-[-50%]'>
                        <FontAwesomeIcon icon={faPaperPlane} className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-[#0f2c49] text-[2rem]" />
                    </div>
                    <div className='py-[40px] xl:py-0 xl:p-[40px] 2xl:p-[50px]'>
                        <form className='flex flex-col md:flex-row items-center justify-center w-full'>
                            <input className='border-0 border-b-[2px] border-b-white py-[16px] bg-transparent w-[90%] md:w-[300px] text-white outline-0' type="email" name="email" placeholder='Votre email ...'/>
                            <button type='submit' className='border-[2px] border-black p-[15px] bg-[#0f2c49] text-white mt-[20px] w-[90%] md:mt-0 md:w-[200px]'>Abonnez-vous</button>
                        </form>
                    </div>
                </div>
                <div className='flex flex-col items-center w-[80%] lg:w-[700px] mx-auto'>
                    <img src="/images/logo.png" alt="" />
                    <p className='text-[#e0e0e0] my-[20px] text-center'>Etiam egestas viverra odio, id egestas odio pharetra nec. Nunc a aliquam risus, eget laoreet diam. Etiam quis venenatis lectus.</p>
                </div>
                <div className='w-[80%] xl:w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-[40px] xl:gap-[20px] items-start justify-center pt-[40px] pb-[80px]'>
                    <div className='flex flex-col items-center mx-[50px]'>
                        <div className='w-[60px] h-[60px] rounded-full bg-[#f35d22] relative mb-[10px]'>
                            <FontAwesomeIcon icon={faPhone} className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]  text-white text-[1.5rem]" />
                        </div>
                        <h3 className='text-[1rem] text-white font-bold my-[10px]'>Téléphone:</h3>
                        <p className='text-white'>0661 20 50 11</p>
                    </div>
                    <div className='flex flex-col items-center mx-[50px]'>
                        <div className='w-[60px] h-[60px] rounded-full bg-[#f35d22] relative mb-[10px]'>
                            <FontAwesomeIcon icon={faLocationDot} className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]  text-white text-[1.5rem]" />
                        </div>
                        <h3 className='text-[1rem] text-white font-bold my-[10px]'>Notre bureau:</h3>
                        <p className='text-white'>Lotissement 117 lot 91 local 01 Canastel - Oran</p>
                    </div>
                    <div className='flex flex-col items-center mx-[50px]'>
                        <div className='w-[60px] h-[60px] rounded-full bg-[#f35d22] relative mb-[10px]'>
                            <FontAwesomeIcon icon={faEnvelope} className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]  text-white text-[1.5rem]" />
                        </div>
                        <h3 className='text-[1rem] text-white font-bold my-[10px]'>Email:</h3>
                        <p className='text-white'>eurlthermopompes@gmail.com</p>
                    </div>
                    <div className='flex flex-col items-center mx-[50px]'>
                        <div className='w-[60px] h-[60px] rounded-full bg-[#f35d22] relative mb-[10px]'>
                            <FontAwesomeIcon icon={faClockFour} className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]  text-white text-[1.5rem]" />
                        </div>
                        <h3 className='text-[1rem] text-white font-bold my-[10px]'>Heures d'ouverture:</h3>
                        <p className='text-white'>08:00 - 17:00</p>
                    </div>
                </div>
                <div className='bg-[rgba(0,0,0,.2)] p-[20px]'>
                    <p className='text-white text-center text-[0.9rem]'>Eurl Thermopompes © Tous les droits sont réservés - 2022</p>
                </div>
            </div>
        </>
    )
}

export default Footer