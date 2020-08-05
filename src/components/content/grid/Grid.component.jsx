import React,{useState, useEffect} from 'react'
import {useSelector} from 'react-redux'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'
import {v4 as uuidv4} from 'uuid'
import './grid.style.scss'
import Rating from '../rating/Rating.component'
import { IMAGE_URL } from '../../../services/movice.service'
import LazyImage from '../../lazy-image/LazyImage'
const Grid = (props) => {

    const list = useSelector(state => state.movies.list)
    const [movieDeta, setMovieDeta] = useState([])
     
    useEffect(() => {
        setMovieDeta(list)
    }, [list])
    
    const formatMovieTitle = (title) => {
        const titleStr = title.toLowerCase()
        
        return titleStr.replace(/ /g, '-')
    }

    return (
        <>
           <div className = "grid">
               {
                   movieDeta.map((deta) => 
                   
               <div key ={uuidv4()}>
                   <LazyImage 
                   className="grid-cell"
                  src = {`${IMAGE_URL}${deta.poster_path}`}
                  alt = 'placeHolder'
                   >
 
                       <div className = "grid-read-more">
                           <button className = "grid-cell-button">
                            <Link to = {`/${deta.id}/${formatMovieTitle(deta.title)}/details`}>Read More</Link>
                           </button>
                       </div>
                        <div className="grid-detail">
                            <samp className = 'grid-detail-title'>{deta.title}</samp>
                            <div className="grid-detail-rating">
                            <Rating rating = {deta.vote_average} totalStars = {10} className ={''}/>
                                &nbsp; &nbsp;
                                <div className="grid-vote-average">{deta.vote_average}</div>
                            </div>
                        </div>
                   </LazyImage>
               </div>
                   )
               }
           </div>
        </>
    )
}
Grid.prototype = {
    list : PropTypes.array
}
export default Grid
