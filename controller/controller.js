const User = require('../model/model');

exports.Register = async (req,res)=>{
    try {
        const {username, email} = req.body;

        if(!username || ! email){
            return res.status(401).json({error:"Username or Email missing"})
        }

        const checkUser = await User.find({email:req.body.email})
        if(!checkUser){
            return res.status(409).json({error:"User Already exists"})
        }
        else{
            const newUser = await User.create(req.body);

            return res.status(201).json({msg:"User registersd Successfully",data:newUser})
        }

        
    } catch (error) {
        res.status(500).json({error:"Server Error"})
    }
}


exports.Login = async (req,res)=>{
    try {
        const {email,password} = req.body;

    const user = await User.findOne({email:req.body.email} && {password:req.body.password})
    if(user){
        return res.status(200).json({msg:"User loggedin Successfully",data:user})
    }
    else{
        return res.status(401).json({msg:"Invalid Email or Password"})

    }
    } catch (error) {
        res.status(500).json({error:"Server Error"})
        console.log(error)
    }
    
}