"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const homeController = {
    index: (_req, res) => {
        return res.status(200).json("Servidor Rodando express + TS " + new Date());
    }
};
exports.default = homeController;
