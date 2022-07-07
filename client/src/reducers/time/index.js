import { GETTIME } from '../../action/type'

const initialState = {}


export const GetTime = (state = initialState, action) => {
    switch (action.type) {
        case GETTIME:
            return action.payload

   

        default:
            return state
    }
}