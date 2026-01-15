"use client";

import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const FoodDetails = () => {
  const { id } = useParams();
  const [food, setFood] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter()

  useEffect(() => {
    if (!id) return;

    fetch("https://food-network-api.vercel.app/foods")
      .then((res) => res.json())
      .then((data) => {
        const singleFood = data.find((item) => item._id === id);
        setFood(singleFood);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching food:", error);
        setLoading(false);
      });
  }, [id]);
  const handleGoBack = () => {
    router.back();
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (!food) {
    return (
      <div className="flex flex-col justify-center items-center min-h-screen">
        <h2 className="text-2xl font-bold text-gray-700 mb-4">Food not found</h2>
        <p className="text-gray-500">The food item you're looking for doesn't exist.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-6xl mx-auto mb-2">
        <button
          onClick={handleGoBack}
          className="btn"
        >
          Go Back
        </button>
      </div>
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="relative h-96">
            <img
              src={food.photo}
              alt={food.food_name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="absolute bottom-6 left-8 text-white">
              <h1 className="text-4xl font-bold mb-2">{food.food_name}</h1>
              <p className="text-xl opacity-90">{food.restaurant_name}</p>
            </div>
            <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full">
              <span className="text-lg font-bold text-blue-600">${food.price}</span>
            </div>
          </div>

          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 p-8">
           
            <div className="lg:col-span-2">
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Description</h2>
                <p className="text-gray-600 text-lg leading-relaxed">{food.description}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold text-gray-700 mb-4">Restaurant Info</h3>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <span className="text-gray-500 w-32">Location</span>
                      <span className="font-medium">{food.restaurant_location}</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-gray-500 w-32">Category</span>
                      <span className="font-medium bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm">
                        {food.category}
                      </span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-gray-500 w-32">Rating</span>
                      <div className="flex items-center">
                        <span className="text-yellow-500 text-lg mr-2">★</span>
                        <span className="font-bold text-gray-700">{food.rating}</span>
                        <span className="text-gray-400 ml-1">/5</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold text-gray-700 mb-4">Order Details</h3>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <span className="text-gray-500 w-32">Availability</span>
                      <span
                        className={`font-medium px-3 py-1 rounded-full text-sm ${food.available === "true"
                          ? "bg-green-100 text-green-600"
                          : "bg-red-100 text-red-600"
                          }`}
                      >
                        {food.available}
                      </span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-gray-500 w-32">Prep Time</span>
                      <span className="font-medium">{food.preparation_time}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

         
            <div className="lg:col-span-1">
              <div className="sticky top-8 bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100 rounded-2xl p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Quick Summary</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center pb-3 border-b border-blue-100">
                    <span className="text-gray-600">Food Name</span>
                    <span className="font-semibold text-gray-800">{food.food_name}</span>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b border-blue-100">
                    <span className="text-gray-600">Restaurant</span>
                    <span className="font-semibold text-gray-800">{food.restaurant_name}</span>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b border-blue-100">
                    <span className="text-gray-600">Price</span>
                    <span className="text-2xl font-bold text-blue-600">${food.price}</span>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b border-blue-100">
                    <span className="text-gray-600">Category</span>
                    <span className="font-semibold text-gray-800">{food.category}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Rating</span>
                    <div className="flex items-center">
                      <span className="text-yellow-500 mr-1">★</span>
                      <span className="font-bold text-gray-700">{food.rating}</span>
                    </div>
                  </div>
                </div>

               
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodDetails;