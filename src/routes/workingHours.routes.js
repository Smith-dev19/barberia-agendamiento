import { Router } from 'express'
import { authRequired } from "../middleware/validateToken.js";
import {getWorks,getWork,createWork} from '../controllers/workingHours.controller.js'
const router = Router()

router.get('/works', authRequired, getWorks)
router.get('/working/:id', authRequired,getWork)
router.post('/working', authRequired,createWork)


export default router