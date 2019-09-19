const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

// routes
const home = require('./routes/home');
const user = require('./routes/user');
app.use('/', home);
app.use('/user', user);

app.listen(3000, () => console.log('后端应用正在端口3000上运行!'));