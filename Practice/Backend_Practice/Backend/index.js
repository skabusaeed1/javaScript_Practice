const express=require("express")
const dotenv=require("dotenv");
const {connection}=require ('./db')
const {userRoutes}=require('./user.routes')
const app=express();
dotenv.config()

app.use(express.json());

app.get('/',(req,res)=>{
    res.send("Welcome to Home Page");
})

app.use('/login',userRoutes)

app.listen(8000,async()=>{
    try {
        await connection
        console.log(`Post running on port 8000`)
    } catch (error) {
        console.log(`Error while running on port 8000`)
    }
})