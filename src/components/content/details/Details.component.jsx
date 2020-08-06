import React,  {useState,useEffect} from 'react'
import {useSelector , useDispatch} from 'react-redux'
import {useParams} from 'react-router-dom'
import './details.style.scss'
import Rating from '../rating/Rating.component'
import Tabs from './tabs/Tabs.component'
import Overview from './overview/Overview.component'
import Crew from './crew/Crew.component'
import Media from './media/Media.component'
import Reviews from './review/Reviews.component'
import { movieDetails } from '../../../redux/actions/movies'
import { IMAGE_URL } from '../../../services/movice.service'

const Details = () => {

    const [details, setDetails] = useState()
    const movie = useSelector(state => state.movies.movie)
    const  dispatch = useDispatch()
    const {id} = useParams()
    useEffect(() => {
        if(movie.length === 0){

            const resp = dispatch(movieDetails(id))
            
        }

        setDetails(movie[0])
    }, [id , movie])

    return (
        <>
        {
            details &&
            <div className="movie-container">
              <div className="movie-bg"
              style = {{backgroundImage : `url(${IMAGE_URL}${details.backdrop_path})`}}
              > </div>
              <div className = "movie-overlay" ></div>
              <div className = 'movie-details'> 
              <div className = "movie-image">
                  <img src={`${IMAGE_URL}${details.poster_path}`} alt="movie_image"/>
              </div>
            <div className ='movie-body'>
            <div className = "movie-overview">
                <div className = 'title'>
                 {details.title} <span>{details.release_date}</span>
                </div>
                <div className = 'movie-genres'>
                   <ul className ="genres">
                    {
                        details.genres.map((genre) => 
                            <li key = {genre.id} >{genre.name}</li>
                        )
                    }
                   </ul>
                </div>
                <div className = 'rating'>
                   <Rating className = "rating-stars" rating = {details.vote_average} totalStars = {10} />
                   &nbsp; 
                   <span> {details.vote_average} </span> <p>( {details.vote_count} ) reviews</p>
                </div>
                <Tabs>
                  <div label ="Overview">
                     <Overview/>
                </div>  
                <div label ="Crew">
                    <Crew/>
                </div>  
                <div label ="Media">
                     <Media/>
                </div>  
                <div label ="Reviews">
                   <Reviews/>
                </div>  
                </Tabs>
            </div>
            </div>            
              </div>
          </div>
        }
          
        </>
    )
}

export default Details
