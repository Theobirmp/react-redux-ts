import { ACTIONS } from "../action-types"
import { BankActions } from "../actions"
const initialState=0
const reducer=(state:number=initialState,action:BankActions)=>{
    switch (action.type) {
        case ACTIONS.WIDTHDRAW:
            return state - action.payload
        case ACTIONS.DEPOSIT:
            return state + action.payload
        case ACTIONS.BANKRUPT:
            return 0 
        default:
            return state
    }
}
export default reducer