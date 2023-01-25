import React from "react";
import { Routes, Route } from "react-router-dom";
import AddCourse from "../pages/add-course";
import DetailsPage from "../pages/details";
import HomePage from "../pages/home";
import WishlistPage from "../pages/wishlist";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/:id" element={<DetailsPage />} />
      <Route path="/add-course" element={<AddCourse />} />
      <Route path="/wishlist" element={<WishlistPage />} />
    </Routes>
  );
};

export default Routing;
