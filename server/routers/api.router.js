const express = require('express');

const passport = require('../config/auth');

const ApiRouter = express.Router();

ApiRouter.use((req, res, next) => {
    if (req.isAuthenticarted())
    return next();

    res.status(403).send({message: 'Cant do this unless logged in!'});
});

ApiRouter   
    .route('/user/:id')
    .get((req, res) => {
    // search db and send user back
    db.getUser(req.params.id)
        .then(user => {
            res.send(user);
        });
    })
    .delete('/user/:id', (req, res) => {
        // look user up by id and remove from db
    });

ApiRouter.all('*', (req, res) => {
    res
        .status(404)
        .send({
            message: 'Cannot ' + req.method + ' resource at ' + req.originalUrl,
        });
});

module.exports = AuthRouter;