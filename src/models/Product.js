const mongoose=require("mongoose");

const productschema=mongoose.Schema({
    productId:{type:String,unique:true,required:true},
    title:{type:String,required:true},
    description:{type:String},
    image:{type:Array,default:[]},
    price:{type:Number,required:true},
    rating:{type:Number},
    discount:{type:Number, },
    productName:{type:String,},
    style:{type:Array,default:[]},
    createdate:{type:Date,default:Date.now},
});

const procutModul=mongoose.model("Product",productschema);
procutModul.createIndexes;
module.exports=procutModul;