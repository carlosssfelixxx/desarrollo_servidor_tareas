"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersController = void 0;
class UsersController {
    listAll(req, res) {
        res.send("lista de usuarios");
    }
}
exports.UsersController = UsersController;
const usersController = new UsersController();
exports.default = usersController;
