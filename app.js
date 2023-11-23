const express = require('express');
const path = require('path');

const app = express();
const PORT = 8000;

//const userRoute = require('./routes/auth')

const db = require('./db/db');
db();

app.use(express.json());

app.use('/api',require('./routes/user'))
//app.use('/api',require('./routes/user'))




app.listen(PORT,()=>{
    console.log(`Server is running at ${PORT}`);

})