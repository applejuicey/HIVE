const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const routes = require('./routes/index');
const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));
routes(app);

app.listen(5888, () => console.log('后端应用正在端口5888上运行!'));