"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = __importDefault(require("./../models/user"));
const http_status_codes_1 = require("../types/http-status-codes");
const bcrypt_1 = __importDefault(require("bcrypt"));
class RegisterController {
    register(req, res) {
        const { firstName, lastName, email, password, role, status } = req.body;
        if (!password) {
            return res.status(http_status_codes_1.HTTP_STATUS_CODES.NOT_FOUND).send('La contraseña es requerida');
        }
        user_1.default.findOne({ email }) //sabemos q los emails son unicos
            .then(user => {
            if (user) {
                return res.status(http_status_codes_1.HTTP_STATUS_CODES.CONFLICT).send('Usuario ya existe');
            }
            //encriptar la contraseña
            return bcrypt_1.default.genSalt(10)
                .then(salt => bcrypt_1.default.hash(password, salt))
                .then(hashedPassword => {
                const newUser = new user_1.default({
                    firstName,
                    lastName,
                    email,
                    password: hashedPassword,
                    role: role || 'user',
                    status: status || 'new'
                });
                return newUser.save();
            })
                .then(() => res.status(http_status_codes_1.HTTP_STATUS_CODES.SUCCESS).send('Se ha creado el usuario'))
                .catch(err => {
                res.status(http_status_codes_1.HTTP_STATUS_CODES.SERVER_ERROR).send('Server Error');
            });
        })
            .catch(err => {
            res.status(http_status_codes_1.HTTP_STATUS_CODES.SERVER_ERROR).send('Server Error');
        });
    }
}
const controller = new RegisterController();
exports.default = controller;
