import express from 'express';
import expenseRoutes from './src/routes/expenseRoute';
import categoryRoutes from './src/routes/categoryRoutes';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import config from 'config';



export const app = express();
const PORT = 8000;

//mongose connection

mongoose.Promise = global.Promise;
mongoose.connect(config.DBHost);

// body parser
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


// Routes
expenseRoutes(app);
categoryRoutes(app);

app.get('/', (req, resp) => {
    resp.send(`Express api is running on port: ${PORT}`);
})

app.listen(PORT, () => {
    console.log(`Node application is runnging on port: ${PORT}`);
})