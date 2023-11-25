import React from "react";
import { Route, Routes } from 'react-router-dom';
import Home from '../Pages/Home/Home';
import Restaurant from "../Components/Restaurants/Restaurants";
import NewRestaurant from "../Pages/AddRestaurant/NewRestaurant";


const UserRoutes = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/restaurants" element={<Restaurant />} />
                <Route path="/restaurants/add" element={<NewRestaurant />} />
            </Routes>
        </div>
    )
}

export default UserRoutes;