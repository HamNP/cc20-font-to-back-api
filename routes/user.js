import express from "express";
//Controllers
import { listUser,readUser,createUser,updateRoleUser,deleteUser,getMe } from "../controllers/user.js";
//Middlewares
import { authCheck } from "../middlewares/auth.middleware.js";

const router = express.Router()

//ENDPOINT http://localhost:8000


// router.get('/users',(req,res)=>{
//   //code body
// res.json({message:"This is GET Users"})
// });

router.get('/users',authCheck,listUser);


// router.patch('/user/role/:id',(req,res)=>{
  //   //code cody
  //   // console.log(req.params.id)
  //   const {id} = req.params;
  //   console.log(id)
  //   res.json({message:"This is PATCH role"})
  // })
  
  router.patch('/user/role/:id',authCheck,updateRoleUser)
  
  // router.delete("/user/:id",(req,res)=>{
    //   const {id} = req.params;
    //   res.json({message:`This is Delete ${id}`})
    // })
    
    router.delete("/user/:id",authCheck,deleteUser)
    


  
   router.get("/getme",authCheck,getMe)





    // router.get("/user",(req,res)=>{
    //   //code body
    //   res.json({message:"This is GET User"})
    // })
    router.get("/user",readUser);
    
    
    // router.post('/user',(req,res)=>{
    //   //code body
    //   res.json({message:"This is POST user"})
    // })
    router.post('/user',createUser)
    // Export
    
    export default router