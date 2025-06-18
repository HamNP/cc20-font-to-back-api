import { createError } from "../utils/createError.js"

export const listUser = (req,res,next) => {
  //code body
  try {
    //1. Check Email
    if(true){
      // throw new Error("Email already exist!!!")
      createError(400,'Email already exist!!!')
    } else {
      throw new Error("Password is Invalid!!!")
    }
    res.json({message:"This is List All User"})
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

export const updateRoleUser = (req,res) => {
  res.json({message:"This is Update Role User"})
}

export const deleteUser = (req,res) => {
  res.json({message:"This is Delete User"})
}