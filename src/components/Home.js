import React,{useEffect} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCaretRight, faCheck, faDownload, faGuaraniSign, faPaperPlane, faPercent, faPhone, faTruckFast } from '@fortawesome/free-solid-svg-icons'

import './Slider.css'
import Slider from './Slider'

const Home = () => {

    let images = [
        {url: '/images/slide_1.jpg'},
        {url: '/images/slide_2.jpg'},
        {url: '/images/slide_2.jpg'}
    ]
    
    return (
        <div className="w-full">
            <Slider images={images}/>

            <div className='relative w-full md:w-[800px] 2xl:w-[1400px] xl:w-[1200px] lg:w-[1000px] mx-auto mt-[-78px] grid grid-cols-1 md:grid-cols-3'>
                <div className='w-full bg-[#f7f2ed] p-[30px] text-[#0f2c49] text-center md:text-left transition duration-[300ms] ease-in-out hover:translate-y-[-10px]'>
                    <h3 className='text-[1.5rem] font-bold mb-[10px]'>Air Conditioning</h3>
                    <p>Curabitur hendrerit, risus eu elementum faucibus, purus mauris</p>
                </div>
                <div className='w-full bg-[#f35d22] p-[30px] text-white text-center md:text-left transition duration-[300ms] ease-in-out hover:translate-y-[-10px]'>
                    <h3 className='text-[1.5rem] font-bold mb-[10px]'>Air Conditioning</h3>
                    <p>Curabitur hendrerit, risus eu elementum faucibus, purus mauris</p>
                </div>
                <div className='w-full bg-[#0f2c49] p-[30px] text-white text-center md:text-left transition duration-[300ms] ease-in-out hover:translate-y-[-10px]'>
                    <h3 className='text-[1.5rem] font-bold mb-[10px]'>Air Conditioning</h3>
                    <p>Curabitur hendrerit, risus eu elementum faucibus, purus mauris</p>
                </div>
            </div>

            <div className='2xl:w-[1400px] xl:w-[1200px] lg:w-[1000px] md:w-[600px] w-full mx-auto mt-[130px] grid grid-cols-1 lg:grid-cols-2 gap-[40px] px-[20px]'>
                <div className='relative mx-auto'>
                    <div className='absolute top-0 left-0 md:left-[-20px] p-[20px_40px] bg-[#0f2c49]'>
                        <h1 className='text-[2rem] text-[#f35d22] font-bold'>24 years</h1>
                        <p className='text-white font-bold'>of experience</p>
                    </div>
                    <img src="images/about_image.jpg" alt="" />
                    <div className='absolute bottom-0 right-0 md:right-auto md:left-0 md:translate-x-[105%] p-[20px_40px] bg-white flex items-center shadow-[0px_0px_55px_0px_rgb(15_44_73_/_13%)]'>
                        <div className='relative w-[80px] h-[80px] rounded-full bg-[#f35d22] tansition duration-[300ms] ease-in-out hover:bg-[#0f2c49]'>
                            <FontAwesomeIcon icon={faCaretRight} className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-[3rem] text-white" />
                        </div>
                        <div className='ml-[15px]'>
                            <h1 className='text-[1.2rem] text-[#f35d22] font-bold'>Watch</h1>
                            <p className='text-black font-bold'>Video-tour</p>
                        </div>
                    </div>
                </div>
                <div className='text-center lg:text-left'>
                    <div className='mb-[20px] flex items-center justify-center lg:justify-start'>
                        <div className='w-[50px] border border-[#f35d22] mr-[10px]'></div>
                        <span className='text-[0.8rem] text-[#f35d22] font-bold'>À PROPOS DE LA SOCIÉTÉ</span>
                    </div>
                    <h2 className='text-[3rem] font-bold leading-[3.5rem] text-[#0f2c49]'>We create the right <span className='text-[#f35d22]'>climate and temperature </span>for your home</h2>
                    <p className='my-[40px] text-[1.1rem]'>Sed risus augue, commodo ornare felis non, eleifend molestie metus. Donec nec purus porttitor, ultrices diam id, laoreet mi. Aenean sit amet enim quis massa pharetra eleifend.</p>
                    <div className='flex items-center mb-[15px] justify-center lg:justify-start'>
                        <FontAwesomeIcon icon={faCheck} className="text-[#f35d22] text-[1.2rem]" />
                        <span className='text-[1.1rem] text-[#0f2c49] font-bold ml-[15px]'>Qualified specialists</span>
                    </div>
                    <div className='flex items-center mb-[15px] justify-center lg:justify-start'>
                        <FontAwesomeIcon icon={faCheck} className="text-[#f35d22] text-[1.2rem]" />
                        <span className='text-[1.1rem] text-[#0f2c49] font-bold ml-[15px]'>5 years warranty</span>
                    </div>
                    <div className='flex items-center mb-[15px] justify-center lg:justify-start'>
                        <FontAwesomeIcon icon={faCheck} className="text-[#f35d22] text-[1.2rem]" />
                        <span className='text-[1.1rem] text-[#0f2c49] font-bold ml-[15px]'>Bonus system</span>
                    </div>
                    <div className='flex flex-col md:flex-row items-center mt-[70px] justify-center lg:justify-start'>
                        <div className='flex items-center mr-[20px] mb-[20px] md:mb-0'>
                            <div className='relative w-[80px] h-[80px] rounded-full bg-[#f35d22] tansition duration-[300ms] ease-in-out hover:bg-[#0f2c49]'>
                                <FontAwesomeIcon icon={faPhone} className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-[2rem] text-white" />
                            </div>
                            <span className='text-[1.1rem] text-[#0f2c49] ml-[10px] font-bold'>0661 20 50 11</span>
                        </div>
                        {/* <div className='flex items-center'>
                            <div className='relative w-[80px] h-[80px] rounded-full bg-[#f35d22] tansition duration-[300ms] ease-in-out hover:bg-[#0f2c49]'>
                                <FontAwesomeIcon icon={faDownload} className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-[2rem] text-white" />
                            </div>
                            <span className='text-[1.1rem] text-[#0f2c49] ml-[10px] font-bold'>Download Prices</span>
                        </div> */}
                    </div>
                </div>
            </div>

            <div className='w-full bg-[#f7f2ed] py-[100px] px-[40px] md:p-[140px_0_160px] mt-[100px] relative'>
                <img className='absolute h-full top-0 left-0 z-[-1]' src="images/befor_1.png" alt="" />
                <div className='2xl:w-[1400px] xl:w-[1200px] lg:w-[1000px] w-full mx-auto flex flex-col lg:flex-row justify-between items-start'>
                    <div className='w-full mx-auto lg:w-[25%] text-center lg:text-left'>
                        <div className='mb-[20px] flex items-center justify-center lg:justify-start'>
                            <div className='w-[50px] border border-[#f35d22] mr-[10px]'></div>
                            <span className='text-[0.8rem] text-[#f35d22] font-bold'>NOS SERVICES</span>
                        </div>
                        <h2 className='text-[3rem] font-bold leading-[3.5rem] text-[#0f2c49]'>Nous offrons une <span className='text-[#f35d22]'>gamme complète </span>de services pour votre maison</h2>
                        <p className='my-[40px] text-[1.1rem]'>Vivamus viverra, ante nec varius pharetra, ligula velit sodales velit, a bibendum ante arcu non dui. Vivamus sed nisi in neque dapibus placerat.</p>
                    </div>
                    <div className='w-full lg:w-[70%] mx-auto grid grid-cols-[100%] md:grid-cols-[repeat(2,50%)] lg:grid-cols-[repeat(2,315px)] 2xl:grid-cols-[repeat(3,315px)] gap-[20px] justify-center px-0 md:px-[40px] lg:px-0'>
                        <div className='w-full h-[350px] bg-white flex flex-col items-center p-[30px]'>
                            <div className='w-[110px] h-[110px] rounded-full bg-[#f35d22] relative'>
                                <img className='w-[60px] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]' src="/images/services-icons/chauffage_central_icon.png" alt="" />
                            </div>
                            <h3 className='text-[1.5rem] text-[#0f2c49] font-bold my-[20px]'>Chauffage Central</h3>
                            <p className='text-[#0f2c49] text-center'>Vestibulum augue tortor, consequat eu diam a, varius pulvinar ipsum.</p>
                        </div>
                        <div className='w-full h-[350px] bg-white flex flex-col items-center p-[30px]'>
                            <div className='w-[110px] h-[110px] rounded-full bg-[#f35d22] relative'>
                                <img className='w-[60px] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]' src="/images/services-icons/reseau_incendie_icon.png" alt="" />
                            </div>
                            <h3 className='text-[1.5rem] text-[#0f2c49] font-bold my-[20px]'>Réseau Incendie</h3>
                            <p className='text-[#0f2c49] text-center'>Duis ultricies sodales finibus. In ac feugiat eros luctus sem.</p>
                        </div>
                        <div className='w-full h-[350px] bg-white flex flex-col items-center p-[30px]'>
                            <div className='w-[110px] h-[110px] rounded-full bg-[#f35d22] relative'>
                                <img className='w-[60px] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]' src="/images/services-icons/plombrie_sanitaire_icon.png" alt="" />
                            </div>
                            <h3 className='text-[1.5rem] text-[#0f2c49] font-bold my-[20px]'>Plombrie Sanitaire</h3>
                            <p className='text-[#0f2c49] text-center'>Duis ultricies sodales finibus. In ac feugiat eros luctus sem.</p>
                        </div>
                        <div className='w-full h-[350px] bg-white flex flex-col items-center p-[30px]'>
                            <div className='w-[110px] h-[110px] rounded-full bg-[#f35d22] relative'>
                                <img className='w-[60px] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]' src="/images/services-icons/installation_gaz_icon.png" alt="" />
                            </div>
                            <h3 className='text-[1.5rem] text-[#0f2c49] font-bold my-[20px]'>Installation Gaz</h3>
                            <p className='text-[#0f2c49] text-center'>Pellentesque id vestibulum ligula, quis vestibulum mi malesuada gravida.</p>
                        </div>
                        <div className='w-full h-[350px] bg-white flex flex-col items-center p-[30px]'>
                            <div className='w-[110px] h-[110px] rounded-full bg-[#f35d22] relative'>
                                <img className='w-[60px] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]' src="/images/services-icons/desenfumage_icon.png" alt="" />
                            </div>
                            <h3 className='text-[1.5rem] text-[#0f2c49] font-bold my-[20px]'>Désenfumage</h3>
                            <p className='text-[#0f2c49] text-center'>Nullam sollicitudin diam sit amet neque lacinia, sit amet convallis lorem vehicula.</p>
                        </div>
                        <div className='w-full h-[350px] bg-white flex flex-col items-center p-[30px]'>
                            <div className='w-[110px] h-[110px] rounded-full bg-[#f35d22] relative'>
                                <img className='w-[60px] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]' src="/images/services-icons/climatisation_icon.png" alt="" />
                            </div>
                            <h3 className='text-[1.5rem] text-[#0f2c49] font-bold my-[20px]'>Climatisation</h3>
                            <p className='text-[#0f2c49] text-center'>Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
                        </div>
                        <div className='w-full h-[350px] bg-white flex flex-col items-center p-[30px]'>
                            <div className='w-[110px] h-[110px] rounded-full bg-[#f35d22] relative'>
                                <img className='w-[70px] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]' src="/images/services-icons/reparation_chaudiere.png" alt="" />
                            </div>
                            <h3 className='text-[1.5rem] text-[#0f2c49] font-bold my-[20px]'>Réparation tous types de chaudière</h3>
                            <p className='text-[#0f2c49] text-center'>Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='w-full px-[50px] py-[100px] xl:p-[100px]'>
                <div className='2xl:w-[1400px] xl:w-[1200px] lg:w-[1000px] w-full mx-auto grid grid-cols-1 lg:grid-cols-3'>
                    <div className='flex flex-col items-center xl:relative mb-[40px] xl:mb-0 after:content-[""] after:absolute after:top-0 after:right-0 after:border after:border-[#f35d22] after:h-[70px]'>
                        <FontAwesomeIcon icon={faTruckFast} className="text-[#f35d22] text-[4rem]" />
                        <h3 className='text-[1.5rem] text-[#0f2c49] font-bold my-[20px]'>Free Shipping</h3>
                        <p className='text-[#0f2c49] text-center'>Quisque blandit ante vel imperdiet ultrices</p>
                    </div>
                    <div className='flex flex-col items-center xl:relative mb-[40px] xl:mb-0 after:content-[""] after:absolute after:top-0 after:right-0 after:border after:border-[#f35d22] after:h-[70px]'>
                        <FontAwesomeIcon icon={faGuaraniSign} className="text-[#f35d22] text-[4rem]" />
                        <h3 className='text-[1.5rem] text-[#0f2c49] font-bold my-[20px]'>5 Years Guarantee</h3>
                        <p className='text-[#0f2c49] text-center'>Quisque blandit ante vel imperdiet ultrices</p>
                    </div>
                    <div className='flex flex-col items-center'>
                        <FontAwesomeIcon icon={faPercent} className="text-[#f35d22] text-[4rem]" />
                        <h3 className='text-[1.5rem] text-[#0f2c49] font-bold my-[20px]'>Discount System</h3>
                        <p className='text-[#0f2c49] text-center'>Quisque blandit ante vel imperdiet ultrices</p>
                    </div>
                </div>
            </div>

            <div className='2xl:w-[1400px] xl:w-[1200px] lg:w-[1000px] w-full mx-auto my-[20px] md:my-[60px] py-[20px] text-center'>
                <span className='text-[0.8rem] text-[#f35d22] font-bold'>NOS PRODUITS</span>
                <h2 className='text-[3rem] font-bold leading-[3.5rem] text-[#0f2c49]'>PRODUITS POPULAIRES</h2>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[30px] mt-[50px] px-[40px] xl:px-0'>
                    <div className='border-[2px] border-[#ecedee] p-[20px]'>
                        <img src="images/product_1.jpg" alt="" />
                        <h3 className='text-[1.1rem] text-[#0f2c49] font-bold my-[20px]'>Oil Radiator</h3>
                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem</p>
                        <h3 className='text-[1.1rem] text-[#0f2c49] font-bold my-[20px]'>$64.00</h3>
                    </div>
                    <div className='border-[2px] border-[#ecedee] p-[20px]'>
                        <img src="images/product_2.jpg" alt="" />
                        <h3 className='text-[1.1rem] text-[#0f2c49] font-bold my-[20px]'>Air Conditioner</h3>
                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem</p>
                        <h3 className='text-[1.1rem] text-[#0f2c49] font-bold my-[20px]'>$29.00</h3>
                    </div>
                    <div className='border-[2px] border-[#ecedee] p-[20px]'>
                        <img src="images/product_3.jpg" alt="" />
                        <h3 className='text-[1.1rem] text-[#0f2c49] font-bold my-[20px]'>Universal Remote Control</h3>
                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem</p>
                        <h3 className='text-[1.1rem] text-[#0f2c49] font-bold my-[20px]'>$39.00</h3>
                    </div>
                    <div className='border-[2px] border-[#ecedee] p-[20px]'>
                        <img src="images/product_4.jpg" alt="" />
                        <h3 className='text-[1.1rem] text-[#0f2c49] font-bold my-[20px]'>Water Pump</h3>
                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem</p>
                        <h3 className='text-[1.1rem] text-[#0f2c49] font-bold my-[20px]'>$119.00</h3>
                    </div>
                    <div className='border-[2px] border-[#ecedee] p-[20px]'>
                        <img src="images/product_1.jpg" alt="" />
                        <h3 className='text-[1.1rem] text-[#0f2c49] font-bold my-[20px]'>Oil Radiator</h3>
                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem</p>
                        <h3 className='text-[1.1rem] text-[#0f2c49] font-bold my-[20px]'>$64.00</h3>
                    </div>
                    <div className='border-[2px] border-[#ecedee] p-[20px]'>
                        <img src="images/product_2.jpg" alt="" />
                        <h3 className='text-[1.1rem] text-[#0f2c49] font-bold my-[20px]'>Air Conditioner</h3>
                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem</p>
                        <h3 className='text-[1.1rem] text-[#0f2c49] font-bold my-[20px]'>$29.00</h3>
                    </div>
                    <div className='border-[2px] border-[#ecedee] p-[20px]'>
                        <img src="images/product_3.jpg" alt="" />
                        <h3 className='text-[1.1rem] text-[#0f2c49] font-bold my-[20px]'>Universal Remote Control</h3>
                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem</p>
                        <h3 className='text-[1.1rem] text-[#0f2c49] font-bold my-[20px]'>$39.00</h3>
                    </div>
                    <div className='border-[2px] border-[#ecedee] p-[20px]'>
                        <img src="images/product_4.jpg" alt="" />
                        <h3 className='text-[1.1rem] text-[#0f2c49] font-bold my-[20px]'>Water Pump</h3>
                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem</p>
                        <h3 className='text-[1.1rem] text-[#0f2c49] font-bold my-[20px]'>$119.00</h3>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Home