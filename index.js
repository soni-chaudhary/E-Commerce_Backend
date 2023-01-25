const express= require("express");
const app=express();
const PORT=process.env.PORT || 5000;
require("./src/database_connection");


app.use(express.json());
const userRouter=require("./src/routes/users-rout");
app.use("/next",userRouter);
const productRouder=require('./src/routes/product');
app.use('/prodct',productRouder);




app.listen(PORT,()=>{
    console.log(`Api connected ${PORT}`);
});

// {"userId":"23","fullname":"soni",
// "email":"kshiudw","phoneno":"jshxu",
// "password":"soni@1","address":"suriyapirma","country":"india","city":"meerut","pincode":"hxuqi"}