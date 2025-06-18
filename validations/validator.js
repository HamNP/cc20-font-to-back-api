//Validate with yup
import { object,string,ref } from "yup";

export const registerSchema = object({
  email: string().email("Invalid Email").required("Please enter Email"),
  name:string().min(3, "Name must be more than 3 chars"),
  password:string().min(6, "Password must be more than 6 chars"),
  confirmPassword:string().oneOf([ref("password"), null], "Invalid password"),
})

export const loginSchema = object({
  email: string().email("Invalid Email").required("Please enter Email"),
  password:string().min(6, "Password must be more than 6 chars"),
})

export const validate = (schema) => async (req,res,next) => {
  try {
    // console.log("This is validate",req.body);
    await schema.validate(req.body,{abortEarly: false});
    next();
  } catch (error) {
    const errMsg = error.errors.map((item)=>item)
    const errTxt = errMsg.join(",")
    console.log(errTxt)
    const mergeErr = new Error(errTxt)
    next(mergeErr);
  }
}