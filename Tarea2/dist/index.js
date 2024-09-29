"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = require("mongoose");
// require('dotenv').config();
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
const routes_1 = __importDefault(require("./routes"));
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
const dbUrl = process.env.DB_URL;
console.log('Mongo URL: ', dbUrl);
(0, mongoose_1.connect)(dbUrl).then(res => {
    console.log('Ya se conecto!');
    app.use(express_1.default.json());
    app.use(routes_1.default);
    app.listen(port, () => {
        console.log(`app is running on port: ${port}`);
    });
}).catch(err => {
    console.log('Ocurrio un error');
});
