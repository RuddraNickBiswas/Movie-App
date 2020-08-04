import React, {useState, useEffect} from 'react'
import PropTypes from 'prop-types'

import Interwind from '../../assest/Interwind.svg'


 const LazyImage = (props) => {
     
    const {src , alt, children , className} = props
    const [imageSrc, setImageSrc] = useState(Interwind)
    const [imageRef, setImageRef] = useState('')

    useEffect(() =>{
        let observer;
        let didCancle = false

        if(imageRef && imageSrc !== src) {
            if(IntersectionObserver) {
                observer = new IntersectionObserver(entries =>{
                    entries.forEach((entry => {
                        if (!didCancle && (entry.intersectionRatio > 0 || entry.isIntersecting)){
                            setImageSrc(src)
                            observer.unobserve(imageRef)
                        }
                    } ))
                }, {
                    threshold: 1,
                    rootMargin: '75%'
                } )
                observer.observe(imageRef);
            }else {
                setImageSrc(src)
            }
        }

        return() => {
            didCancle = true
            if(observer && observer.unobesrve){
                observer.unobserve(imageRef)
            }
        }

    },[src, imageSrc, imageRef])
    return (
        <>
            <div className={className} ref = {setImageRef} style ={{backgroundImage : `url(${imageSrc})`}} alt ={alt} >
                
                {children}
            </div>
        </>
    )
}

LazyImage.prototype = {
    src : PropTypes.string,
    alt : PropTypes.string,
    children : PropTypes.any,
    className : PropTypes.any
}

export default LazyImage;