import { ERROR, GET_COURSES, GET_QUESTIONS, LOAD } from "./actionType"

const iniState = {
    courses: [],
    questions: [],
    isLoading: false,
    isError: false
}

export const courseReducer = (state = iniState, {
    type,
    payload
}) => {
    switch (type) {
        case LOAD: return {...state,isLoading:true}
        case ERROR: return {...state,isError:true}
        case GET_COURSES: return {...state,isLoading:false,courses:payload}
        case GET_QUESTIONS: return {...state,isLoading:false,questions:payload}
        default:
            return state
    }
}
