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

export const updateRoleUser = async (req,res,next) => {
  try {
    //1. Read params & body
    const {id} = req.params;
    const {role} = req.body;
    console.log(id,role);
    //2. Update to DB
    const user = await prisma.user.update({
      where: {
        id:Number(id)
      },
      data:{
        role:role
      }
    })




    res.json({message:`Update Role ${user.name}`})
  } catch (error) {
    next(error)
  }
}


export const deleteUser = async (req,res,next) => {
  try {
    const {id} = req.params;
    const user = await prisma.user.delete({
      where:{
        id:Number(id)
      },
    })
    res.json({message:"Delete Success!!!"})
  } catch (error) {
    next(error)
  }

}
export const getMe = async (req,res,next) => {
  try {
    const {id} = req.user;
    console.log(id)
    const user = await prisma.user.findFirst({
      where:{
        id:Number(id)
      },
      omit:{
        password:true
      }
    })
    res.json({result:user,message:"Yoohoo Backend Success!!"})
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
