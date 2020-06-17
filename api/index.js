'use strict';

//Define NPM and app.use the packages
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config({ path: './config/.env' });
const swaggerUi = require('swagger-ui-express');
const morgan = require('morgan')
const path = require('path')
const fs = require('fs')
const helmet = require('helmet');
const YAML = require('yamljs');
const chalk = require('chalk')


//app to easy access express
const app = express();
const routes = require('./routes')
//use port 5000 for express server
const port = process.env.API_PORT;
//load yaml file instead of json
const swaggerDocument = YAML.load('./config/swagger.yaml');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use(helmet());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
let accessLogStream = fs.createWriteStream(path.join(__dirname + '/logs', 'access.log'), { flags: 'a' })
app.use(morgan('combined', { stream: accessLogStream }))
app.use(require('./config/ignoreFavicon'))

app.get('/', (req, res) => {
    res.send("Looking for docs ? <a href='/api-docs'>api-docs</a>")
})

app.use('/api', routes)

app.listen(port, () => console.log(`API listening on port ${port}!`))

module.exports = {
    app
}