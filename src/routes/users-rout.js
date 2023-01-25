const express=require("express")
const router=express.Router();
const userModel =require('../models/UserModel');
const bcrypt=require("bcrypt");
const jwt=require("jsonwebtoken");
const tokenString="This is dummy data";

// Register API
router.post("/createaccount",async(req,res)=>{  
    try{
    const {userId,fullname,email,phoneno,password,address,country,city,pincode}=req.body;
    console.log("done12 line")
    const newUser=await userModel.find({
        userId,
        fullname,
        email,
        phoneno,
        password,
        address,
        country,
        city,
        pincode});
    const salt=await bcrypt.genSalt(10);
    const hashPassword=await bcrypt.hash(password,salt);
    console.log(newUser)
    if(newUser){
        console.log("done16 line")
        return res.status(200).json({status:false,msg:'All realdy exist'});
        
    }else{
        console.log("done122 line")
        const data=  await userModel.create({
            userId,fullname,email,phoneno,"password":hashPassword,address,country,city,pincode        
        });
        console.log("done26 line")
        return res.status(200).json({status:true,msg:data})
    }}
    catch(err){
        res.status(500).json({status:false,msg:"Some error occered"});
    }  
});

//Login API
router.post("/login",async(req,res)=>{
    try{
    const {email,password}=req.body;  
    const user=await userModel.find({email});
    if(user.length<1){
        return res.status(401).json({status:false,msg:"User not fount"});
    }
    bcrypt.compare(password,user[0].password,(err,result)=>{
        if(!result){
            return res.status(401).json({status:false,msg:"Password not match"});
        }
        if(result){
            const token=jwt.sign({
                userId:user[0].userId,
                fullname:user[0].fullname,
            },tokenString,{expiresIn:"24"});
            res.status(200).json({status:true,msg:{token:token,}});}
            else{
                res.status(400).json({status:true,msg:"something error"}); 
            }
    });}
        catch(err){
            res.status(500).json({status:false,msg:"Some error occered"});}
})
//Product API
router.get("/product",(req,res)=>{

})




module.exports=router;