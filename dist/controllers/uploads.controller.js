"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class UploadsController {
    upload(req, res) {
        console.log('Archivos: ', req.files);
        if (req.files) {
            res.send(req.files);
        }
        else {
            res.status(400).send("Error al subir el archivo");
        }
    }
}
const controller = new UploadsController();
exports.default = controller;
