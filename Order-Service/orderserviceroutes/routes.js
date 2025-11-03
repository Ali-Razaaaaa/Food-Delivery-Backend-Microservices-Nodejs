import express from 'express';
import {createOrder,getorderbyid,getUserorder,getallorders,updateOrderStatus,cancelOrder} from '../orderservicecontroller/controller.js';
import jwtverify from '../Jwt-Middleware/verifytoken.js';

const router=express.Router();

router.post('/createorder',jwtverify,createOrder);
router.get('/get/:id',jwtverify,getorderbyid);
router.get('/users/:id',jwtverify,getUserorder);
router.get('/allorders',jwtverify,getallorders);

router.patch('/orders/:id/status', jwtverify, updateOrderStatus);
router.delete('/orders/:id', jwtverify, cancelOrder);

export default router;