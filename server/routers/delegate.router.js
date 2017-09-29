const AuthRouter = require('./auth.router');
const ApiRouter = require('./auth.router');

function delegateRoutes(app){

    app.use(express.static(__dirname + '/../public'));


     // THIS WILL MAP THE ROUTES TO THE RIGHT PLACE
     app.use('/auth', AuthRouter);

     app.use('/api', ApiRouter);

    
    return app;
}

module.exports = delegateRoutes;
