import React, {useState, useEffect} from 'react'
import './mainContent.style.scss'
import SlideShow from '../slide-show/SlideShow.component'
import Paginate from '../paginate/Paginate.component'
import Grid from '../grid/Grid.component'
import {useSelector, useDispatch} from 'react-redux'
import { IMAGE_URL } from '../../../services/movice.service'
import { getMovies, setResponsePageNumber } from '../../../redux/actions/movies'

const MainContent = () => {

    const list = useSelector(state => state.movies.list)
    const movieType = useSelector(state => state.movies.movieType)
    const totalPages = useSelector(state => state.movies.totalPages)
    const page = useSelector(state => state.movies.page)
    const [images, setImages] = useState([])
    
    const [currentPage, setCurrentPage] = useState(page) 

    //list is the movie arrat that containt 20+ value
    const randomMovies =list.sort(() => Math.random()- Math.random()).slice(0,4)
    //this reaturn only 5 random value

    const dispatch = useDispatch()

    const HEADER_TYPE = {
        now_playing : 'Now Playing',
        popular : 'Popular',
        top_rated : 'Top Rated',
        upcoming : "Upcoming"
      }

    useEffect (() =>{
        
        if(randomMovies.length){
            
          const  IMAGES = [ 
            {
                id :1,
                url: `${IMAGE_URL}${randomMovies[0].backdrop_path}`
            },
            {
                id :2,
                url: `${IMAGE_URL}${randomMovies[1].backdrop_path}`
            },
            {
                id :3,
                url: `${IMAGE_URL}${randomMovies[2].backdrop_path}`
            },
            {
                id :4 ,
                url: `${IMAGE_URL}${randomMovies[3].backdrop_path}`
            },
        ]

        setImages(IMAGES)
        }
    },[])

    useEffect(() => {
        
        setCurrentPage(page)
        
    }, [page, totalPages])

    const paginate = type => {
       let pageNumber = currentPage ;
        if(type === 'prev' && currentPage > 1){
            pageNumber -= 1
            
            
        }else{
            pageNumber += 1
        }
        setCurrentPage(pageNumber)
        setResponsePageNumber(pageNumber, totalPages)
        dispatch(getMovies(movieType ,pageNumber))
    }
    return (
        <div className = "main-content">
            <SlideShow images = {images} auto = {true}  showArrows = {true}/>
            <div className="grid-movie-title">
                <div className = "movieType">{HEADER_TYPE[movieType]}</div>
                <div className = "paginate"><Paginate paginate = {paginate} currentPage ={currentPage} totalPages = {totalPages}/></div>
            </div>
            <Grid />
        </div>
    )
}

export default MainContent
