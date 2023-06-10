const express= require('express');
const app = express();
const {usersRouter}= require("./Allroutes/users.route");
const {orderRoutes}=require("./Allroutes/order.route");
app.use(express.json());

app.use('/users',usersRouter);
app.use('/orders',orderRoutes);

app.get('/',(req,res)=>{
    res.send("welcome");
})

app.listen("9000");