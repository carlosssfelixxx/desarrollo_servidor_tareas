"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = __importDefault(require("./../models/user"));
const http_status_codes_1 = require("../types/http-status-codes");
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
class LoginController {
    login(req, res) {
        const { email, password } = req.body;
        user_1.default.findOne({ email })
            .then(user => {
            if (!user) {
                return res.status(http_status_codes_1.HTTP_STATUS_CODES.NOT_FOUND).send('Usuario no encontrado');
            }
            bcrypt_1.default.compare(password, user.password)
                .then(function (result) {
                if (!result) {
                    return res.status(http_status_codes_1.HTTP_STATUS_CODES.AUTHORIZATION).send('Contraseña incorrecta');
                }
                const key = process.env.SECRET_KEY;
                if (!key) {
                    throw new Error('La lave secreta de JWT no se recupero de la variable de entorno');
                }
                const token = jsonwebtoken_1.default.sign({ id: user._id, email: user.email }, key, { expiresIn: '2 days' });
                return res.status(http_status_codes_1.HTTP_STATUS_CODES.SUCCESS).send(token);
            });
        });
    }
}
const controller = new LoginController();
exports.default = controller;
