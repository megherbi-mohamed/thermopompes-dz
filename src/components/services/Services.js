import React from 'react'
import { useParams,Link } from 'react-router-dom'
import Chauffage_centrale from './Chauffage_centrale'
import Climatisation from './Climatisation'
import Desenfumage from './Desenfumage'
import Installation_gaz from './Installaion_gaz'
import Plombrie_sanitaire from './Plombrie_sanitaire'
import Reparation_chaudiere from './Reparation_chaudiere'
import Reseau_incendie from './Reseau_incendie'

const Services = () => {

    const {name}  = useParams()

    if (!name) {
        return (
            <>
                <img className='fixed top-0 left-0 w-full h-full z-[-1]' src="/images/bg_services.jpg" alt="" />
                <div className='w-full'>
                    <div className='pt-[150px] pb-[100px] lg:pt-[250px] lg:pb-[150px] px-[15px] text-center relative after:content-[""] after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-[#0000007a] after:z-[-1]'>
                        <h2 className='text-[4rem] text-white font-bold z-10'>Services</h2>
                        <div className='flex items-center justify-center z-10'>
                            <Link to='/' className="text-[#f35d22] font-bold">Acceuil</Link>
                            <span className='mx-[15px] text-white font-bold'>|</span>
                            <p className='text-white font-bold'>Services</p>
                        </div>
                    </div>
                    <div className='w-full bg-white p-[20px] lg:p-[50px]'>
                        <div className='2xl:w-full xl:w-[1200px] lg:w-[1000px] w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-[20px] lg:gap-[40px]'>
                            <div>
                                <Link to='/services/chauffage-central'>
                                    <div className='w-full relative h-[200px] lg:h-[350px] overflow-hidden cursor-pointer transition duration-[400ms] ease-in-out hover:opacity-[0.7]'>
                                        <img className='w-full absolute left-0 top-[50%] translate-y-[-50%]' src="/images/bg_chauffage_central.jpeg" alt="" />
                                    </div>
                                </Link>
                                <h3 className='text-[#0f2c49] text-[1.3rem] font-bold text-center mt-[15px]'>Chauffage Centrale</h3>
                            </div>
                            <div>
                                <Link to='/services/reseau-insendie'>
                                    <div className='w-full relative h-[200px] lg:h-[350px] overflow-hidden cursor-pointer transition duration-[400ms] ease-in-out hover:opacity-[0.7]'>
                                        <img className='w-full absolute left-0 top-[50%] translate-y-[-50%]' src="/images/bg_reseau_incendie.jpeg" alt="" />
                                    </div>
                                </Link>
                                <h3 className='text-[#0f2c49] text-[1.3rem] font-bold text-center mt-[15px]'>Réseau Incendie</h3>
                            </div>
                            <div>
                                <Link to='/services/plombrie-sanitaire'>
                                    <div className='w-full relative h-[200px] lg:h-[350px] overflow-hidden cursor-pointer transition duration-[400ms] ease-in-out hover:opacity-[0.7]'>
                                        <img className='w-full absolute left-0 top-[50%] translate-y-[-50%]' src="/images/bg_services.jpg" alt="" />
                                    </div>
                                </Link>
                                <h3 className='text-[#0f2c49] text-[1.3rem] font-bold text-center mt-[15px]'>Plombrie Sanitaire</h3>
                            </div>
                            <div>
                                <Link to='/services/installation-gaz'>
                                    <div className='w-full relative h-[200px] lg:h-[350px] overflow-hidden cursor-pointer transition duration-[400ms] ease-in-out hover:opacity-[0.7]'>
                                        <img className='w-full absolute left-0 top-[50%] translate-y-[-50%]' src="/images/bg_services.jpg" alt="" />
                                    </div>
                                </Link>
                                <h3 className='text-[#0f2c49] text-[1.3rem] font-bold text-center mt-[15px]'>Installation Gaz</h3>
                            </div>
                            <div>
                                <Link to='/services/desenfumage'>
                                    <div className='w-full relative h-[200px] lg:h-[350px] overflow-hidden cursor-pointer transition duration-[400ms] ease-in-out hover:opacity-[0.7]'>
                                        <img className='w-full absolute left-0 top-[50%] translate-y-[-50%]' src="/images/bg_desenfumage.jpg" alt="" />
                                    </div>
                                </Link>
                                <h3 className='text-[#0f2c49] text-[1.3rem] font-bold text-center mt-[15px]'>Désenfumage</h3>
                            </div>
                            <div>
                                <Link to='/services/climatisation'>
                                    <div className='w-full relative h-[200px] lg:h-[350px] overflow-hidden cursor-pointer transition duration-[400ms] ease-in-out hover:opacity-[0.7]'>
                                        <img className='w-full absolute left-0 top-[50%] translate-y-[-50%]' src="/images/bg_services.jpg" alt="" />
                                    </div>
                                </Link>
                                <h3 className='text-[#0f2c49] text-[1.3rem] font-bold text-center mt-[15px]'>Climatisation</h3>
                            </div>
                            <div>
                                <Link to='/services/reparation-chaudiere'>
                                    <div className='w-full relative h-[200px] lg:h-[350px] overflow-hidden cursor-pointer transition duration-[400ms] ease-in-out hover:opacity-[0.7]'>
                                        <img className='w-full absolute left-0 top-[50%] translate-y-[-50%]' src="/images/bg_services.jpg" alt="" />
                                    </div>
                                </Link>
                                <h3 className='text-[#0f2c49] text-[1.3rem] font-bold text-center mt-[15px]'>Réparation tous types de chaudière</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
    if (name === 'chauffage-central') {
        return <Chauffage_centrale />
    }
    if (name === 'reseau-insendie') {
        return <Reseau_incendie />
    }
    if (name === 'plombrie-sanitaire') {
        return <Plombrie_sanitaire />
    }
    if (name === 'installation-gaz') {
        return <Installation_gaz />
    }
    if (name === 'desenfumage') {
        return <Desenfumage />
    }
    if (name === 'climatisation') {
        return <Climatisation />
    }
    if (name === 'reparation-chaudiere') {
        return <Reparation_chaudiere />
    }
}

export default Services