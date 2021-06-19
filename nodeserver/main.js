const express =require("express");

const app=express();


app.get("/hi",(req,res)=>{

    for(let i=0;i<10000000000000;i++)
    {

    }
    res.send("hello world")

})



app.get("/hello",(req,res)=>{
    res.send("hi world")

})


app.listen("3500",()=>{
    console.log("Server running")
})