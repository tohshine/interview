import express, { Request, Response } from "express";

const router = express.Router();



router.get('/time',(req:Request,res:Response)=>{
    const currentTime =  Date.now()

    //I wanted to simulate delay request but, I believe that is not what the question ask me to do.

    const futureTime =  Date.now()
    const serverTime = futureTime-currentTime

    let seconds = (serverTime / 1000).toFixed(1);
  let minutes = (serverTime / (1000 * 60)).toFixed(1);
  let hours = (serverTime / (1000 * 60 * 60)).toFixed(1);
  let days = (serverTime / (1000 * 60 * 60 * 24)).toFixed(1)
   
    const data = {
        properties: {
        epoch: {
        description: "The current server time, in epoch seconds, at time of processing the request.",
        type: `${hours}H:${minutes}M:${seconds}S`
        }
        },
        required: ["epoch"],
        type: "object"
        }
  
    

res.status(200).json(data)

console.log(serverTime-currentTime);
})
export {router as HomeRouter }