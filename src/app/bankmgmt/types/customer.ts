import { account } from "./account"

export type customer = {
    _id : string,
    name : string,
    gender : string,
    address : string,
    phoneNo : string,
    totalBalance : Number,
    accounts: account[] 
}