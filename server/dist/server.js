"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const mysql_1 = require("./model/mysql");
const app = express_1.default();
const port = process.env.PORT;
app.use(morgan_1.default(`dev`));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({
    extended: false,
}));
mysql_1.conn.connect((err) => {
    if (err)
        throw err;
    console.log('mysqlDB connected');
});
app.use('/sendUser', require('./router/sendUser'));
app.use('/delete', require('./router/delete'));
app.use('/getUsers', require('./router/getUsers'));
app.use('/test', require('./router/test'));
app.listen(port, () => console.log(`server is runing on port ${port}`));
//# sourceMappingURL=server.js.map