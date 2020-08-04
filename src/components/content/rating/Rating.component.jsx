import React, {useState, useEffect, Fragment, useRef} from 'react'
import './rating.style.scss'
import PropTypes from 'prop-types'

const Rating = ({rating , totalStars , className} ) => {

     const [numberOfStars, setNumberOfStars] = useState([])   
    const ratingRef = useRef()
     useEffect(() => {
        
         setNumberOfStars([...Array(totalStars).keys()].map((i) => i + 1))
       
        //some bug need to fix 
        let percentage;
        if(rating <= 5){
            percentage = (rating / 5) * 100
        } else {
            percentage = (rating / 10) * 100
        }
        //some bug need to fix
        const starPercentage = `${Math.floor(percentage)}%`
        
        ratingRef.current.style.width = starPercentage
     }, [rating , totalStars])

    return (
        <div className = 'star-ratng'>
            <div className = {`back-stars ${className}`}>
                {
                  numberOfStars.map(i => ( 
                    <Fragment key = {i}>
                    <i className ="fa fa-star" area-hidden ="true" />
                    </Fragment>
                    ) )
                }
               
               
               <div className= {`front-stars ${className}`} ref = {ratingRef} >
               {
                   numberOfStars.map(i => ( 
                    <Fragment key = {i}>
                    <i className ="fa fa-star" area-hidden ="true" />
                    </Fragment>
                    ) )
                }
              
               </div>
            </div>
        </div>
    )
}

Rating.prototype = {
    rating : PropTypes.number.isRequired,
    totalStars : PropTypes.number.isRequired,
    className : PropTypes.string,
};

export default Rating
