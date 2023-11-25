import React from "react";
import { Route, Routes } from 'react-router-dom';
import Home from '../Pages/Home/Home';
import Restaurant from "../Components/Restaurants/Restaurants";


const UserRoutes = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/restaurants" element={<Restaurant/>} />
            </Routes>
        </div>
    )
}

export default UserRoutes;