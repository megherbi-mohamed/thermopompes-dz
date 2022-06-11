import React,{useState,useEffect} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleRight, faXmark } from '@fortawesome/free-solid-svg-icons'

const Zoom = ({image,display,setzoom}) => {

    let initZoom = {image:'',display:''}
    const [Zoom, setZoom] = useState(initZoom)

    useEffect(() => {
        setZoom({image:image, display:display})
    }, [image])
    
    return (
        <div className={`hidden fixed top-0 left-0 w-full h-full bg-[#000000f0] z-50 ${Zoom.display}`}>
            {/* <FontAwesomeIcon icon={faAngleLeft} className="absolute top-[50%] left-[30px] translate-y-[-50%] text-[2rem] text-white cursor-pointer"/>
            <FontAwesomeIcon icon={faAngleRight} className="absolute top-[50%] right-[30px] translate-y-[-50%] text-[2rem] text-white cursor-pointer"/> */}
            <FontAwesomeIcon icon={faXmark} onClick={()=>setzoom({image:'',display:''})} className="absolute top-[30px] right-[30px] text-[2rem] text-white cursor-pointer"/>
            <img className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] max-w-[800px] max-h-[90%] mx-auto' src={Zoom.image} alt="" />
        </div>
    )
}

export default Zoom