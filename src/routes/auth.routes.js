import {Router} from 'express'
import { register, login, logout, profile } from '../controllers/auth.controller.js'
import {authRequired} from '../middleware/validateToken.js'
const router = Router()

//Route register
router.post('/register',register);

//Route login
router.post('/login',login);

//Route Logout
router.post('/logout',logout);

//route profile
router.get('/profile', authRequired,profile)

export default router;