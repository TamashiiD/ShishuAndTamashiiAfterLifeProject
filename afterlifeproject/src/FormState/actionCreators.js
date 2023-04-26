

export const CHANGE_RADIO = "CHANGE_RADIO"
export const RESET_FORM = "RESET_FORM"
export const BUTTON_ON = "BUTTON_ON"
export const BUTTON_OFF = "BUTTON_OFF"
export const RESET_BUTTONS = "RESET_BUTTONS"







export const radioChange = (name, value) =>{
      return({type: CHANGE_RADIO, payload1: name, payload2: value })

}

export const onbutton = (buttonname, condition) => {
    return({type: BUTTON_ON, payload1: buttonname, payload2: condition})
}

export function offButton(buttonname, condition){
return({type: BUTTON_OFF, payload1: buttonname, payload2: condition})
}


export function formReset(){
    return({type: RESET_FORM})
}


export const resetButtons = () => {
return ({type: RESET_BUTTONS})
}



