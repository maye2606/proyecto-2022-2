// import * as bcrypt from 'bcrypt'
import { NextFunction, Request, Response } from 'express'
import { check } from 'express-validator'
import { validateResult } from '../helpers/validateHelper'
import { User } from '../models/User'

export const validateCreate = [
    check('email')
        .exists()
        .not()
        .isEmpty()
        .isEmail()
        .withMessage('Formato invalido de email')
        .custom( email => { return User.findOne({ where:{email} }).then(user => { if(user) return Promise.reject('Email en uso') }) }),
    check('password')
        .exists()
        .not()
        .isEmpty()
        .isLength({ min: 8 })
        .withMessage('Invalid password'),
    (req:Request,res:Response,next:NextFunction)=>{
        validateResult(req,res,next)
    }
];