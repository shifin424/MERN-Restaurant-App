import express from 'express';
import { createRestaurant, deleteRestaurant, getAllRestaurants, updateRestaurant } from '../controllers/restaurantController.js';

const router = express.Router()



router.get('/restaurants', getAllRestaurants);
router.post('/restaurants', createRestaurant);
router.put('/restaurants/:id', updateRestaurant);
router.delete('/restaurants/:id', deleteRestaurant);

export default router