import { combineReducers } from "redux"
import { CLEAR_PICTURE, FULL_RESPONSE, RESET_FORM, TAKE_PICTURE } from "./actionCreators"







const initialFormState = {
  
}

function fullResponse(state = initialFormState, action) {
    switch (action.type) {
        case FULL_RESPONSE:
            return ({ ...state, [action.payload2] : action.payload })
        case RESET_FORM:
            return initialFormState
        default:
            return state
    }
}

const initialState = {
    picture: ""
}

function savePicture(state= initialState, action){
    switch(action.type){
        case TAKE_PICTURE:
            return({picture: action.payload})
        case CLEAR_PICTURE:
            return({picture: ""})
        case RESET_FORM:
            return({picture: ""})
        default:
            return state
    }
}
export default combineReducers({ savePicture, fullResponse })