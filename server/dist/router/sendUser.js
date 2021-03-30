"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = express_1.default.Router();
const mysql_1 = require("../model/mysql");
let queryForSendUser = 'INSERT INTO user (id, name, surname, email, password, confirm) VALUES (NULL, \'das\', \'dsa\', \'das\', \'das\', \'21\')';
let queryForGetUsers = 'SELECT * FROM user';
app.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password } = req.body;
        const query = `SELECT * FROM user WHERE email = '${email}';`;
        mysql_1.conn.query(query, (err, data) => {
            if (err)
                throw err;
            if (data.length === 0) {
                const queryForSendUser = `INSERT INTO user (id, email, password) VALUES (NULL, '${email}', '${password}')`;
                mysql_1.conn.query(queryForSendUser, (err) => {
                    if (err)
                        throw err;
                    console.log('sended');
                });
                res.send('sended');
                return;
            }
            res.send('already exists');
        });
    }
    catch (err) {
        console.log(err);
    }
}));
module.exports = app;
//# sourceMappingURL=sendUser.js.map