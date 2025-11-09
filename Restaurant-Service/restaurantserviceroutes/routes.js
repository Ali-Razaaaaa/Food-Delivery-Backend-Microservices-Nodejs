import express from 'express';
import { postrestaurant, postcategory, getrestaurants, getrestaurantdetails, upload_dish } from '../restaurantservicecontroller/controller.js';
import verifytoken from '../Jwt-Middlware/verifytoken.js';

const router = express.Router();

router.get('/get', verifytoken, getrestaurants); 

router.post('/post', verifytoken, postrestaurant);

router.post('/:id/categories', verifytoken, postcategory); 

router.post('/categories/:id/dishes', verifytoken, upload_dish);

router.get('/getrestaurantdetails', verifytoken, getrestaurantdetails);

export default router;
