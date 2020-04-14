const express = require('express');
const bodyparser = require('body-parser');
const multer = require('multer')().array();
const app = express();
const manageDevice = require('./manageDevice');

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));

app.get('/', (req,res) => {
    res.sendFile(__dirname+'/view/home.html', err => {
        if(err) console.log(err);
    });
});


app.get('/listDevices', (req,res) => {
    res.sendFile(__dirname+'/view/listDevices.html');
});

app.get('/getDevices', (req,res) => {
    let list = manageDevice.listDevices();
    res.send(JSON.stringify(list));
});

app.get('/addDevice', (req,res) => {
    res.sendFile(__dirname+'/view/addDevice.html');
});

app.post('/addDevice', (req,res) => {
    manageDevice.addDevice(req.body);
    res.send('New Device Added');
});

app.listen(3000, resp => {
    console.log('Server started..!!');
});