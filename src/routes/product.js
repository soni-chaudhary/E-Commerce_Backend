const express=require("express");
const router=express.Router();
const productModel=require('../models/Product');

router.post("/createProdcut",async(req,res)=>{
    try{
        const {productId,title,description,image,price,rating,discount, productName, style,createPro,}=req.body;
    const newProduct=await productModel.findOne({productId,title,price});
    if(newProduct){
        return res.status(500).json({status:false,msg:"already exist account"});
    }else{
        const data=await productModel.create({productId,title,description,image,price,rating,discount, productName, style,createPro,});
        return res.status(200).json({status:true,msg:data});
    }
    }catch(err){
        return res.status(400).json({statuse:false})
    }
});

module.exports=router;