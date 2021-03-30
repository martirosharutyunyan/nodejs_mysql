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
let queryForGetUsers = 'SELECT * FROM user';
app.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        mysql_1.conn.query(queryForGetUsers, (err, data) => {
            if (err)
                throw err;
            res.send(data);
        });
    }
    catch (err) {
        console.log(err);
    }
}));
module.exports = app;
//# sourceMappingURL=getUsers.js.map