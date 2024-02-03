import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import backendRoutes from './routes/backendRoutes.js';
import bodyParser from 'body-parser';
const port = 5000;
const mongoConnection = 'mongodb://0.0.0.0:27017/routerDatabase';
mongoose.connect(mongoConnection);

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(backendRoutes);
app.listen(port, console.log("listening..."));