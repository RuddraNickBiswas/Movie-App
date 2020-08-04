import * as actionTypes from '../types'

const initialState = {
    list : [],
    page : 1,
    totalPages : 0,
    movieType : 'now_playing'

} 


export default (state = initialState , action) => {

    switch (action.type) {
        case actionTypes.MOVIE_LIST :
          return{
              ...state,
              list: action.payload 
          };
          case actionTypes.RESPONST_PAGE:
            return {
              ...state,
              page: action.payload.page,
              totalPages: action.payload.totalPages
            };
            case actionTypes.LOAD_MORE_RESULTS:
            
      return {
        ...state,
        list: [...state.list, ...action.payload.list],
        page: action.payload.page,
        totalPages: action.payload.totalPages
      };
      case actionTypes.MOVIE_TYPE :
        return {
          ...state,
          movieType : action.payload
        };

        default :
        return state
    }

}