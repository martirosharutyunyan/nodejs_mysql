"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.client = void 0;
const pg_1 = require("pg");
exports.client = new pg_1.Client({
    user: 'postgres',
    host: 'localhost',
    password: 'hhs13516',
    database: 'test',
    port: 5432
});
//# sourceMappingURL=postgreSQL.js.map