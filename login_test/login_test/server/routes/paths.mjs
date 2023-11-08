import express from "express";
import db from "../db/conn.mjs";
import { ObjectId } from "mongodb";

const router = express.Router(); 

// this is a default route for bacon
router.get( "/", async (req , res) => {

    let collection = await db.collection("bacon");
    let results = await collection.find({}).toArray();
    res.send(results).status(200);
  
});

// this will help create a bacon record
router.post("/", async (req, res) => {

    let newDoc = {
        name:req.body.name,
        cut:req.body.cut,
        cost:req.body.cost,
        weight:req.body.weight
    };
    
    let collection = await db.collection("bacon");
    let result = await collection.insertOne(newDoc);
    res.send(result).status(200);

});

// this will help fetch a single object by id
router.get( "/:id", async (req, res) => {

    let collection = await db.collection("bacon");
    let query = {_id: new ObjectId(req.params.id)};
    let result = await collection.findOne(query);

    if(!result) res.send("Single Record ID: Not Found").status(404);
    else res.send(result).status(200);

});

// this will help update a single object
router.patch( "/:id", async(req, res) => {

    const query = {_id: new ObjectId(req.params.id)};
    const update = {
        $set:{
        name:req.body.name,
        cut:req.body.cut,
        cost:req.body.cost,
        weight:req.body.weight
        }
    };

    let collection = await db.collection("bacon");
    let result = await collection.updateOne(query, update);
    res.send(result).status(200);

});

// this will delete a bacon object
router.delete( "/:id", async (req, res) =>{

    const query = { _id: new ObjectId(req.params.id) };

    const collection = db.collection("bacon");
    let result = await collection.deleteOne(query);
  
    res.send(result).status(200);

});


export default router;