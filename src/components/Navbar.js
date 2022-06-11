import React, {useState,useEffect} from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faEnvelope, faLocationArrow, faPhone, faArrowRight, faSearch, faAngleRight, faXmark, faBars } from '@fortawesome/free-solid-svg-icons'
import {faFacebookF } from '@fortawesome/free-brands-svg-icons'

const Navbar = () => {

    const [search, setsearch] = useState('')
    
    const [homeBorder, sethomeBorder] = useState('')
    const [aboutBorder, setaboutBorder] = useState('')
    const [servicesBorder, setservicesBorder] = useState('')
    const [contactBorder, setcontactBorder] = useState('')
    
    const [dropDown, setdropDown] = useState('')

    let initNavbar = {height:'',transform:'',boxShadow:''};
    const [navbar, setnavbar] = useState(initNavbar)
    
    const dispatch = useDispatch();

    const displaySideBar = () => {
        dispatch({ type: 'display', payload: {sideBar:'!translate-x-[0]',hideBody:'!block'}})
    }

    useEffect(() => {
        window.addEventListener("scroll", runOnScroll)
        return () => {
            window.removeEventListener("scroll", runOnScroll);
        }
    },[]);

    var lastScrollTop = 0;
    function runOnScroll() {
        var st = window.pageYOffset || document.documentElement.scrollTop;
        if (st === 0){
            setnavbar({height:'',transform:'',boxShadow:''})
        } 
        else if (st > lastScrollTop){
            setnavbar({height:'!h-[70px] !top-0',transform:'!-translate-y-[100%]',boxShadow:''})
        } else {
            setnavbar({height:'!h-[70px] !top-0',transform:'',boxShadow:'0 4px 20px #0000000a'})
        }
        lastScrollTop = st <= 0 ? 0 : st;
    }

    return (
        <>
            <div className='w-full'>
                <div className={`w-full bg-[#0f2c49] z-40 fixed top-0 left-0 transition ease-in-out duration-[300ms] delay-0 ${navbar.transform}`}>
                    <div className='2xl:w-[1400px] xl:w-[1200px] lg:w-[1000px] mx-auto flex items-center justify-center lg:justify-between'>
                        <div className='hidden md:flex items-center'>
                            <div className='flex items-center mr-[20px] py-[17px]'>
                                <FontAwesomeIcon icon={faEnvelope} className="text-[0.8rem] text-[#f35d22]" />
                                <span className='text-white text-[0.8rem] ml-[10px]'>eurlthermopompes@gmail.com</span>
                            </div>
                            <div className='flex items-center mr-[20px] py-[17px]'>
                                <FontAwesomeIcon icon={faLocationArrow} className="text-[0.8rem] text-[#f35d22]" />
                                <span className='text-white text-[0.8rem] ml-[10px]'>Lotissement 117 lot 91 local 01 Canastel - Oran</span>
                            </div>
                            <div className='flex items-center py-[17px]'>
                                <FontAwesomeIcon icon={faPhone} className="text-[0.8rem] text-[#f35d22]" />
                                <div className='flex items-center'>
                                    <span className='text-white text-[0.8rem] ml-[10px]'>0661 20 50 11</span>
                                </div>
                            </div>
                        </div>
                        <div className='items-center hidden lg:flex'>
                            <span className='text-white hidden xl:block'>Suivez-nous - </span>
                            <FontAwesomeIcon icon={faFacebookF} className="text-[0.8rem] text-[#f35d22] mx-[10px]" />
                            <Link to="/contact" className='text-white flex items-center bg-[#f35d22] py-[15px] px-[30px] ml-[30px] link-hover'>
                                <span className='font-bold text-[0.95rem]'>Lire la suite</span>
                                <FontAwesomeIcon icon={faArrowRight} className="text-[0.9rem] ml-[10px]" />
                            </Link>
                        </div>
                    </div>
                </div>
                <div className={`z-40 w-full h-[70px] md:h-[100px] fixed top-0 md:top-[50px] left-0 bg-[#fff] border-box transition ease-in-out duration-[300ms] delay-0 ${navbar.height} ${navbar.transform}`} style={{boxShadow:`${navbar.boxShadow}`}}>
                    <div className='h-full 2xl:w-[1400px] xl:w-[1200px] lg:w-[1000px] mx-auto flex items-center justify-center relative'>
                        <FontAwesomeIcon onClick={()=>displaySideBar()} icon={faBars} className="lg:hidden text-[1.7rem] text-[#0f2c49] absolute top-[50%] translate-y-[-50%] right-[20px]" />
                        <div className='w-auto lg:w-1/3'>
                            <img src="/images/logo.png" alt="" />
                        </div>
                        <div className='w-1/3 lg:flex items-center justify-center hidden'>
                            <div className='mx-[20px] py-[5px] relative hover:text-[#f35d22]' onMouseEnter={() => sethomeBorder('!w-[50px]')} onMouseLeave={() => sethomeBorder('')}>
                                <Link to='/' className='text-[0.9rem] font-bold'>Acceuil</Link>
                                <div className={`absolute bottom-[0] left-[0] border-b-2 border-[#f35d22] transition-[width] ease-in-out duration-500 w-0 ${homeBorder}`}></div>
                            </div>
                            <div className='mx-[20px] py-[20px] relative' onMouseEnter={() => {setservicesBorder('!w-[65px]');setdropDown('!visible !translate-y-[0] !opacity-100')}} onMouseLeave={() => {setservicesBorder('');setdropDown('')}}>
                                <Link to='/services' className='text-[0.9rem] font-bold flex items-center py-[5px] relative hover:text-[#f35d22]'>
                                    Services
                                    <FontAwesomeIcon icon={faAngleRight} className="text-[0.7rem] text-[#f35d22] ml-[5px]" />
                                    <div className={`absolute bottom-[0] left-[0] border-b-2 border-[#f35d22] transition-[width] ease-in-out duration-500 w-0 ${servicesBorder}`}></div>
                                </Link>
                                <div className={`absolute z-10 w-[250px] left-[50%] translate-x-[-50%] top-[60px] invisible opacity-0 translate-y-[20px] transition ease-in-out duration-500 p-[15px] bg-white flex flex-col drop-shadow-sm ${dropDown}`}>
                                    <Link to="/services/chauffage-central" className="p-[10px] text-black hover:text-white hover:bg-[#f35d22]" onClick={()=>setdropDown('')}>Chauffage Centrale</Link>
                                    <Link to="/services/reseau-insendie" className="p-[10px] text-black hover:text-white hover:bg-[#f35d22]" onClick={()=>setdropDown('')}>Réseau Incendie</Link>
                                    <Link to="/services/plombrie-sanitaire" className="p-[10px] text-black hover:text-white hover:bg-[#f35d22]" onClick={()=>setdropDown('')}>Plombrie Sanitaire</Link>
                                    <Link to="/services/installation-gaz" className="p-[10px] text-black hover:text-white hover:bg-[#f35d22]" onClick={()=>setdropDown('')}>Installation Gaz</Link>
                                    <Link to="/services/desenfumage" className="p-[10px] text-black hover:text-white hover:bg-[#f35d22]" onClick={()=>setdropDown('')}>Désenfumage</Link>
                                    <Link to="/services/climatisation" className="p-[10px] text-black hover:text-white hover:bg-[#f35d22]" onClick={()=>setdropDown('')}>Climatisation</Link>
                                    <Link to="/services/reparation-chaudiere" className="p-[10px] text-black hover:text-white hover:bg-[#f35d22]" onClick={()=>setdropDown('')}>Réparation tous types de chaudière</Link>
                                </div>
                            </div>
                            <div className='mx-[20px] py-[20px] relative' onMouseEnter={() => setaboutBorder('!w-[60px]')} onMouseLeave={() => setaboutBorder('')}>
                                <Link to='/about' className='text-[0.9rem] font-bold flex items-center py-[5px] relative hover:text-[#f35d22]'>
                                    A propos
                                    <div className={`absolute bottom-[0] left-[0] border-b-2 border-[#f35d22] transition-[width] ease-in-out duration-500 w-0 ${aboutBorder}`}></div>
                                </Link>
                            </div>
                            <div className='mx-[20px] py-[5px] relative hover:text-[#f35d22]' onMouseEnter={() => setcontactBorder('!w-[58px]')} onMouseLeave={() => setcontactBorder('')}>
                                <Link to='/contact' className='text-[0.9rem] font-bold'>Contacts</Link>
                                <div className={`absolute bottom-[0] left-[0] border-b-2 border-[#f35d22] transition-[width] ease-in-out duration-500 w-0 ${contactBorder}`}></div>
                            </div>
                        </div>
                        <div className='w-1/3 hidden lg:flex items-center justify-end'>
                            <div className={`w-[80%] mr-[20px] hidden ${search}`}>
                                <form className='relative'>
                                    <input type="text" name="text" placeholder='Search' className='p-[10px] w-full border-[2px] border-[#dbdbdb] rounded-[5px] outline-0 transition-[border] duration-400 ease-in-out focus:border-[#f35d22]' />
                                    <FontAwesomeIcon icon={faXmark} className="text-[1.2rem] text-[#dbdbdb] hover:text-[#f35d22] cursor-pointer absolute right-[10px] top-[50%] translate-y-[-50%]" onClick={()=>setsearch('')}/>
                                </form>
                            </div>
                            <FontAwesomeIcon icon={faSearch} className="text-[1.2rem] hover:text-[#f35d22] cursor-pointer" onClick={()=>setsearch('!block')}/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar