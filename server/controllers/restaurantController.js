import db from '../models/index.js'

const Restaurant = db.Restaurant;

export const getAllRestaurants = async (req, res, next) => {
    try {
        let restaurant = await Restaurant.findAll({})
        res.status(200).send(restaurant)
    } catch (err) {
        console.log(err, "in controller")
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

export const createRestaurant = async (req, res, next) => {
    try {
        const { name, address, contact } = req.body;
        const newRestaurant = await Restaurant.create({
            name,
            address,
            contact,
            imageUrl: req.file.path,
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


export const updateRestaurant = async (req, res, next) => {
    try {
        let id = req.params.id
        console.log(id,"Id Tracked")

        const product = await Restaurant.update(req.body, { where: { id: id } })
        res.status(200).json({
            message: 'Restaurant updated successfully',
            restaurant: product,
        });
    } catch (err) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
}


export const deleteRestaurant = async (req, res, next) => {
    try {
        let id = req.params.id
        console.log(id)
        await Restaurant.destroy({ where: { id: id } })
        res.status(200).json({ message: "messaage recieved successfully" })
    } catch (err) {
        console.log(err, "in controller")
    }
}



