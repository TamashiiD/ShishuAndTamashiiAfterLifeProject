

export const CHANGE_RADIO = "CHANGE_RADIO"
export const RESET_FORM = "RESET_FORM"
export const BUTTON_ON = "BUTTON_ON"
export const BUTTON_OFF = "BUTTON_OFF"






export const radioChange = (name, value) =>{
      return({type: CHANGE_RADIO, payload1: name, payload2: value })

}

export const onbutton = () => {
    return({type: BUTTON_ON})
}

export function offButton(){
return({type: BUTTON_OFF})
}


export function formReset(){
    return({type: RESET_FORM})
}






