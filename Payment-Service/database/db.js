import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config()

const connectdb=async()=>
{
    try
    {
       await mongoose.connect(process.env.MONGO_URI);
       console.log('Connected Sucessfully');

    }catch(e)
    {
        console.log('Error achi wayo koi',e.message);
         process.exit(1); 
    }
}

export default connectdb;