const mongoose=require("mongoose");

const userSchema=new mongoose.Schema({
    userId:{type:String,unique:true},
    fullname:{type:String },
    email:{type:String,unique:true},
    phoneno:{type:String,unique:true},
    password:{type:String},
    address:{type:String},
    country:{type:String},
    city:{type:String},
    pincode:{type:String},
    time:{type:Date,default:Date.now},
});

const UserModels=mongoose.model("User",userSchema);
UserModels.createIndexes();
module.exports=UserModels;



