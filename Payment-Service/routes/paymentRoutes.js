import express from 'express';
import verifytoken from "../Jwt-Middleware/verifytoken.js";
import {createPayment,getPaymentStatus,refundPayment} from '../controllers/paymentController.js';

const router=express.Router();

router.post('/payment/createpayment',verifytoken,createPayment);
router.get('/payment/status/:paymentId', verifytoken, getPaymentStatus);
router.post('/payment/refund/:paymentId', verifytoken, refundPayment);

export default router;
