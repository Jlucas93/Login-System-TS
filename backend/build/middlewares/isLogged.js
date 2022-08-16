"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const isLogged = (req, res, next) => {
    if (!req.session.user) {
        return res.status(401).json("Não está logado");
    }
    return next();
};
exports.default = isLogged;
