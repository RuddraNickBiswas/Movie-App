import React,{useState, useEffect , Fragment} from 'react'
import {useSelector ,} from 'react-redux'
import PropTypes from 'prop-types'
import {v4 as uuidv4} from 'uuid'
import './searchResult.style.scss'
import '../grid/grid.style.scss'
import Rating from '../rating/Rating.component'
import { IMAGE_URL } from '../../../services/movice.service'
import LazyImage from '../../lazy-image/LazyImage'



const SearchResult = (props) => {

    const searchResult = useSelector(state => state.movies.searchResult)
    const searchQuery = useSelector(state => state.movies.searchQuery)
    const [movieDeta, setMovieDeta] = useState([])
   

    useEffect(() => {
        setMovieDeta(searchResult)
    }, [searchResult])
    

    return (
        <div className = "searchKeyword">
            <div className="grid-search-title">
               <span className = 'grid-text1'>Your search keyword</span> {' '}
    <span className ='grid-text2'>{searchQuery}</span> 
            </div>
           <div className = "grid">
               {
                movieDeta.map((deta) => 
                   
               <Fragment key ={uuidv4()}>
                   {

                  deta.poster_path && <LazyImage 
                   className="grid-cell"
                  src = {`${IMAGE_URL}${deta.poster_path}`}
                  alt = 'placeHolder'
                   >
 
                       <div className = "grid-read-more">
                           <button className = "grid-cell-button">
                               Read More
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
                   }
               </Fragment>
                   )
               }
           </div>
        </div>
    )
}

// SearchResult.prototype = {
//     list : PropTypes.array
// }
export default SearchResult