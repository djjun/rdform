// BASE SETUP
// =============================================================================

// call the packages we need
var express    = require('express');        // call express
var app        = express();                 // define our app using express
var bodyParser = require('body-parser');

var allowCrossDomain = function(req, res, next) {
    if ('POST' == req.method) {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Methods', 'GET,POST,OPTIONS');
        res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');

        res.json({message : 'Cadastrado com sucesso!'});

    }
    else {
        next();
    }
};

app.use(allowCrossDomain);

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;        // set our port

// ROUTES FOR OUR API
// =============================================================================
var router = express.Router();              // get an instance of the express Router

router.post('/', function(req, res) {
    res.json({message : 'Cadastrado com sucesso!'});
});

// REGISTER OUR ROUTES -------------------------------
app.use('/send', router);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Conectado na porta ' + port);