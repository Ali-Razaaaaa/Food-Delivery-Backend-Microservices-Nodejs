import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

const verifytoken=async(req,res,next)=>
{
    const Authheader=req.headers.authorization;
    const secretkey=process.env.JWT_SECRET;
   
        if(!Authheader)
        {
            res.status(401).json({error:'UnAuthorized'})
        }
        const token=Authheader.split(" ")[1];

        try
        {
            const decoded=jwt.verify(token,secretkey);
            req.user=decoded;

            next();
            
        }catch(e)
        {
            res.status(401).json({ error: "Invalid token" });
        }
}

export default verifytoken;
