const {UserModel}=require('./user.model')

const login_user=async(req,res)=>{
   const {username,password} = req.body;
   const newuser=new UserModel(req.body)
   const user=await UserModel.findOne({username: username, password: password})
    if(user){
      res.json("already logged in")
    }else{
      const data=await newuser.save()
      res.json(data)
    }
}

module.exports={login_user}