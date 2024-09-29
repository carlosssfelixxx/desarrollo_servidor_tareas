"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const schema = new mongoose_1.Schema({
    firstName: { type: mongoose_1.SchemaTypes.String, required: true },
    lastName: { type: mongoose_1.SchemaTypes.String, required: true },
    email: { type: mongoose_1.SchemaTypes.String, required: true },
    password: { type: mongoose_1.SchemaTypes.String, required: true },
    role: { type: mongoose_1.SchemaTypes.String, default: 'user' },
    status: { type: mongoose_1.SchemaTypes.String } // new, active, blocked, deleted, archived
});
const User = (0, mongoose_1.model)('User', schema);
exports.default = User;
