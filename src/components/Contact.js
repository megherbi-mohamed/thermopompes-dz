import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClockFour, faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons'

const Contact = () => {
    return (
        <>
            <img className='fixed top-0 left-0 w-full h-full z-[-1]' src="/images/bg_services.jpg" alt="" />
            <div className='w-full'>
                <div className='pt-[150px] pb-[100px] lg:pt-[250px] lg:pb-[150px] px-[15px] text-center relative after:content-[""] after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-[#0000007a] after:z-[-1]'>
                    <h2 className='text-[4rem] text-white font-bold z-10'>Contacts</h2>
                    <div className='flex items-center justify-center z-10'>
                        <Link to='/' className="text-[#f35d22] font-bold">Acceuil</Link>
                        <span className='mx-[15px] text-white font-bold'>|</span>
                        <p className='text-white font-bold'>Contacts</p>
                    </div>
                </div>
                <div className='w-full bg-white p-[20px] lg:p-[50px]'>
                    <div className='w-[80%] xl:w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-[40px] xl:gap-[20px] items-start justify-center pt-[40px] pb-[80px]'>
                        <div className='flex flex-col items-center text-center relative after:content-[""] after:absolute after:top-0 after:right-0 after:border after:border-[#f35d22] after:h-[70px]'>
                            <div className='w-[60px] h-[60px] rounded-full bg-[#f35d22] relative mb-[10px]'>
                                <FontAwesomeIcon icon={faPhone} className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]  text-white text-[1.5rem]" />
                            </div>
                            <h3 className='text-[1rem] text-[#0f2c49] font-bold my-[10px]'>Téléphone:</h3>
                            <p className='text-[#0f2c49]'>0661 20 50 11</p>
                        </div>
                        <div className='flex flex-col items-center text-center relative after:content-[""] xl:after:hidden after:absolute after:top-0 after:right-0 after:border after:border-[#f35d22] after:h-[70px]'>
                            <div className='w-[60px] h-[60px] rounded-full bg-[#f35d22] relative mb-[10px]'>
                                <FontAwesomeIcon icon={faLocationDot} className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]  text-white text-[1.5rem]" />
                            </div>
                            <h3 className='text-[1rem] text-[#0f2c49] font-bold my-[10px]'>Notre bureau:</h3>
                            <p className='text-[#0f2c49]'>Lotissement 117 lot 91 local 01 Canastel - Oran</p>
                        </div>
                        <div className='flex flex-col items-center text-center relative after:content-[""] after:absolute after:top-0 after:right-0 after:border after:border-[#f35d22] after:h-[70px]'>
                            <div className='w-[60px] h-[60px] rounded-full bg-[#f35d22] relative mb-[10px]'>
                                <FontAwesomeIcon icon={faEnvelope} className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]  text-white text-[1.5rem]" />
                            </div>
                            <h3 className='text-[1rem] text-[#0f2c49] font-bold my-[10px]'>Email:</h3>
                            <p className='text-[#0f2c49]'>eurlthermopompes@gmail.com</p>
                        </div>
                        <div className='flex flex-col items-center text-center mx-[50px]'>
                            <div className='w-[60px] h-[60px] rounded-full bg-[#f35d22] relative mb-[10px]'>
                                <FontAwesomeIcon icon={faClockFour} className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]  text-white text-[1.5rem]" />
                            </div>
                            <h3 className='text-[1rem] text-[#0f2c49] font-bold my-[10px]'>Heures d'ouverture:</h3>
                            <p className='text-[#0f2c49]'>08:00 - 17:00</p>
                        </div>
                    </div>
                    <div className='w-full p-[20px] bg-[#0f2c49]'>
                        <img className='w-full' src="/images/map.png" alt="" />
                    </div>
                    <div className='mx-auto my-[100px] w-[700px] p-[64px] bg-[#f7f2ed] text-center'>
                        <h2 className='text-[2rem] text-[#0f2c49] font-bold'>Envoyer Message</h2>
                        <p className='py-[15px]'>Remplissez ce formulaire et nos spécialistes vous contacteront sous peu pour une consultation détaillée.</p>
                        <form>
                            <div className='flex items-center justify-between mb-[15px]'>
                                <input type="text" name="name" placeholder='Votre nom' autoComplete='off' className='w-[47%] bg-transparent py-[10px] w-full border-b border-b-[#0f2c49] outline-0 transition-[border] duration-400 ease-in-out focus:border-[#f35d22]' />
                                <input type="text" name="email" placeholder='Votre nom' autoComplete='off' className='w-[47%] bg-transparent py-[10px] w-full border-b border-b-[#0f2c49] outline-0 transition-[border] duration-400 ease-in-out focus:border-[#f35d22]' />
                            </div>
                            <textarea name="message" placeholder='Message' className='w-full h-[150px] resize-none bg-transparent py-[10px] w-full border-b border-b-[#0f2c49] outline-0 transition-[border] duration-400 ease-in-out focus:border-[#f35d22]'></textarea>
                            <button type="submit" className='mt-[30px] text-white p-[25px] w-[250px] bg-[#f35d22] transition duration-[400ms] ease-in-out hover:bg-[#0f2c49]'>Envoyer</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact