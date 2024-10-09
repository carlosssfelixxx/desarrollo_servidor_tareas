import { Request, Response } from "express";

class UploadsController {
    upload(req: Request, res: Response) {
        console.log('Archivos: ', req.files);
        if(req.files) {
            res.send(req.files);
        } else {
            res.status(400).send("Error al subir el archivo");
        }
    }
}

const controller = new UploadsController();
export default controller;