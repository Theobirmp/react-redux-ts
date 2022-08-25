import { Action, Dispatch } from "redux"
import { ACTIONS } from "../action-types"

export const depositMoney=(amount:number)=>{
    return ((dispatch:Dispatch<Action>)=>{
        dispatch({
            type:ACTIONS.DEPOSIT,
            payload:amount
        })
    })
}
export const widthdrawMoney=(amount:number)=>{
    return ((dispatch:Dispatch<Action>)=>{
        dispatch({
            type:ACTIONS.WIDTHDRAW,
            payload:amount
        })
    })
}
export const bankrupt=()=>{
    return ((dispatch:Dispatch<Action>)=>{
        dispatch({
            type:ACTIONS.BANKRUPT,
        })
    })
}