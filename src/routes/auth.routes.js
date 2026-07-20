import {Router} from 'express'
import { register, login, logout } from '../controllers/auth.controller.js'
const router = Router()

//Route register
router.post('/register',register);

//Route login
router.post('/login',login);

//Route Logout
router.post('/logout',logout);

export default router;