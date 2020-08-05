import React, {useState, useEffect} from 'react'
import {getMovies, setMovieType, setResponsePageNumber, searchQuery, searchResult} from '../../redux/actions/movies'
import {useDispatch , useSelector} from 'react-redux'
import './header.style.scss'
import logo from '../../assest/logo.svg'
import { Search } from 'semantic-ui-react'

 const Header = () => {
     let [navClass, setNavClass] = useState(false)
     let [menuClass, setMenuClass] = useState(false)
     let [search, setSearch] = useState('')
     const [type, setType] = useState("now_playing")

    
     const dispatch = useDispatch()
     
    //  const list = useSelector(state => state.movies.list)
     const page = useSelector(state => state.movies.page)
     const totalPages = useSelector(state => state.movies.totalPages)
     
     const HEADER_LIST =[
        {
            id: 1,
             iconClass: 'fas fa-film',
            name : 'Now Playing',
             type: 'now_playing'
        },
        {
            id: 2,
             iconClass: 'fas fa-fire',
             name : 'Popular',
             type: 'popular'
        },
 
        {
            id: 3,
             iconClass: 'fas fa-star',
             name : 'Top Rated',
             type: 'top_rated'
        },
 
        {
            id: 4,
             iconClass: 'fas fa-plus-square',
             name: 'Upcomming',
             type: 'upcoming'
        },
 
    ]
    useEffect(() => {
        
        dispatch(getMovies(type, page))
        // dispatch(setResponsePageNumber(page, totalPages))
    }, [dispatch, type])

    const setMovieTypeUrl = (type ) => {
      setType(type)
      
      dispatch(setMovieType(type))
    }
   const onSearchChange = (e) => {
       console.log(e.target.value)
       setSearch(e.target.value)
       dispatch(searchQuery(e.target.value))
       dispatch(searchResult(e.target.value))
   } 

    const toggleMenu = () => {
        menuClass = !menuClass;
        navClass = !navClass;
        setMenuClass(menuClass)
        setNavClass(navClass)
        if(navClass) {
            document.body.classList.add('header-nav-open')
        }else{
            document.body.classList.remove('header-nav-open')
        }

    }

    return (
        <>
            <div className = "header-nav-wrapper" >
            <div className="header-bar"></div>
            <div className="header-navbar">
               <div className="header-image">
                   <img src={logo} alt="logo "/>
                </div> 
                <div
                 className= {`${menuClass ? 'header-menu-toggle is-active' : 'header-menu-toggle ' }` } 
                 id = 'header-mobile-menu'
                 onClick = {() => toggleMenu()}
                 >
                    <span className = 'bar'></span>
                    <span className = 'bar'></span>
                    <span className = 'bar'></span>
                </div>
                <ul className = {`${navClass ? 'header-nav header-mobile-nav' : 'header-nav'} `}>
                   {
                       HEADER_LIST.map(data => (
                         <li
                         key = {data.id}
                         onClick = {() => setMovieTypeUrl(data.type)}
                         className = { data.type === type ? "header-nav-item active-item" : "header-nav-item"}>
                             <span className = 'header-list-icon'>
                                 <i className = {data.iconClass}></i> 
                             </span>
                             &nbsp;
                             <span className =' header-list-name'>{data.name}</span>
                         </li>  
                       ))
                   }
               <input
                className ="search-input" 
                 type = "text"
                 value ={search}
                 onChange = {onSearchChange}
                 placeholder = "search for a movie"
                 />
                </ul>
            </div>
            </div>
        </>
    )
}

export default Header