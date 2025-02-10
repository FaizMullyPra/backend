import { request } from "express"

const asyncHandler= (requestHandler) => {
    return (req,res,next)=>{
        Promise.resolve(requestHandler(req,res,next)).catch((err)=>next)
    }
} 

// const asynsHandler = (fn)=> async(req,res,next) =>{
//     try{
//         await fn(req,res,next)
//     }catch(error){
//         next(error)
//     }
// }


export {asyncHandler}