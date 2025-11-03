import connectdb from './database/db.js';
import express from 'express';
import dotenv from 'dotenv';
import RestaurantRoutes from './restaurantserviceroutes/routes.js';

dotenv.config();
connectdb();

const port=process.env.PORT||5000;
const app=express();
app.use(express.json());

app.use('/api/restaurant',RestaurantRoutes);


app.listen(port,()=>
{
    console.log(`server listening to ${port}`)
})