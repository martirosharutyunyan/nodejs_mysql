import mysql from 'mysql';

export const conn = mysql.createConnection({
    host:'localhost',
    user:'mysql',
    database:'test',
    password:'mysql'
})