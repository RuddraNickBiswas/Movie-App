import * as actionTypes from '../types'
import { MOVIE_API_URL } from '../../services/movice.service'


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
  
  export const setResponsePageNumber = (page, totalPages) => async (dispatch) => {
    const payload = { page, totalPages };
    dispatchMethod(actionTypes.RESPONST_PAGE, payload, dispatch);
  };


export const setMovieType =  (type ) =>  async dispatch => {


  dispatchMethod(actionTypes.MOVIE_TYPE ,type, dispatch )
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