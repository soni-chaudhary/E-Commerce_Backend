const router=require("express").Router();
const categoriesModel=require("../models/Categories");


router.get("/getCategoryRouter",async(req,res)=>{
    try{

    }catch(err){
        return res.status(500).json({status:false,msg:"same error occered"});
    }
})

router.post("/categoriesRouter",async(req,res)=>{
    try{
        const {categoriesId,title,categoriesDate}=req.body;
    const newCategories=await categoriesModel.findOne(categoriesId,title,categoriesDate);
    if(newCategories){
        return res.status(500).json({status:false,msg:"already exist category"});
    }
    await categoriesModel.create({categoriesId,title,categoriesDate});
    return res.status(200).json({status:false,msg:"successfully category created"});
    }catch(err){
        return res.status(500).json({status:false,msg:"same error occered"});
    }
})


module.exports=router;