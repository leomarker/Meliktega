const jwt = require("jsonwebtoken");


const verifyToken = async(req,res,next) =>{
    const authHeader = req.headers.authorization;

    if(!authHeader?.startsWith('Bearer ')){
        return res.status(401).json({msg:"Unauthorized"})
    }

    
}