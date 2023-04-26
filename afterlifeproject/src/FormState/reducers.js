import { combineReducers } from "redux"
import { RESET_BUTTONS, BUTTON_OFF, BUTTON_ON, CHANGE_RADIO, RESET_FORM } from "./actionCreators"







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
    switch (action.type) {
        case CHANGE_RADIO:
            return ({ ...state, [action.payload1]: action.payload2 })
        case RESET_FORM:
            return initialFormState
        default:
            return state
    }
}
const initialButtonState = {
    button1: true,
    button2: true,
    button3: true,
    button4: true,
    button5: true,
    button6: true,
    button7: true,
    button8: true,
    button9: true,


}

function togglebutton(state = initialButtonState, action) {
    switch (action.type) {
        case BUTTON_ON:
            if(action.payload1){
                return({...state, [action.payload1]: false})
            }
            if (action.payload2){
               return ({...state, [action.payload1]: false }) 
            }
            
        case BUTTON_OFF:
            if(action.payload1){
                return({...state, [action.payload1]: false})
            }
            if (action.payload2){
                return ({...state, [action.payload1]: false }) 
             }
        case RESET_BUTTONS:
            return initialButtonState
        default:
            return state
    }
}

export default combineReducers({ formReducer, togglebutton })