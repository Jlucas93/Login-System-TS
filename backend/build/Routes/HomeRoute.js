"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const HomeContreoller_1 = __importDefault(require("../Controllers/HomeContreoller"));
const homeRoutes = (0, express_1.Router)();
homeRoutes.get('/', HomeContreoller_1.default.index);
exports.default = homeRoutes;
