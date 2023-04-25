export const CHANGE_RADIO = "CHANGE_RADIO"
export const RESET_FORM = "RESET_FORM"

export function radioChange(name, value){
    return({type: CHANGE_RADIO, payload1: name, payload2: value })
}

export function formReset(){
    return({type: RESET_FORM})
}