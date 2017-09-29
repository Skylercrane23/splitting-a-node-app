const cors = require('cors');
const bodyParser = require('body-parser');
const session = require('express-session');

function addMiddlewareTo(app){

    app.use(cors());
    app.use(bodyParser.json());
    app.use(session({
        saveUninitialized: true,
        resave: false,
        secret: 'Shhh!!!  Don\'t tell!',
        name: 'split a node app',
    }));
    app.use(passport.initilize());

    return app;
}

module.exports = decorate;
// same as export default decorate