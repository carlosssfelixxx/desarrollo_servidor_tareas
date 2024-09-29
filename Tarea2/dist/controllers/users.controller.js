"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = __importDefault(require("./../models/user"));
const http_status_codes_1 = require("../types/http-status-codes");
class UsersController {
    getAll(req, res) {
        user_1.default.find({}).then(response => {
            res.send(response);
        }).catch(error => {
            res.sendStatus(http_status_codes_1.HTTP_STATUS_CODES.SERVER_ERROR);
        });
    }
}
const controller = new UsersController();
exports.default = controller;
