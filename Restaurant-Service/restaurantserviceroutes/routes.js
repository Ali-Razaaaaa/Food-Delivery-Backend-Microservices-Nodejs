import express from 'express';
import { postrestaurant, postcategory, getrestaurants, getrestaurantdetails, upload_dish } from '../restaurantservicecontroller/controller.js';
import verifytoken from '../Jwt-Middlware/verifytoken.js';

const router = express.Router();

router.get('/get', verifytoken, getrestaurants); //Get all restaurants

router.post('/post', verifytoken, postrestaurant);//Post a new restaurant

router.post('/:id/categories', verifytoken, postcategory); //post a category inside a restaurant

router.post('/categories/:id/dishes', verifytoken, upload_dish);//post a dish inside a category

router.get('/getrestaurantdetails', verifytoken, getrestaurantdetails);// Get restaurant details, their categories and dishes

export default router;
