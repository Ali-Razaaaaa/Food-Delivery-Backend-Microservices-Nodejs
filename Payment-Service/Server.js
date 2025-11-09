import express from 'express';
import paymentRoutes from './routes/paymentRoutes.js';
import dotenv from 'dotenv';
import connectdb from './database/db.js';

dotenv.config();

connectdb();

const port = process.env.PAYMENT_PORT;
const app=express();

app.use(express.json());

app.use('/payments',paymentRoutes);

app.listen(port,()=>
{
    console.log(`server listening to ${port}`);
});