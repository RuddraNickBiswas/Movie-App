import * as actionTypes from '../types'
import { MOVIE_API_URL, SEARCH_API_URL ,MOVIE_DETAILS_URL , MOVIE_CREDIT_URL , MOVIE_IMAGES_URL ,MOVIE_VIDEOS_URL, MOVIE_REVIEWS_URL } from '../../services/movice.service'


// const movies = await  MOVIE_API_URL(type, pageNumber)
 // const {results, page, total_pages} = movies.data
 // const pagePayload = {
 //     page,
 //     totalPages: total_pages
 // }
 // dispatch({
 //     type : actionTypes.MOVIE_LIST,
 //     payload :results
 // })

 export const getMovies = (type, pageNumber) => async (dispatch) => {
  try {
    const response = await getMoviesRequest(type, pageNumber);
    const { results, pagePayload } = response;
    dispatchMethod(actionTypes.MOVIE_LIST, results, dispatch);
    dispatchMethod(actionTypes.RESPONST_PAGE, pagePayload, dispatch);
  } catch (error) {
    if (error.response) {
      dispatchMethod(actionTypes.SET_ERROR, error.response.data.message, dispatch);
    }
  }
};

export const loadMoreMovies = (type, pageNumber) => async (dispatch) => {
  try {
    const response = await getMoviesRequest(type, pageNumber);
    const { results, pagePayload } = response;
    dispatchMethod(actionTypes.LOAD_MORE_RESULTS, { list: results, page: pagePayload.page, totalPages: pagePayload.totalPages }, dispatch);
  } catch (error) {
    if (error.response) {
      dispatchMethod(actionTypes.SET_ERROR, error.response.data.message, dispatch);
    }
  }
};

export const searchResult =  (query ) =>  async dispatch => {

  try {
    if(query){
      const movies = await SEARCH_API_URL(query) ;
      const {results} = movies.data
      dispatchMethod(actionTypes.SEARCH_RESULT, results, dispatch);
    } else{
      dispatchMethod(actionTypes.SEARCH_RESULT, [], dispatch);

    }
  }catch(error){
    dispatchMethod(actionTypes.SET_ERROR, error.response.data.message, dispatch);
  }

 
}

  export const setResponsePageNumber = (page, totalPages) => async (dispatch) => {
    const payload = { page, totalPages };
    dispatchMethod(actionTypes.RESPONST_PAGE, payload, dispatch);
  };


export const setMovieType =  (type ) =>  async dispatch => {


  dispatchMethod(actionTypes.MOVIE_TYPE ,type, dispatch )
}

export const searchQuery =  (query ) =>  async dispatch => {


  dispatchMethod(actionTypes.SEARCH_QUERY ,query, dispatch )
}


////movie details function
export const movieDetails = (id) => async dispatch => {

  try {

    const details = await MOVIE_DETAILS_URL(id)
    const credit = await MOVIE_CREDIT_URL(id)
    const images = await MOVIE_IMAGES_URL(id)
    const videos = await MOVIE_VIDEOS_URL(id)
    const reviews = await MOVIE_REVIEWS_URL(id)

    const resp = await Promise.all([details , credit, images , videos ,reviews])
    .then(values => Promise.all(
      values.map(value => value.data)
    )).then(response => response )
    dispatchMethod(actionTypes.MOVIE_DETAILS , resp ,dispatch)

  }catch(error){
    dispatchMethod(actionTypes.SET_ERROR, error.response.data.message, dispatch);
  }

  
}

export const clearMovieDetails =   () =>  async dispatch => {

 dispatchMethod(actionTypes.CLEAR_MOVIE_DETAILS ,[], dispatch )
}
 

const dispatchMethod = (type, payload, dispatch) => {
    dispatch({
        type,
        payload
    })
}

const getMoviesRequest = async (type , pageNumber) => {
    const movies = await  MOVIE_API_URL(type, pageNumber)
    const {results, page, total_pages} = movies.data
    const pagePayload = {
        page,
        totalPages: total_pages
    };
    return {results, pagePayload} 
}