import { Request, Response } from "express";

export class UsersController {
    listAll(req: Request, res:Response) {
        res.send("lista de usuarios");
    }
}

const usersController = new UsersController();
export default usersController;