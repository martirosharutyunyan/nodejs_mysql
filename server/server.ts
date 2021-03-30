import dotenv from "dotenv";
dotenv.config();
import express from "express";
import morgan from "morgan";
import { conn } from './model/mysql';
import axios, { AxiosResponse } from 'axios';
const app = express();
const port: number | string = process.env.PORT;

app.use(morgan(`dev`));
app.use(express.json());
app.use(
    express.urlencoded({
        extended: false,
    }),
);


conn.connect((err):void=>{
    if(err) throw err
    console.log('mysqlDB connected')
})


app.use('/sendUser',require('./router/sendUser'))
app.use('/delete',require('./router/delete'))
app.use('/getUsers',require('./router/getUsers'))
app.use('/test',require('./router/test'))


app.listen(port, (): void => console.log(`server is runing on port ${port}`));
