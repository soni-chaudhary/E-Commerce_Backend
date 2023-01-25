// const rounter=require("express").Router();
const mongoose=require("mongoose");

const categoriesSchema=mongoose.Schema({
    categoriesId:{type:String,required:true},
    title:{type:String},
    categoriesId:{type:Date,default:Date.now}
});

const categoriesModels=mongoose.model("Categories",categoriesSchema);
categoriesModels.createIndexes;
module.exports=categoriesModels;