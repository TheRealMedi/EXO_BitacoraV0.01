import express from 'express';
import indexRoutes from './routes/index.routes.js';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import cors from 'cors';


const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json)

// Middlewares
app.use(morgan('dev'));

// Routes
app.use(indexRoutes);

export default app;