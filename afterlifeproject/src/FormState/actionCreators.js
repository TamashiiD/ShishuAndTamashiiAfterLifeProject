
export const RESET_FORM = "RESET_FORM"
export const RESET_BUTTONS = "RESET_BUTTONS"
export const FULL_RESPONSE = "FULL_RESPONSE"
export const TAKE_PICTURE = "TAKE_PICTURE"
export const CLEAR_PICTURE = "CLEAR_PICTURE"


export const takeThePicture = (url) => {
    return ({type:TAKE_PICTURE, payload: url})
}
export const getFullResponse = (response, target) => {
    return({type: FULL_RESPONSE, payload: response, payload2: target})
}

export function formReset(){
    return({type: RESET_FORM})
}

export function clearPhoto(){
    return ({type: CLEAR_PICTURE})
}

export const resetButtons = () => {
return ({type: RESET_BUTTONS})
}



