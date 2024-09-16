import { Request, Response, NextFunction } from 'express';
import { User } from '../types/users';

export function rolesMiddleware(roles: string | string[]) {
    return function returnMiddleware(req: Request, res: Response, next: NextFunction) {
        req.user = { id: '1', name: 'Carlos Felix', role: 'admin' }; //hardcoded fake user

        if (typeof roles === 'string') {
            if(req.user.role === roles) {
                return next();
            }
        } 
        else if (Array.isArray(roles)) {
            for (const str of roles) {
                if (str === req.user.role) {
                    return next();
                }
            }
        }

        res.sendStatus(403);
    }
}


