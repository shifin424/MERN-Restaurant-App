import express from 'express';
import { createRestaurant, deleteRestaurant, getAllRestaurants, updateRestaurant } from '../controllers/restaurantController.js';
import uploadImage from '../middleware/cloudinary.js';

const router = express.Router()


router.get('/restaurants', getAllRestaurants);
router.post('/restaurants',uploadImage,createRestaurant);
router.put('/restaurants/:id', updateRestaurant);
router.delete('/restaurants/:id', deleteRestaurant);

export default router