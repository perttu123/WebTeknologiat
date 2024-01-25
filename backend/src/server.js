import mongoose from 'mongoose';
import express from 'express';
import bodyparser from 'body-parser';
import cors from 'cors';
import todoRoutes from './routes/todoRoutes.js'

const app = express();
const port = process.env.PORT || 5000;

const mongoDB = "mongodb://0.0.0.0:27017/testi";
mongoose.connect(mongoDB);

app.use(cors());
app.use(bodyparser.json());
app.use(todoRoutes);

app.listen(port, ()=>{
    console.log("listening port: "+port);
});