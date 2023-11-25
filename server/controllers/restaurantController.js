// import Restaurant from "../models/restaurant.js"
import db from '../models/index.js'

const Restaurant = db.Restaurant;

export const getAllRestaurants = async (req, res, next) => {
    try {
        console.log(req.body)
       
    } catch (err) {
        console.log(err, "in controller")
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

export const createRestaurant = async (req, res, next) => {
    try {
        console.log(req.body)
        const { name, address, contact, imageUrl } = req.body;

        const newRestaurant = await Restaurant.create({
            name,
            address,
            contact,
            imageUrl,
        });

        res.status(201).json({
            message: 'Restaurant created successfully',
            restaurant: newRestaurant,
        });
    } catch (err) {
        console.log(err, "in controller")
        res.status(500).json({ error: 'Internal Server Error' });
    }
}


export const updateRestaurant = (req, res, next) => {
    try {
        console.log(req.body)
        res.status(200).json({message:"messaage recieved successfully"})
    } catch (err) {
        console.log(err, "in controller")
    }
}


export const deleteRestaurant = (req, res, next) => {
    try {
        console.log(req.body)
        res.status(200).json({message:"messaage recieved successfully"})
    } catch (err) {
        console.log(err, "in controller")
    }
}



