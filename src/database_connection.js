const mongoose=require("mongoose");

// const url="mongodb://localhost:27017/E-CommerceDatabase";
const url ="mongodb+srv://soni_chaudhary:soni123@cluster0.qij1ode.mongodb.net/E-CommerceDatabase"

mongoose.connect(url,{useNewUrlParser:true,useUnifiedTopology:true,family:4})
.then(()=>{
   console.log("Connection............");
}).catch((value)=>
{console.log(`Can't connected`);
console.log(`erroe occer ${value}`)
});
