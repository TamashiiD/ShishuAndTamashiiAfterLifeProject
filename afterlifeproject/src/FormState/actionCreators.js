export const CHANGE_RADIO = "CHANGE_RADIO"
export const RESET_FORM = "RESET_FORM"
export const BUTTON_ON = "BUTTON_ON"


export const radioChange = (name, value) => dispatch => {
    dispatch(onbutton())
    return({type: CHANGE_RADIO, payload1: name, payload2: value })
}

const onbutton = () => {
    return({type: BUTTON_ON})
}


export function formReset(){
    return({type: RESET_FORM})
}