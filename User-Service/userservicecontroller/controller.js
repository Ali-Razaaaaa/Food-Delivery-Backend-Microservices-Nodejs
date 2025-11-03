import bcrypt from 'bcryptjs';
import User from '../models/Usermodel.js';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

const secretkey=process.env.jwtsecret;

export const login=async(req,res)=>
{
    const {username,password}=req.body;
    
    const user = await User.findOne({username:username});
    try{
    if(!user)
    {
        return res.status(400).json({error:"No User Found"});
    }
    
    const passwordmatch = await bcrypt.compare(password,user.password);

        if(!passwordmatch)
        {
            return res.status(400).json({ error: "Invalid username or password" });
        }
        const payload={
            id:user._id,
            username:user.username,
        }
        const token=jwt.sign(payload,secretkey,{expiresIn:'1d',});

        return res.status(200).json({message:'Success',token });
    }catch(e)
    {
     return res.status(500).json({error:'Server Error'});   
    }
}

export const signup=async(req,res)=>
{
    const {username,password}=req.body;
    
    const saltround=10;

    const hashedpassword= await bcrypt.hash(password,saltround);
    

    try
    {
        await User.create({username:username,password:hashedpassword});
        res.status(200).json({message:'Successfully Created'});
        
    }catch(e)
    {
       res.status(400).json({message:"Failed"},);
    }

}
