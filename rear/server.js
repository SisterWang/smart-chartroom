let app = require('express')();
let methods = require('./methods');
let bodyParser = require('body-parser');

// let urlencodedParser = bodyParser.urlencoded({ extended: false })
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
// var http = require('http').Server(app);

// let router = require('./router');


app.get('/', function (req, res) {
    res.send('hello world');
})

app.get('/balala', function (req, res) {
    res.send('balala');
})
app.get('/api/get',((req, res) => {

    res.json({a: 1});
}))

app.post('/api/login', function (req, res) {
    let userName = "cjp";
    let password = "123456";

    if(req.body.userName === userName && req.body.password === password) {
        res.send("0");
    } else {
        res.send("1");
    }
});

let server = app.listen(3000, function () {
    let host = server.address().address
    let port = server.address().port
    console.log("应用实例，访问地址为 http://%s:%s", host, port)
})