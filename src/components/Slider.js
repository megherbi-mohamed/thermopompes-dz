import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import './Slider.css'

export default function Slider(props) {

    let images = props.images;

    const [slideIndex, setSlideIndex] = useState(1)
    let intiDropDown = {button1:'!visible md:!translate-y-[0] !opacity-100',button2:'',button3:'',button4:'',button5:''}
    const [dropDown, setdropDown] = useState(intiDropDown)

    var intervalTime = 4000;
    
    const nextSlide = () => {
        if(slideIndex !== 5){
            if (slideIndex === 1) {
                setdropDown({button1:'!visible md:!translate-y-[0] !opacity-100'})
            }
            else if (slideIndex === 2) {
                setdropDown({button2:'!visible md:!translate-y-[0] !opacity-100'})
            }
            else if (slideIndex === 3) {
                setdropDown({button3:'!visible md:!translate-y-[0] !opacity-100'})
            }
            else if (slideIndex === 4) {
                setdropDown({button4:'!visible md:!translate-y-[0] !opacity-100'})
            }
        } 
        else if (slideIndex === 5){
            setSlideIndex(5)
            setdropDown({button5:'!visible md:!translate-y-[0] !opacity-100'})
            setSlideIndex(1)
            
        }
    }

    // const prevSlide = () => {
    //     if(slideIndex !== 1){
    //         setSlideIndex(slideIndex - 1)
    //     }
    //     else if (slideIndex === 1){
    //         setSlideIndex(dataSlider.length)
    //     }
    // }

    // var sildeInterval = setInterval(nextSlide, intervalTime);

    const moveDot = index => {
        if (index === 1) {
            setSlideIndex(1)
            setdropDown({button1:'!visible md:!translate-y-[0] !opacity-100'})
        }
        else if (index === 2) {
            setSlideIndex(2)
            setdropDown({button2:'!visible md:!translate-y-[0] !opacity-100'})
        }
        else if (index === 3) {
            setSlideIndex(3)
            setdropDown({button3:'!visible md:!translate-y-[0] !opacity-100'})
        }
        else if (index === 4) {
            setSlideIndex(4)
            setdropDown({button4:'!visible md:!translate-y-[0] !opacity-100'})
        }
        else if (index === 5) {
            setSlideIndex(5)
            setdropDown({button5:'!visible md:!translate-y-[0] !opacity-100'})
        }
    }

    useEffect(() => {
        // console.log(slideIndex);
        // clearInterval(sildeInterval)
        // setInterval(nextSlide, intervalTime);
        // var sildeInterval = setInterval(nextSlide, intervalTime);
    }, [slideIndex])
    
    
    return (
        <div className="container-slider">
            <>
                {images.map(function(image,i){
                    return (
                        <div key={i} className={slideIndex === i + 1 ? "slide active-anim" : "slide"} >
                            <img src={image.url} />
                        </div>
                    )
                })}

                <div className="container-dots">
                    {images.map(function(image,i){
                        let button = 'button'+i
                        return (
                        <div className="svg-wrapper" onClick={() => moveDot(i + 1)}>
                            <svg height="40" width="40" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="20" cy="20" r="10" className={slideIndex === i + 1 ? "shape shape-active" : "shape"} height="10" width="10"></circle>
                            </svg>
                            <div className="circle"></div>
                        </div>  
                        )
                    })}
                </div>
                {/* <Link className={`w-[92%] md:w-auto absolute bottom-[96px] md:bottom-[96px] left-[50%] md:left-auto -translate-x-[50%] md:translate-x-0 md:right-[165px] invisible opacity-0 translate-y-[40px] py-[12px] px-[35px] bg-white text-black text-sm text-center rounded-[5px] transition duration-[600ms] ease-in-out outline outline-0 outline-black hover:outline-[3px] hover:bg-black hover:text-white ${dropDown.button1}`} to="/">Discover</Link>
                <Link className={`w-[92%] md:w-auto absolute bottom-[96px] md:bottom-[96px] left-[50%] md:left-auto -translate-x-[50%] md:translate-x-0 md:right-[165px] invisible opacity-0 translate-y-[40px] py-[12px] px-[35px] bg-white text-black text-sm text-center rounded-[5px] transition duration-[600ms] ease-in-out outline outline-0 outline-black hover:outline-[3px] hover:bg-black hover:text-white ${dropDown.button2}`} to="/">Discover</Link>
                <Link className={`w-[92%] md:w-auto absolute bottom-[96px] md:bottom-[96px] left-[50%] md:left-auto -translate-x-[50%] md:translate-x-0 md:right-[165px] invisible opacity-0 translate-y-[40px] py-[12px] px-[35px] bg-white text-black text-sm text-center rounded-[5px] transition duration-[600ms] ease-in-out outline outline-0 outline-black hover:outline-[3px] hover:bg-black hover:text-white ${dropDown.button3}`} to="/">Discover</Link>
                <Link className={`w-[92%] md:w-auto absolute bottom-[96px] md:bottom-[96px] left-[50%] md:left-auto -translate-x-[50%] md:translate-x-0 md:right-[165px] invisible opacity-0 translate-y-[40px] py-[12px] px-[35px] bg-white text-black text-sm text-center rounded-[5px] transition duration-[600ms] ease-in-out outline outline-0 outline-black hover:outline-[3px] hover:bg-black hover:text-white ${dropDown.button4}`} to="/">Discover</Link>
                <Link className={`w-[92%] md:w-auto absolute bottom-[96px] md:bottom-[96px] left-[50%] md:left-auto -translate-x-[50%] md:translate-x-0 md:right-[165px] invisible opacity-0 translate-y-[40px] py-[12px] px-[35px] bg-white text-black text-sm text-center rounded-[5px] transition duration-[600ms] ease-in-out outline outline-0 outline-black hover:outline-[3px] hover:bg-black hover:text-white ${dropDown.button5}`} to="/">Discover</Link> */}
                
            </>
            
        </div>
    )
}
