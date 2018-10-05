var express = require('express');
var routeku = require('./route/route_mysql');

var app = express();
app.use(routeku);

// Route
app.get('/', (req,res)=>{
    res.send('Express MySQL')
})
// app.get('/data', (req,res)=>{
//     res.send('Data from MySQL')
// })
// app.post('/data', (req,res)=>{
//     res.send('Send Data to MySQL')
// })

// Activation server
app.listen(3210, ()=>{
    console.log('Server Actived in Port 3210!')
})