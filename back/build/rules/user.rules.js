"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRules = void 0;
// import * as bcrypt from 'bcrypt'
const check_1 = require("express-validator/check");
const User_1 = require("../models/User");
exports.userRules = {
    forCreate: [
        (0, check_1.check)('email')
            .isEmail().withMessage('Invalid email format')
            .custom(email => User_1.User.findOne({ where: { email } }).then(u => !!!u)).withMessage('Email exists'),
        (0, check_1.check)('password')
            .isLength({ min: 8 }).withMessage('Invalid password')
    ]
};
//# sourceMappingURL=user.rules.js.map