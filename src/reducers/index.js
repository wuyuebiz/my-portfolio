import { combineReducers } from 'redux'
import userReducer from './userReducer'

const papayaRepairAppPartner = combineReducers({
    user: userReducer,
})

export default function (state, action) {
    return papayaRepairAppPartner(state, action)
}
