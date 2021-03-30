import express from 'express';
const app = express.Router();
import { conn } from '../model/mysql';
let queryForGetUsers: string = 'SELECT * FROM user'
app.post('/',async (req, res):Promise<void>=>{
    try{
        conn.query(queryForGetUsers,(err,data):void=>{
            if(err) throw err
            res.send(data)
        })
    } catch(err){
        console.log(err)
    }
})

module.exports = app;