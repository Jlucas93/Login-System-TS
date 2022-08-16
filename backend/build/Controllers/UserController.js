"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bcrypt_1 = __importDefault(require("bcrypt"));
const userController = {
    create: (req, res) => {
        const { id, name, lastName, email, password, } = req.body;
        try {
            const passwordHash = bcrypt_1.default.hash(password, 13);
            const newUser = {
                id,
                name,
                lastName,
                email,
                password: passwordHash,
            };
            return res.status(200).json("Usuário Criado");
        }
        catch (error) {
            console.log(error);
            return res.status(500).json("erro ao criar usuário");
        }
    }
};
exports.default = userController;
