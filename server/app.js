const express = require('express');
const path = require('path');
const app = express(),
      bodyParser = require("body-parser");
      port = 80;

const Pool = require('pg').Pool
const pool = new Pool({
        user: 'postgres',
        host: 'test-db-postgres.c8cxqgsirbs0.eu-west-2.rds.amazonaws.com',
        database: 'postgres',
        password: 'mystrongpassword',
        port: 5432,
      })

// place holder for the data
const users = [
  {
    firstName: "first1",
    lastName: "last1",
    email: "abc@gmail.com"
  },
  {
    firstName: "first2",
    lastName: "last2",
    email: "abc@gmail.com"
  },
  {
    firstName: "first3",
    lastName: "last3",
    email: "abc@gmail.com"
  }
];

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../my-app/build')));

app.get('/api/users', (req, res) => {
  console.log('/datasets/metadata called!');
  pool.query('SELECT * FROM public.datasets_metadata', (error, results) => {
    if (error) {
      throw error
    }
    console.log(results.rows)
    res.json(results.rows)
  })
});

app.post('/api/user', (req, res) => {
  const user = req.body.user;
  console.log('Adding user:::::', user);
  users.push(user);
  res.json("user addedd");
});

app.get('/datasets/metadata', (req, res) => {
  console.log('/datasets/metadata called!');
  pool.query('SELECT * FROM public.datasets_metadata', (error, results) => {
    if (error) {
      throw error
    }
    console.log(results.rows)
    res.json(results.rows)
  })
});

app.get('/', (req,res) => {
  res.sendFile(path.join(__dirname, '../my-app/build/index.html'));
});

app.listen(port, () => {
    console.log(`Server listening on the port::${port}`);
});