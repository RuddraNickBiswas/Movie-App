import React,{useState , useEffect} from 'react'

import './slideShow.style.scss'



const SlideShow = ({images , auto, showArrows}) => {

    
    const [state , setState] = useState({slideShow : images[0], slideIndex : 0})

    const {slideShow , slideIndex } = state;
    const [currentIndex ,setCurrentIndex] =  useState(0)
    const [sliderInterval, setSliderInterval] = useState(0)
    // const currentSlideIndex = 0
    let currentSlideIndex = 0
    useEffect (() => {

        if(auto) {
            const timeInterval = setInterval(() => {
                autoMoveSlide()
            }, 5000);
            setSliderInterval(timeInterval)
    
            return () => {
                clearInterval(timeInterval)
                clearInterval(sliderInterval)
            }
        }
     //eslint-disable-next-line
    },[])

    const autoMoveSlide = () =>  {
        let lastIndex = 0;
        lastIndex = currentSlideIndex + 1 
        currentSlideIndex = lastIndex >= images.length  ? 0 : lastIndex
        setState(prev => ({
            ...prev,
            slideShow: images[currentSlideIndex],
            slideIndex: currentSlideIndex
        }))
    }

    const moveSlideWithArrows = (type) => {
        let index = currentIndex
        if(type === 'prev'){
            if(currentIndex <= 0) {
                index = images.length -1
            } else {
                index -= 1
            }
        }else if (type === 'next') {
            if(currentIndex === images.length - 1) {
                index = 0
            }else{
                index += 1
            }
        }
        setCurrentIndex(index)
        setState(prev => ({
            ...prev,
            slideShow: images[index],
            slideIndex: index
        }))
    }
//functional component
    const RenderArrows = () => {
        return (
            <div className="slider-arrows">
                <div className = "slider-arrow slider-arrow--left" onClick = {() => moveSlideWithArrows('prev')} />
                <div className = "slider-arrow slider-arrow--right" onClick = {() => moveSlideWithArrows('next')} />
            </div>
        )
    }

    const Indicators = (props) => {
        const {currentSlide} =props
        const listIndicarors = images.map((slide , i) => {
            const btnClasses = i === currentSlide ? 'slider-navButton slider-navButton--active' : 'slider-navButton'
            return <button className = {btnClasses} key = {i} />
        })
        return <div className="slider-nav">{listIndicarors}</div>
    }
    //functional component

    return (
        <>
            <div className="slider">
                <div className="slider-slides">
                   { 
                   images && images.length && slideShow && (

                   <div className="slider-image"
                    style = {{backgroundImage : `url(${slideShow.url})`}}>
                    </div>    

                   )
                 }
                </div>
                <Indicators currentSlide ={slideIndex}/>
                {showArrows ?  <RenderArrows /> :  null}
               
            </div>
        </>
    )
} 


// SlideShow.PropTypes = {
//     images: PropTypes.array.isRequired,
    
// }

export default SlideShow
