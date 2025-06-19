import { createError } from "../utils/createError.js"
import prisma from "../config/prisma.js"


export const listUser = async (req,res,next) => {
  //code body
  try {
    //1. Check Email
    // if(true){
    //   // throw new Error("Email already exist!!!")
    //   createError(400,'Email already exist!!!')
    // } else {
    //   throw new Error("Password is Invalid!!!")
    // }
    console.log(req.user)
    const user = await prisma.user.findMany({
      omit:{
        password:true
      }
    })
    console.log(user)
    res.json({message:"This is List All User",result:user})
  } catch (error) {
    next(error)
  }
}

export const updateRoleUser = (req,res,next) => {
  try {
    //1. Read params & body
    const {id} = req.params;
    const {role} = req.body;
    console.log(id,role);
    res.json({message:"This is Update Role User"})
  } catch (error) {
    next(error)
  }
}

export const deleteUser = (req,res,next) => {
  try {
    res.json({message:"This is Delete User"})
  } catch (error) {
    next(error)
  }
}
export const readUser = (req,res) => {
  res.json({message:"This is Read User"})
}

export const createUser = (req,res) => {
  res.json({message:"This is POST User"})
}
