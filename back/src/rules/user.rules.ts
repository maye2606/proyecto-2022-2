// import * as bcrypt from 'bcrypt'
import { check } from 'express-validator/check'
import { User } from '../models/User'

export const userRules = {
  forCreate: [
    check('email')
      .isEmail().withMessage('Invalid email format')
      .custom(email => User.findOne({ where: { email } }).then(u => !!!u)).withMessage('Email exists'),
    check('password')
      .isLength({ min: 8 }).withMessage('Invalid password')
  ]
}