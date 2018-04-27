const path = require('path');
const express = require('express');
const app = express();
const cors = require('cors');

const htmlRouter = require('./routes/htmlRoutes');

app.use(express.static(path.join(__dirname, '../client')));
app.use(cors());
app.use('*', htmlRouter);


app.listen('3000', () => console.log('server is running on port 3000'));