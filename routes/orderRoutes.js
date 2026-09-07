import express from "express";
import Order from "../models/Order.js";


const router = express.Router();


// Create Order

router.post("/", async(req,res)=>{

    try{

        const order = await Order.create(req.body);


        res.status(201).json({
            success:true,
            order
        });


    }catch(error){

        res.status(500).json({
            message:error.message
        });

    }

});




// Show User Orders

router.get("/:userId", async(req,res)=>{

    try{

        const orders = await Order.find({
            user:req.params.userId
        })
        .populate("products.product");


        res.json(orders);


    }catch(error){

        res.status(500).json({
            message:error.message
        });

    }

});


export default router;