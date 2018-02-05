import mongoose from mongoose;
import config from './../config';
import User from './account/model';


const connection = require('./../db');

function reg(req, resp, next) {
  connection.connect();
  const sql = "insert into user(id,name,username,password) values(null,'allen','18681598509','12345678')";
  connection.query(sql,null,(err,result) => {
    console.log(err,result);
  })
  return next();
}

module.exports = reg;
