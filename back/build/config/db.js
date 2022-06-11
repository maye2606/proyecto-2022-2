"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const dbName = 'project';
const dbUser = 'root';
const dbHost = '127.0.0.1';
const dbDriver = 'mysql';
const dbPassword = '12345';
const sequelizeConnection = new sequelize_1.Sequelize(dbName, dbUser, dbPassword, {
    host: dbHost,
    dialect: dbDriver
});
sequelizeConnection.authenticate();
exports.default = sequelizeConnection;
//# sourceMappingURL=db.js.map