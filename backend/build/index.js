"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const express_session_1 = __importDefault(require("express-session"));
const cors_1 = __importDefault(require("cors"));
const HomeRoute_1 = __importDefault(require("./Routes/HomeRoute"));
const app = (0, express_1.default)();
const port = 3001;
app.use((0, cors_1.default)());
app.use(express_1.default.urlencoded({ extended: false }));
app.use(express_1.default.json());
app.use((0, express_session_1.default)({
    secret: 'sesseionTS',
    resave: false,
    saveUninitialized: false,
    /* cookie: { maxAge: 60000 * 0.5 } */
}));
app.use(HomeRoute_1.default);
app.listen(port, () => console.log('Server started on port ' + port));
