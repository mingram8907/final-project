require('dotenv').config();
require('./config/database'); // connects to db
const express = require('express');
const path = require('path'); // node module
const favicon = require('serve-favicon');
const logger = require('morgan');

const app = express();
// development port: 3001
// in production we'll a PORT number set in the environment variables
const PORT = process.env.PORT || 3001;

const Transaction = require('./models/transaction');
const { log } = require('console');
const ensureLoggedIn = require('./config/ensureLoggedIn');



//* Config
// Logger middleware
app.use(logger('dev'));
// JSON payload middleware (for data coming from frontend functions)
app.use(express.json());
// Configure both serve-favicon & static middleware
// to serve from the production 'build' folder
app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'build')));
// checks if token was sent and sets a user data on the req (req.user)
app.use(require('./config/checkToken'));


//* settling a middleware to run in our app
app.use((req, res, next) => {
    console.log(req.url);
    next()
})
//* parses the data from the request
app.use(express.urlencoded({extended: false}))



// * All other routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/transactions', ensureLoggedIn, require('./routes/api/transactions'))


// // Create transaction
// app.post('/transactions', (req, res) => {
//     console.log(req.body);

//     Transaction.create(req.body, (error, createdTransaction) => {
//         res.send(createdTransaction)
//     })
// })



// Put API routes here, before the "catch all" route
// The following "catch all" route (note the *) is necessary
// to return the index.html on all non-AJAX requests
app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'))
})


app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
})