import mongoose from 'mongoose';
import {ExpenseSchema} from '../models/expenseModel';

const Expense = mongoose.model('Expensies', ExpenseSchema);

export const addExpense = (req, resp) => {
    let newExpense = new Expense(req.body);
    newExpense.save((err, expense) => {
        if(err) {
            resp.send(err);
        }
        else {
            resp.send(newExpense);
        }
    })
};

export const getExpenses = (req, resp) => {
    Expense.find({}, (err, expenses) =>{
        if(err) {
            resp.send(err);
        }
        else {
            resp.json(expenses);
        }
    });
};

export const getPartOfExpenses = (req, resp) => {
    const perPage = 15;
    const page = req.params.page || 1 ;

    Expense
           .find({})
           .skip((perPage * page) - perPage)
           .limit(perPage)
           .exec((err, expenses) => {
                if(err) {
                    resp.send(err)
                }
                else{
                    resp.send(expenses)
                }
           });
};

export const UpdateExpense = (req, resp) => {
    Expense.findByIdAndUpdate(req.params.id, req.body, (err, expense) => {
        if(err) {
            resp.send(err);
        }
        else {
            resp.sendStatus(200);
        }
    });
};

export const deleteExpense = (req, resp) => {
    Expense.findByIdAndRemove(req.params.id , (err, expense) => {
        if(err) {
            resp.send(err);
        }
        else {
            resp.sendStatus(200);
        }
    });
};
