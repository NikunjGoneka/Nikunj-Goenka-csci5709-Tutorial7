const express = require('express');
const app = express();
const http = require('http');
const port = process.env.PORT || 3000;
const bodyParser = require('body-parser');
const userRoute = require('./api/routes/userRoute');
const mongoose = require('mongoose');

const mongoConnectionString = "mongodb+srv://admin:admin@cluster0.k7ifc.mongodb.net/tutorial7?retryWrites=true&w=majority"
mongoose.connect(mongoConnectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
});


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/user', userRoute);

const server = http.createServer(app);

server.listen(port);

