const express = require('express');
const mysql = require('mysql');

// create connection
const db = mysql.createConnection({
  host :'localhost',
  user :'root',
  password:'',
  });
  
  // connect 
  db.connect((err) => {
    if(err){
    throw err;
    }
    console.log('MySql Connected ....');
    
    });

const app = express();
// create DB 
app.get('/createDb', (req, res) => {
  let sql = 'CREATE DATABASE sampledb';
  db.query(sql, (err, result) => {
      if(err) throw err;
      console.log(result);
      res.send('Database created...');
  });
});

app.listen('3000', () => 
{
  console.log('server started on port 3000');
});

const express = require('express');
const mysql = require('mysql');

// create connection
const db1 = mysql.createConnection({
  host :'localhost',
  user :'root',
  password:'',
  database : 'sampledb'

  });
  
  // connect 
  db.connect((err) => {
    if(err){
    throw err;
    }
    console.log('MySql Connected ....');
    
    });

const app1 = express();
// create DB 
app.get('/createpoststable', (req, res) => {
  let sql = 'CREATE TABLE profile(id int AUTO_INCREMENT, fullname VARCHAR(255), address VARCHAR(255), PRIMARY KEY(id))';
  db.query(sql, (err, result) => {
      if(err) throw err;
      console.log(result);
      res.send('Posts table created...');
  });
});

app.listen('3000', () => {
  console.log('Server started on port 3000');
});

// Insert post 1
app.get('/addpost1', (req, res) => {
    let post = {fullname:'John Adams', address:'USA'};
    let sql = 'INSERT INTO profile SET ?';
    let query = db.query(sql, post, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send('Post 1 added...');
    });
  });
  
  // Insert post 2
  app.get('/addpost2', (req, res) => {
    let post = {fullname:'Johny', address:'USA'};
    let sql = 'INSERT INTO profile SET ?';
    let query = db.query(sql, post, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send('Post 2 added...');
    });
  });
  