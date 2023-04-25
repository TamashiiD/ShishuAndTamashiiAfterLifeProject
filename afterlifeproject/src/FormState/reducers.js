import { combineReducers } from "redux"
import { CHANGE_RADIO } from "./actionCreators"







const initialFormState = {
    Question1: "",
    Question2: "",
    Question3: "",
    Question4: "",
    Question5: "",
    Question6: "",
    Question7: "",
    Question8: "",
    Question9: "",

}

function formReducer(state = initialFormState, action) {
switch(action.type){
    case CHANGE_RADIO:
        return({...state, [action.payload1]: action.payload2})
    default:
        return state
}
}

export default combineReducers({formReducer})