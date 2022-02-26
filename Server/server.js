const express=require("express");
const bodyParser=require("body-parser");
const cors=require("cors");
const port=3000;
const app=express();

app.use(bodyParser.json());
app.use(cors());
app.get("/",(req,res)=>{
    res.send("Angular Lab");
});
app.listen(port,()=>{
    console.log("Running on port ",port);
});
app.post("/enroll",(req,res)=>{
    console.log(req.body);
    res.status(200).send({"data":"Reg Successfully"});
});