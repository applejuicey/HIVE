const express = require('express');
const path = require('path');
const app = express();
// const bodyParser = require('body-parser');
const index = require('./routes/index');
// const users = require('./routes/users');

// app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', index);
// app.use('/users', users);

app.listen(3000, () => console.log('Example app listening on port 3000!'));