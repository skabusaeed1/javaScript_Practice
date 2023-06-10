const express=require("express");
const orderRoutes=express.Router();

orderRoutes.get('/',(req,res)=>{
    res.send("All orders");
})
orderRoutes.get('/active',(req,res)=>{
    res.send("Active orders");
})
orderRoutes.get('/return',(req,res)=>{
    res.send("returned orders");
})
orderRoutes.get('/refund',(req,res)=>{
    res.send("Refunded orders");
})

module.exports={orderRoutes};