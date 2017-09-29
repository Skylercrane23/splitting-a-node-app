const express = require('express');

// CREATING ROUTE
const AuthRouter = express.Router();

AuthRouter.post('/register', (req, res) => {
    // create new user, add to database
});

module.exports = AuthRouter;