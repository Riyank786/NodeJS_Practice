// create express server
const express = require('express');
const app = express();
const port = 3000;
const fs = require('fs');

// create http server
const http = require('http');

// handle get request 
app.get('/', (req, res) => {
        // send index.html file
        res.sendFile(__dirname + '/views/index.html');
})

app.listen(port, () => {
        console.log(`Example app listening at http://localhost:${port}`)
})

