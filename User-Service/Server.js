import express from 'express';
import userserviceroutes from './userserviceroutes/route.js'
import dotenv from 'dotenv';
import connectdb from './database/db.js';

connectdb();
dotenv.config();
const port = process.env.userserviceport;
const app=express();


app.use(express.json());

app.use('/users',userserviceroutes);


app.listen(port,()=>
{
    console.log(`server listening to ${port}`);
});