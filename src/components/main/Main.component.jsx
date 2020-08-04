import React, {useState, useEffect,useRef} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import './main.style.scss'
import MainContent from '../content/main-content/MainContent.component'
import LoaderSvg from '../../loaderSvg/LoaderSvg'
import PropTyps from 'prop-types'
import { loadMoreMovies, setResponsePageNumber } from '../../redux/actions/movies'

const Main = () => {

    const dispatch = useDispatch()
    const [loading, setLoading] = useState(false)
    const list = useSelector(state => state.movies.list)
    const totalPages = useSelector(state => state.movies.totalPages)
    const page = useSelector(state => state.movies.page)
    const movieType = useSelector(state => state.movies.movieType)
    const [currentPage, setCurrentPage] = useState(page)
   
    const mainRef = useRef()
    const bottomLineRef = useRef()
    useEffect(() => {
        console.log(page)
        setLoading(true);
        setTimeout(() => {
            setLoading(false)
        }, 3000);
    }, []) 
    
    useEffect(() => {
      dispatch(setResponsePageNumber(currentPage,totalPages ))
     
        dispatch(loadMoreMovies(movieType, currentPage ))
    }, [ currentPage ,totalPages]) 


    const fetchData = () => {
      let pageNumber = currentPage
        if (page < totalPages) {
          pageNumber += 1
            setCurrentPage(pageNumber)
            dispatch(loadMoreMovies(movieType, pageNumber ))
        }
    }

    const handleScroll = () => {
        const containerHeight = mainRef.current.getBoundingClientRect().height;
        const { top: bottomLineTop } = bottomLineRef.current.getBoundingClientRect();
        if (bottomLineTop <= containerHeight) {
          // fetch data
         
          fetchData();
        }
      };
    

      return (
        <>
          <div className="main" ref={mainRef} onScroll={handleScroll}>
            {loading ? <LoaderSvg /> : <MainContent />}
            <div ref={bottomLineRef}></div>
          </div>
        </>
      );
}

Main.prototype = {
    list : PropTyps.array,
    page : PropTyps.number,
    totalPages : PropTyps.number,
    loadMoreMovies : PropTyps.func,
    setResponsePageNumber : PropTyps.func
}

export default Main
