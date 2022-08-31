import mongoose from "mongoose";
import accountSchema from "./accounts.js";


const {Schema, model} = mongoose;

const customerSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    phoneNo: {
        type: String,
        required: true
    },
    accounts: [accountSchema]

})

const user = model('Customers', customerSchema);

export default user;