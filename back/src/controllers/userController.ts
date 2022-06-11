import { User } from '../models/User'
import { UserInput, UserModel, UserOuput} from '../interfaces/User.interface'
import { NextFunction, Request, Response} from 'express'
import bcrypt from 'bcrypt'
// import * as jwt from 'jsonwebtoken'
// import * as Bluebird from 'Bluebird'

export const getAll = async (_req: Request, res: Response): Promise<Response> => {
    const allUser: UserModel[] = await User.findAll();
    return res.status(200).json(allUser);
}

export const get = async (req: Request, res: Response): Promise<Response> => {
    const user = await User.findByPk(req.params.idUser);
    return res.status(200).json(user);
}

export const create = async (req: Request, res: Response): Promise<Response> => {
    const { email, password } = req.body,
    hash = bcrypt.hashSync(password, bcrypt.genSaltSync(8));

    try {
        await User.create({ email, password: hash})
        return res.status(200).json({mensaje : 'Usuario Creado Correctamente'});
    } catch (error) {
        return res.json({mensaje: error});
    }

}

export const update = async (req: Request, res: Response, next: NextFunction): Promise<Response> => {
    try {
        let user = await User.findByPk(req.params.idUser);
        
        user?.update({
            ...req.body
        })
            
        user?.save();

        return res.status(200).json(user);
    } catch (error) {
        return res.json({mensaje: error});
        next();
    }

}
