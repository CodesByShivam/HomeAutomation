const express = require('express');
const app = express();


app.get('/', (req,res) => {
    res.sendFile(__dirname+'/view/home.html', err => {
        console.log(err);
    });
});


app.get('/listDevices', (req,res) => {
    res.send('list of devices');
});

app.post('/addDevice', (req,res) => {
    res.send('Added New Device')
});

app.listen(3000, resp => {
    console.log('Server started..!!');
});