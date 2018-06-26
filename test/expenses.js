process.env.NODE_ENV = 'test';

import mongoose from 'mongoose';
import {
    ExpenseSchema
} from '../src/models/expenseModel';
//test requirments
import chai from 'chai';
import chaiHttp from 'chai-http';
import {
    app
} from '../index';

let should = chai.should();
chai.use(chaiHttp);

describe('Expenses', () => {
    beforeEach((done) => {
        ExpenseSchema.remove({}, () => {
            done();
        });
    });

    describe('Get /', (done) => {
        chai.request(app)
            .get('/')
            .end((err, resp) => {
                resp.should.have.status(200);
                resp.should.be('Express api is running on port: 8000');
            });
    });
});