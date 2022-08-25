import { combineReducers } from "redux";
import bannkReducer from './bankReducer'
const reducers=combineReducers({
    bank:bannkReducer,
})

export default reducers

export type State=ReturnType<typeof reducers>