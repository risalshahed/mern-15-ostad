import express from "express";
import Review from "../models/Review.js";


const router = express.Router();



// Create Review

router.post("/", async(req,res)=>{

    try{

        const review = await Review.create(req.body);


        res.status(201).json(review);


    }catch(error){

        res.status(500).json({
            message:error.message
        });

    }

});


export default router;