"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const download_1 = __importDefault(require("./download"));
const uploads_1 = __importDefault(require("./uploads"));
const upload_1 = __importDefault(require("../middlewares/upload"));
const router = (0, express_1.Router)();
router.use('/uploads', upload_1.default.array('docs'), uploads_1.default);
router.use('/download', download_1.default);
exports.default = router;
