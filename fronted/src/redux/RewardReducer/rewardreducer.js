import {
  ERROR,
  GET_REWARDS,
  LOAD,
  GET_FAQS,
  ADD_ADDRESS_REQUEST,
  GETUSER,
  LOADING,
  NOT_LOADING
} from "./actiontype"


const iniState = {
  Rewards: [],
  FAQs: [],
  Users: [],
  Address: {},
  cartStatus: true,
  isLoading: false,
  isError: false
}

export const rewardReducer = (state = iniState, {
  type,
  payload
}) => {
  switch (type) {
    case GET_REWARDS:
      return {
        ...state, isLoading: false, Rewards: payload
      }
      case GETUSER:
        return {
          ...state, isLoading: false, Users: payload
        }
        case GET_FAQS:
          return {
            ...state, isLoading: false, FAQs: payload
          }
          case ADD_ADDRESS_REQUEST:
            return {
              ...state, isLoading: false, Address: payload, cartStatus: false
            }
          case LOADING: return {...state,isLoading:true}
          case NOT_LOADING: return {...state,isLoading:false}
            default:
              return state
  }
}