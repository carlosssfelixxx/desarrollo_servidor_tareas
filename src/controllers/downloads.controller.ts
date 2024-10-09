import { Request, Response } from "express";
import path from "path";
import fs from "fs";

class DownloadsController {
    download(req: Request, res: Response) {
        const file = req.query.file as string;
        const filePath = path.join(__dirname, '..', '..', 'documents', file);
        console.log(`Ruta completa del archivo: ${filePath}`);
        if (fs.existsSync(filePath)) {
            res.sendFile(filePath);
        } else {
            res.status(404).send('Archivo no encontrado.');
        }
    }
}

const controller = new DownloadsController();
export default controller;