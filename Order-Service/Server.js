import express from 'express';
import dotenv from 'dotenv';
import connectDB from './database/db.js';
import Orderroutes from './orderserviceroutes/routes.js';

connectDB();
dotenv.config();

const PORT=process.env.PORT||3005;

const app=express();

app.use(express.json()); 

app.use('/Order',Orderroutes);

app.listen(PORT,()=>
{
    console.log(`Server Listening to ${PORT}`);
});
