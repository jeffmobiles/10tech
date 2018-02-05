var restify = require('restify');
// import restify from 'restify';
var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : 'cp'
});
 
connection.connect();

function respond(req, res, next) {
  res.send('hello ' + req.params.name);
  next();
}
function reg(req,res,next) {
  connection.connect();
  const sql = "insert into user(id,name,username,password) values(null,'allen','18681598509','12345678')";
  connection.query(sql,null,(err,result) => {
    console.log(err,result);
    return next();
  })
}

function login(req, res, next) {
  connection.connect();
  const sql = "select * from user where username='18681598509' and password='12345678'";
  connection.query(sql,null,(err,result) => {
    console.log('result', result);
    return next();
  })
  connection.end();
}
// const accountReg = require('./src/module/')
const apiList = ['/reg','/login','/resetPassword'];
var server = restify.createServer();
// server.use(restify.queryParser());
// server.use(restify.bodyParser());
// server.use(restify.CORS());

server.get('/hello/:name', respond);
server.get('/reg',reg)
server.get('/login', login);

server.listen(8080, function() {
  console.log('%s listening at %s', server.name, server.url);
});