import React, {useState, useEffect} from 'react'
import {getMovies, setMovieType, setResponsePageNumber, searchQuery, searchResult ,clearMovieDetails} from '../../redux/actions/movies'
import {useDispatch , useSelector} from 'react-redux'
import {useHistory , useLocation} from 'react-router-dom'
import './header.style.scss'
import logo from '../../assest/logo.png'


 const Header = () => {
     let [navClass, setNavClass] = useState(false)
     let [menuClass, setMenuClass] = useState(false)
     let [search, setSearch] = useState('')
     let [disableSearch, setDisableSearch] = useState(false)
     const [type, setType] = useState("now_playing")

     const location =useLocation()
    
     const dispatch = useDispatch()
     
    //  const list = useSelector(state => state.movies.list)
     const page = useSelector(state => state.movies.page)
     const totalPages = useSelector(state => state.movies.totalPages)
     
    const history = useHistory()

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
        dispatch(setResponsePageNumber(page, totalPages))
        if(location.pathname !== '/' && location.key) {
           
            setDisableSearch(true)
        }
    }, [ dispatch, type , location])

    const setMovieTypeUrl = (type ) => {
        setDisableSearch(false)
        if(location.pathname !== '/') {
            clearMovieDetails()
            history.push('/')
            setType(type)
            setMovieType(type)
        }else{
             setType(type)
            dispatch(setMovieType(type))
        }
    }
   const onSearchChange = (e) => {
       
       setSearch(e.target.value)
       dispatch(searchQuery(e.target.value))
       dispatch(searchResult(e.target.value))
   } 

   const navigateToHome = () => {
       dispatch(clearMovieDetails())
       setDisableSearch(false)
       history.push('/')
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
               <div className="header-image" onClick = {() => navigateToHome()} >
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
                className = {`search-input ${disableSearch ? 'disabled' : ''} `} 
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