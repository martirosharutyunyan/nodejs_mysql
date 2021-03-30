import express from 'express';
import { conn } from '../model/mysql';
const app = express.Router();
import axios from 'axios';

app.post('/',async (req, res):Promise<void>=>{
    try{
        const id = req.body.id
        const queryForDelete = `DELETE FROM user WHERE id = '${id}'`
        conn.query(queryForDelete,(err,data):void=>{
            if(err) throw err
            console.log(data)
        })    
        res.send('deleted')
    } catch(err){
        console.log(err)
    }
})

module.exports = app;