import mongoose from "mongoose";


const {Schema, model} = mongoose;


const transactionHistorySchema = new Schema({
    transactionType: {
        type: String,
        required: true,
        enum: ['Credit','Debit']
    },
    amount: {
        type: Number,
        required: true
    },
    TransactionDate: {
        type: Date,
        required: false
    }
})

const accountSchema = new Schema({
    accountType: {
        type: String,
        required: true
        // enum: ['Saving','Current']
    },
    balance: {
        type: Number,
        required: true
    },
    transactionHistory: [transactionHistorySchema]

})

model('account', accountSchema);

export default accountSchema;