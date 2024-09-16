"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rolesMiddleware = rolesMiddleware;
function rolesMiddleware(roles) {
    return function returnMiddleware(req, res, next) {
        req.user = { id: '1', name: 'Carlos Felix', role: 'admin' }; //hardcoded fake user
        if (typeof roles === 'string') {
            if (req.user.role === roles) {
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
    };
}
