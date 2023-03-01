const express=require("express");
const app=express();
const port=process.env.PORT || 3000;
const apidata=require('./data.json')
const cors=require("cors");

app.use(cors());

app.get("/",(req,res)=>{
    res.send("Hello i am live");
})


app.get("/service",(req,res)=>{
  res.send(apidata);
})
app.listen(port,()=>{
  console.log("i am live again");
})