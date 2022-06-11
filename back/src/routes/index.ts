import { Router} from 'express'
import { validateCreate } from '../rules/user.rules'
import * as userController from '../controllers/userController';

const router = Router()

router.get("/user", userController.getAll);
router.get("/user/:idUser", userController.get);
router.post("/user/create", validateCreate, userController.create);
router.put("/user/:idUser", validateCreate, userController.update);
router.delete("/user/:idUser", userController.destroy);

export default router