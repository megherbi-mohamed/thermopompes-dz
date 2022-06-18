import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

import Zoom from './Zoom'

const Chauffage_centrale = () => {

    let initZoom = {image:'',display:''}
    const [zoom, setzoom] = useState(initZoom)

    const images = [
        {url: '/images/chauffage-central/img_1.jpg'},
        {url: '/images/chauffage-central/img_2.jpg'},
        {url: '/images/chauffage-central/img_3.jpg'},
        {url: '/images/chauffage-central/img_4.jpg'},
        {url: '/images/chauffage-central/img_5.jpg'},
        {url: '/images/chauffage-central/img_6.jpg'},
        {url: '/images/chauffage-central/img_7.jpg'},
        {url: '/images/chauffage-central/img_8.jpg'},
        {url: '/images/chauffage-central/img_9.jpg'},
        {url: '/images/chauffage-central/img_10.jpg'}
    ]

    return (
        <>
            <img className='fixed top-0 left-0 w-full h-full z-[-1]' src="/images/bg_chauffage_central.jpeg" alt="" />
            <div className='w-full'>
                <div className='pt-[150px] pb-[100px] lg:pt-[250px] lg:pb-[150px] px-[15px] text-center relative after:content-[""] after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-[#0000007a] after:z-[-1]'>
                    <h2 className='text-[4rem] text-white font-bold z-10'>Chauffage Central</h2>
                    <div className='flex items-center justify-center z-10'>
                        <Link to='/' className="text-[#f35d22] font-bold">Acceuil</Link>
                        <span className='mx-[15px] text-white font-bold'>|</span>
                        <p className='text-white font-bold'>Chauffage central</p>
                    </div>
                </div>
                <div className='w-full bg-white p-[20px] lg:p-[50px]'>
                    <div className='2xl:w-full xl:w-[1200px] lg:w-[1000px] w-full mx-auto grid grid-cols-1 lg:grid-cols-3 gap-[20px] lg:gap-[40px]'>
                        {images.map((image,index)=>(
                            <div className="svg-wrapper h-[200px] lg:h-[300px] w-full my-0 mx-auto relative">
                                <div className='w-full h-full absolute left-0 top-0 bg-[#000] overflow-hidden service-hover'>
                                    <img className='w-full absolute left-0 top-[50%] translate-y-[-50%]' src={image.url} alt="" />
                                    <div className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-0 h-0 rounded-full bg-[#000000c7] overflow-hidden'>
                                        <FontAwesomeIcon icon={faSearch} className="absolute top-[50%] left-[50%] !translate-x-[-50%] !translate-y-[-50%] text-0 text-white cursor-pointer"/>
                                    </div>
                                </div>
                                <svg height="100%" width="100%" xmlns="http://www.w3.org/2000/svg" onClick={()=>setzoom({image:image.url,display:'!block'})}>
                                    <rect className="shap" height="100%" width="100%" />
                                </svg>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Zoom image={zoom.image} display={zoom.display} setzoom={setzoom} />
        </>
    )
}

export default Chauffage_centrale