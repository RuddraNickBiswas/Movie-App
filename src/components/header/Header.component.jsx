import React, {useState, useEffect} from 'react'

 const Header = () => {
     let [navClass, setNavClass] = useState(false)
     let [menuClass, setMenuClass] = useState(false)
<<
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
       
        </>
    )
}

export default Header