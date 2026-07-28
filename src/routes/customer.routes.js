import { Router } from 'express'
import { authRequired } from "../middleware/validateToken.js";
import {getCustomer, getCustomers, createCustomer, deleteCustomer, updateCustomer} from '../controllers/customer.controller.js'
const router = Router()

router.get('/customer', authRequired, getCustomers)
router.get('/customer/:id', authRequired,getCustomer)
router.post('/customer', authRequired,createCustomer)
router.delete('/customer/:id', authRequired,deleteCustomer)
router.put('/customer/:id', authRequired,updateCustomer)

export default router