const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

app.get("/getEmployees",async (req,res)=>{
    let employeesData = await Employee.find().limit(500);
    res.json(employeesData);
});

app.listen(4567,()=>{
    console.log("Listening to port 4567");
})

let employeeSchema = new mongoose.Schema({
    
  id:Number,
  firstName:String,
  lastName:String,
  email:String,
  gender:String,
  country:String,
  age:Number,
  department:String,
  profilePic:String,
});

let Employee = new mongoose.model("employee",employeeSchema,"InfosysEmployees");


let connectToMDB = async ()=>{

    try{

        mongoose.connect("mongodb+srv://santhoshikumari:santhoshikumari@bath2408cluster.vp7w6.mongodb.net/BRNDB?retryWrites=true&w=majority&appName=Bath2408Cluster");

      console.log("Connected to MDB successfully.");

    }catch(err){
  
        console.log("Unable to connect MDB");

    }

};

connectToMDB();    