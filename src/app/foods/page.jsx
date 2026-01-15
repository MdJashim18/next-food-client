"use client";

import React, { useEffect, useState } from "react";
import FoodsCard from "@/Components/FoodsCard";

const Foods = () => {
  const [foods, setFoods] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://food-network-api.vercel.app/foods")
      .then(res => res.json())
      .then(data => {
        setFoods(data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <h2 className="text-center py-20">Loading foods...</h2>;
  }
  return (
    <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-6 max-w-7xl mx-auto">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-2 text-gray-900">
        Our Delicious Menu
      </h1>
      <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
        Discover a wide variety of mouth-watering dishes from top restaurants
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {foods.slice(0,8).map(food => (
          <FoodsCard key={food._id} food={food} />
        ))}
      </div>
    </div>
  );
};

export default Foods;
