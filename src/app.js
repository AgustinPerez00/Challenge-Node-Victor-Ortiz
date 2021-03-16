require ('dotenv').config();
const conectionDB = require ('./database/config')
const cors = require ('cors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');


const moviesRouter = require('./routes/movies');
const usersRouter = require('./routes/users');
const directorRouter = require('./routes/director');
const tvShowRouter = require('./routes/tvShow');

const app = express();

//** CONECCTION MONGODB **/
conectionDB();

//** MEDDLEWARES **/
app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


/* ROUTER API */
app.use('/api/movies', moviesRouter);
app.use('/api/director', directorRouter);
app.use('/api/users', usersRouter);
app.use('/api/tvShow', tvShowRouter);



module.exports = app;
