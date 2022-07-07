import { GETMATRICS } from '../../action/type'

const initialState = {}
export const GetMetrics = (state = initialState, action) => {
    switch (action.type) {
        case GETMATRICS:
            return action.payload

   

        default:
            return state
    }
}