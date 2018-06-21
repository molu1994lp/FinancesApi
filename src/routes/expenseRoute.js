import {addExpense,
        getExpenses,
        UpdateExpense,
        deleteExpense,
        getPartOfExpenses
    } from '../controllers/expenseController';

const expenseRoutes = (app) => {

    app.route('/api/expense')
        .get(getExpenses)
        .post(addExpense);
        
    app.route('/api/expense/:id')
        .put(UpdateExpense)
        .delete(deleteExpense);

    app.route('/api/expense/:page')
        .get(getPartOfExpenses)
}

export default expenseRoutes;