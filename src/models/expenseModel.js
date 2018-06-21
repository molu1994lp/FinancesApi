import mongoose from 'mongoose';

const Schema = mongoose.Schema;
//const ObjectId = mongoose.Schema.Types.ObjectId;

export const ExpenseSchema = new Schema ({
    value: {
        type: Number,
        required: 'Enter expense value!'
    },
    date: {
        type: Date,
        default: Date.now()
    },
     category: {
         type: String ,
         required: 'Enter category!'
     },
     subcategory: {
         type: String
     }
});