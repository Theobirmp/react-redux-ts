import {ACTIONS} from '../action-types/index'

interface Widthdraw{
    type:ACTIONS.WIDTHDRAW;
    payload:number;
}
interface Deposit{
    type:ACTIONS.DEPOSIT;
    payload:number;
}
interface Bankrupt{
    type:ACTIONS.BANKRUPT;
}
export type BankActions= Widthdraw | Deposit | Bankrupt;