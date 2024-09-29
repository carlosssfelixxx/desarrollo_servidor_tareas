import { Request, response, Response } from "express";
import User from './../models/user';
import { HTTP_STATUS_CODES } from "../types/http-status-codes";
import { User as UserType } from './../types/user'

class UsersController {
    getAll(req: Request, res: Response) {
        User.find({}).then(response => {
            res.send(response as UserType[]);
        }).catch(error => {
            res.sendStatus(HTTP_STATUS_CODES.SERVER_ERROR);
        });
    }
}

const controller = new UsersController();

export default controller;