import express from 'express';
import { connection } from './db/db.js';

connection();
const app = express();

app.use(express.json());

app.get("/healty",(req,res)=>{
    res.status(200).json({message:"this is healthy endpoint"});
})

app.listen(3000);