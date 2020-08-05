import React from 'react'
import './details.style.scss'
import Rating from '../rating/Rating.component'
import Tabs from './tabs/Tabs.component'
import Overview from './overview/Overview.component'
import Crew from './crew/Crew.component'
import Media from './media/Media.component'
import Reviews from './review/Reviews.component'
const Details = () => {
    return (
        <>
          <div className="movie-container">
              <div className="movie-bg"
              style = {{backgroundImage : "url(https://images.unsplash.com/photo-1542281286-9e0a16bb7366?ixlib=rb-1.2.1&w=1000&q=80)"}}
              > </div>
              <div className = "movie-overlay" ></div>
              <div className = 'movie-details'> 
              <div className = "movie-image">
                  <img src="https://images.unsplash.com/photo-1542281286-9e0a16bb7366?ixlib=rb-1.2.1&w=1000&q=80" alt="movie_image"/>
              </div>
            <div className ='movie-body'>
            <div className = "movie-overview">
                <div className = 'title'>
                    Avangers <span>2020-5-4</span>
                </div>
                <div className = 'movie-genres'>
                   <ul className ="genres">
                    <li>Action</li>
                    <li>Comedy</li>
                    <li>Si-Fi</li>
                   </ul>
                </div>
                <div className = 'rating'>
                   <Rating className = "rating-stars" rating = {6.5} totalStars = {10} />
                   &nbsp; 
                   <span>6.5</span> <p>(200) reviews</p>
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
        </>
    )
}

export default Details
