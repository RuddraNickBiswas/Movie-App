import * as actionTypes from '../types'

const initialState = ''


export default (state = initialState , action) => {

    switch (action.type) {
        case actionTypes.SET_ERROR:
            return action.payload
        
        default :
        return state
    }

}