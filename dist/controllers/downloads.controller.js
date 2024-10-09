"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
class DownloadsController {
    download(req, res) {
        const file = req.query.file;
        const filePath = path_1.default.join(__dirname, '..', '..', 'documents', file);
        console.log(`Ruta completa del archivo: ${filePath}`);
        if (fs_1.default.existsSync(filePath)) {
            res.sendFile(filePath);
        }
        else {
            res.status(404).send('Archivo no encontrado.');
        }
    }
}
const controller = new DownloadsController();
exports.default = controller;
