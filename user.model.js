import mongoose from "mongoose";
const schema=new mongoose.Schema({
   
    Name:{type:String},
    Email:{type:String},
    Empid:{type:String},
    Phone:{type:String},
    Address:{type:String},
    Salary:{type:String},
    Designation:{type:String},
    Photo:{type:String}

})

export default mongoose.model.Employee||mongoose.model("employee",schema)