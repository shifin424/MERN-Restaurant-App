import React, { useEffect, useState } from 'react';
import { Button, message } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import { RestaurantDeleteApi, RestaurantListingApi } from '../../Services/Services';
import Swal from 'sweetalert2';
import AddButton from '../Button/Button';

const Restaurant = () => {
    const [restaurantData, setRestaurantData] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await RestaurantListingApi();
                if (response && response.data) {
                    setRestaurantData(response.data);
                } else {
                    message.error("Network error");
                }
            } catch (err) {
                console.log(err);
            }
        };
        fetchData();
    }, []);

    const handleUpdateClick = () => {
        navigate('/restaurant/update');
    };

    const handleDeleteClick = async (restaurantId) => {
        const result = await Swal.fire({
            title: "Delete Restaurant",
            text: "Are you sure you want to delete this restaurant?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#d33",
        });

        if (result.isConfirmed) {
            deleteRestaurant(restaurantId);
        }
    };

    const deleteRestaurant = async (id) => {
        try {
            const response = await RestaurantDeleteApi({ id });
            if (response && response.status === 200) {
                message.success("Restaurant deleted successfully");
                const updatedRestaurantData = restaurantData.filter(
                    (restaurant) => restaurant.id !== id
                );
                setRestaurantData(updatedRestaurantData);
            } else {
                message.error("Failed to delete restaurant");
            }
        } catch (err) {
            console.log(err);
            message.error("Network error");
        }
    };

    return (
        <div className="p-8">
            <div className="flex items-center justify-between mb-6">
                <h1 className="text-4xl font-bold text-gray-600 text-center md:text-left">
                    Discover Amazing Restaurants
                </h1>
                <Link to='/restaurants/add'>
                    <AddButton
                        className="bg-[#F39300] text-white px-6 py-3 rounded-lg hover:bg-orange-700 transition w-full md:w-full"
                        text="Add Restaurant"
                    />
                </Link>
            </div>

            <div className="flex flex-wrap justify-center items-center p-4">
                {restaurantData.map((restaurant) => (
                    <div key={restaurant.id} className="card relative w-full bg-[#fcca80] md:w-96 shadow-xl m-4">
                        <figure className="px-10 pt-10">
                            <img src={restaurant.imageUrl} alt={restaurant.name} className="rounded-xl w-full h-48 object-cover" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title text-gray-900 text-lg font-bold my-2">{restaurant.name}</h2>
                            <p className="text-md font-semibold  text-gray-950 mb-4">Address : {restaurant.address}</p>
                            <p className="text-lg font-semibold text-gray-950 mb-6">Contact : {restaurant.contact}</p>
                        </div>

                        <div className="absolute bottom-4  left-0 right-0 text-center">
                            <Button
                                onClick={handleUpdateClick}
                                className='bg-white mr-2 '
                            >
                                Update
                            </Button>
                            <Button
                                onClick={() => handleDeleteClick(restaurant.id)}
                                className='bg-red-600 text-white'
                            >
                                Delete
                            </Button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Restaurant;
