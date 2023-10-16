const express=require('express');
const {login_user}=require('./userController')

const userRoutes=express.Router()

userRoutes.post('/',login_user)

module.exports={userRoutes}