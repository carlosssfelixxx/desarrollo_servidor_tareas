"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const users_controller_1 = __importDefault(require("../controllers/users.controller"));
const roles_1 = require("../middlewares/roles");
const router = (0, express_1.Router)();
router.get('', (0, roles_1.rolesMiddleware)(['admin', 'gerente']), users_controller_1.default.listAll);
exports.default = router;
