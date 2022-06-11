"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.create = exports.get = exports.getAll = void 0;
const User_1 = require("../models/User");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
// import * as jwt from 'jsonwebtoken'
// import * as Bluebird from 'Bluebird'
const getAll = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const allUser = yield User_1.User.findAll();
    return res.status(200).json(allUser);
});
exports.getAll = getAll;
const get = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield User_1.User.findByPk(req.params.idUser);
    return res.status(200).json(user);
});
exports.get = get;
const create = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body, hash = bcryptjs_1.default.hashSync(password, bcryptjs_1.default.genSaltSync(8));
    console.log(hash);
    try {
        yield User_1.User.create({ email, password });
        return res.status(200).json({ mensaje: 'Usuario Creado Correctamente' });
    }
    catch (error) {
        console.log(error);
        return res.json({ mensaje: error });
    }
});
exports.create = create;
//# sourceMappingURL=userController.js.map