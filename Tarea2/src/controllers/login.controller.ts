import { Request, Response } from 'express';
import User from './../models/user';
import { HTTP_STATUS_CODES } from "../types/http-status-codes";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

class LoginController {
    login(req: Request, res: Response) {
        const { email, password } = req.body;

        User.findOne({ email })
            .then(user => {
                if (!user) {
                    return res.status(HTTP_STATUS_CODES.NOT_FOUND).send('Usuario no encontrado');
                }

                bcrypt.compare(password, user.password)
                    .then(function(result) {
                        if(!result) {
                            return res.status(HTTP_STATUS_CODES.AUTHORIZATION).send('Contraseña incorrecta');
                        }
                        const key = process.env.SECRET_KEY;
                        if (!key) {
                            throw new Error('La lave secreta de JWT no se recupero de la variable de entorno');
                        }
                        const token = jwt.sign({ id: user._id, email: user.email }, key, { expiresIn: '2 days' });
                        return res.status(HTTP_STATUS_CODES.SUCCESS).send(token);
                    });
            });
    }
}

const controller = new LoginController();

export default controller;