import { Request, Response } from 'express';
import User from './../models/user';
import { HTTP_STATUS_CODES } from "../types/http-status-codes";
import bcrypt from 'bcrypt';

class RegisterController {
    register(req: Request, res: Response) {
        const { firstName, lastName, email, password, role, status } = req.body;

        if (!password) {
            return res.status(HTTP_STATUS_CODES.NOT_FOUND).send('La contraseña es requerida');
        }

        User.findOne({ email }) //sabemos q los emails son unicos
            .then(user => {
                if (user) {
                    return res.status(HTTP_STATUS_CODES.CONFLICT).send('Usuario ya existe');
                }
                //encriptar la contraseña
                return bcrypt.genSalt(10)
                    .then(salt => bcrypt.hash(password, salt))
                    .then(hashedPassword => {
                        const newUser = new User({
                            firstName,
                            lastName,
                            email,
                            password: hashedPassword, 
                            role: role || 'user', 
                            status: status || 'new' 
                        });
                        return newUser.save();
                    })
                    .then(() => res.status(HTTP_STATUS_CODES.SUCCESS).send('Se ha creado el usuario'))
                    .catch(err => {
                        res.status(HTTP_STATUS_CODES.SERVER_ERROR).send('Server Error');
                    });
            })
            .catch(err => {
                res.status(HTTP_STATUS_CODES.SERVER_ERROR).send('Server Error');
            });
    }
}

const controller = new RegisterController();

export default controller;