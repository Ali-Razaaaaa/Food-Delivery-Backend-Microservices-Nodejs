import express from 'express';
import userRoutes from './routes/userRoutes.js';
import dotenv from 'dotenv';
import connectdb from './database/db.js';

dotenv.config();

connectdb();

const port = process.env.USERSERVICE_PORT;
const app=express();

app.use(express.json());

app.use('/users',userRoutes);



app.listen(port,()=>
{
    console.log(`server listening to ${port}`);
});