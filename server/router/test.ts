import express from 'express';
const app = express.Router();
import { conn } from '../model/mysql';


app.post('/',async (req, res):Promise<void>=>{
    try{
        const query: string = 'SELECT * FROM user WHERE email = \'dsa\';'
        conn.query(query,(err:Error,data:any):void=>{
            if(err) throw err
            res.send(data)
        })
    } catch(err:any){
        console.log(err)
    }
})

module.exports = app;