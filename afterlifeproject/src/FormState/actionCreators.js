export const CHANGE_RADIO = "CHANGE_RADIO"


export function radioChange(name, value){
    return({type: CHANGE_RADIO, payload1: name, payload2: value })
}