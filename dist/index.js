"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes_1 = __importDefault(require("./routes"));
const path_1 = __importDefault(require("path"));
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
app.use('/assets', express_1.default.static(path_1.default.join(__dirname, '..', 'public')));
app.use(routes_1.default);
app.listen(port, () => {
    console.log(`app is running on port: ${port}`);
});
