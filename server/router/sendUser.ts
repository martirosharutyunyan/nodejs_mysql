import express from 'express';
const app = express.Router();
import { conn } from '../model/mysql';

let queryForSendUser: string = 'INSERT INTO user (id, name, surname, email, password, confirm) VALUES (NULL, \'das\', \'dsa\', \'das\', \'das\', \'21\')'
let queryForGetUsers: string = 'SELECT * FROM user'



app.post('/',async (req, res):Promise<void>=>{
    try{
        const { email, password } = req.body
        const query: string = `SELECT * FROM user WHERE email = '${email}';`
        conn.query(query,(err:Error,data:any):void=>{
            if(err) throw err
            if (data.length === 0) {
                const queryForSendUser: string = `INSERT INTO user (id, email, password) VALUES (NULL, '${email}', '${password}')`;
                conn.query(queryForSendUser,(err:Error):void=>{
                    if(err) throw err
                    console.log('sended')
                })
                res.send('sended')
                return 
            }
                res.send('already exists')
        })
    } catch(err){
        console.log(err)
    }
})


module.exports = app;
