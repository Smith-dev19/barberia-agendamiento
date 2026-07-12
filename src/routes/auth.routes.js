import {Router} from 'express'
import { register, login } from '../controllers/auth.controller.js'
const router = Router()

//Route register
router.post('/register',register);

//Route login
router.post('/login',login);

export default router;