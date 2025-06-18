export const authCheck = (req,res,next) => {
  //code body
  console.log("This is middleware")
  next()
}