import React, {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinus, faXmark, faPlus, faSearch } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

const SideBar = () => {

    const display = useSelector((state) => state.display);
    const dispatch = useDispatch();
    const hide = () => {
        dispatch({ type: 'display', payload: {sideBar:'',hideBody:''}})
    }

    const [height, setheight] = useState({height:'',icon:faPlus})
    const [clickHeight, setclickHeight] = useState(0)

    const setclick = () => {
        setclickHeight((prev) => prev + 1)
        if (clickHeight%2 === 0) {setheight({icon:faMinus,height:'!h-[350px]'})}
        else {setheight({height:'',icon:faPlus})}
    }

    return (
        <div className={`w-full h-full flex lg:hidden z-50 fixed top-0 left-0 transition duration-500 ease-in-out -translate-x-[100%] ${display.sideBar}`}>
            <div className="bg-[#0f2c49] w-full md:w-[450px] h-full overflow-hidden">
                <div className="pt-[32px] flex justify-center">
                    <img src="/images/logo.png" alt="" />
                </div>
                <FontAwesomeIcon onClick={()=>hide()} icon={faXmark} className="text-[2.5rem] text-[#f35d22] absolute top-[45px] right-[40px]" />
                <div className='px-[20px] py-[40px]'>
                    <Link className='text-[1.2rem] font-bold text-white py-[10px]' to='/' onClick={()=>hide()}>Acceuil</Link>
                    <Link className='text-[1.2rem] font-bold text-white py-[10px] mt-[20px] block' to='/About' onClick={()=>hide()}>A props</Link>
                    <div className='flex justify-between items-center my-[20px]'>
                        <Link to='/services' className='text-[1.2rem] font-bold text-white' onClick={()=>hide('')}>Services</Link>
                        <FontAwesomeIcon onClick={()=>setclick()} icon={height.icon} className="text-[1.5rem] text-[#f35d22]" />
                    </div>
                    <div className={`flex flex-col h-0 mb-[20px] transition-[height] duration-[300ms] ease-in-out overflow-hidden ${height.height}`}>
                        <Link to="/services/chauffage-central" className="text-[1.2rem] font-bold text-[#f35d22] py-[10px]" onClick={()=>hide('')}>Chauffage Centrale</Link>
                        <Link to="/services/reseau-insendie" className="text-[1.2rem] font-bold text-[#f35d22] py-[10px]" onClick={()=>hide('')}>Réseau Incendie</Link>
                        <Link to="/services/plombrie-sanitaire" className="text-[1.2rem] font-bold text-[#f35d22] py-[10px]" onClick={()=>hide('')}>Plombrie Sanitaire</Link>
                        <Link to="/services/installation-gaz" className="text-[1.2rem] font-bold text-[#f35d22] py-[10px]" onClick={()=>hide('')}>Installation Gaz</Link>
                        <Link to="/services/desenfumage" className="text-[1.2rem] font-bold text-[#f35d22] py-[10px]" onClick={()=>hide('')}>Désenfumage</Link>
                        <Link to="/services/climatisation" className="text-[1.2rem] font-bold text-[#f35d22] py-[10px]" onClick={()=>hide('')}>Climatisation</Link>
                        <Link to="/services/reparation-chaudiere" className="text-[1.2rem] font-bold text-[#f35d22] py-[10px]" onClick={()=>hide('')}>Réparation tous types de chaudière</Link>
                    </div>
                    <Link className='text-[1.2rem] font-bold text-white py-[10px]' to='/contact' onClick={()=>hide()}>Contact</Link>
                    <div className='mt-[40px]'>
                        <form className='relative'>
                            <input type="text" name="text" placeholder='Search' className='p-[15px] w-full border-[2px] border-[#dbdbdb] rounded-[5px] outline-0 transition-[border] duration-400 ease-in-out focus:border-[#f35d22]' />
                            <FontAwesomeIcon icon={faSearch} className="text-[1.2rem] text-[#dbdbdb] hover:text-[#f35d22] cursor-pointer absolute right-[20px] top-[50%] translate-y-[-50%]"/>
                        </form>
                    </div>
                </div>
            </div>
            {/* <div className="w-full w-[10%] md:w-[calc(100%-450px)] h-full bg-[#000]" onClick={()=>hide()}></div> */}
        </div>
    )
}

export default SideBar