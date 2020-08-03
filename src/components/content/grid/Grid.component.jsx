import React from 'react'
import './grid.style.scss'
import Rating from '../rating/Rating.component'
const Grid = (props) => {
    const {images } = props
    return (
        <>
           <div className = "grid">
               {
                   images.map((image, i) => 
                   
               <div key ={i}>
                   <div className="grid-cell"
                   style = {{backgroundImage : `url(${image.url})`}}
                   >
 
                       <div className = "grid-read-more">
                           <button className = "grid-cell-button">
                               Read More
                           </button>
                       </div>
                        <div className="grid-detail">
                            <samp className = 'grid-detail-title'>Misson Impossible</samp>
                            <div className="grid-detail-rating">
                            <Rating rating = {image.rating} totalStars = {10} className ={''}/>
                                &nbsp; &nbsp;
                                <div className="grid-vote-average">{image.rating}</div>
                            </div>
                        </div>
                   </div>
               </div>
                   )
               }
           </div>
        </>
    )
}

export default Grid
