import { Router} from 'express'
// import { UserService }from "../services/user.service"
// import { matchedData } from 'express-validator/filter'
// import { validationResult } from 'express-validator/check'
import { userRules } from '../rules/user.rules'
// import { UserAddModel } from "../interfaces/User.interface";
import * as userController from '../controllers/userController';

const router = Router()

router.get("/users", userController.getAll);
router.get("/user/:idUser", userController.get);
router.post("/user/create", userRules['forCreate'], userController.create);

export default router