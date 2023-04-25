import { combineReducers } from "redux"
import { BUTTON_ON, CHANGE_RADIO, RESET_FORM } from "./actionCreators"







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
    togglebutton: true

}

function formReducer(state = initialFormState, action) {
switch(action.type){
    case CHANGE_RADIO:
        return({...state, [action.payload1]: action.payload2})
    case BUTTON_ON:
        return({...state, togglebutton: false})
    case RESET_FORM:
        return initialFormState
    default:
        return state
}
}

export default combineReducers({formReducer})