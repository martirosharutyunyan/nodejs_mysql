"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.conn = void 0;
const mysql_1 = __importDefault(require("mysql"));
exports.conn = mysql_1.default.createConnection({
    host: 'localhost',
    user: 'mysql',
    database: 'test',
    password: 'mysql'
});
//# sourceMappingURL=mysql.js.map