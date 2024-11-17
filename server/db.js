import mongoose from "mongoose";

let connection=()=>{
try{ mongoose.connect("mongodb+srv://akash:akash@cluster0.zx3no15.mongodb.net/Datanexify");
console.log("connnected to atlas db")
}
   catch(err){
    console.log("err connecting to db")
   }
}

export default connection;