import React from 'react'
import './mainContent.style.scss'
import SlideShow from '../slide-show/SlideShow.component'
const MainContent = () => {
    const images =[
        {
            url:"https://images.pexels.com/photos/255379/pexels-photo-255379.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        },
        {
            url:"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg"
        },
        {
            url:"https://cdn.pixabay.com/photo/2016/02/10/21/57/heart-1192662__340.jpg"
        },
        {
            url:"https://cdn.pixabay.com/photo/2018/08/21/23/29/fog-3622519_960_720.jpg"
        }

    ]

    return (
        <div className = "main-content">
            <SlideShow images = {images} auto = {true}  showArrows = {true}/>
            <div className="grid-movie-title">
                <div className = "movieType">Now Playing</div>
                <div className = "paginate">Paginate</div>
            </div>
            {/* ditsplay grid component */}
        </div>
    )
}

export default MainContent
