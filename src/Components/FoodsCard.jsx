"use client";

import React from "react";
import Link from "next/link";

export default function FoodsCard({ food }) {
  const shortDescription = food.description
    ? food.description.split(" ").slice(0, 5).join(" ") + "..."
    : "";

  return (
    <div className="bg-white shadow-lg rounded-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col">
      
   
      <div className="w-full h-48 overflow-hidden">
        <img
          src={food.photo}
          alt={food.food_name}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="p-4 flex flex-col flex-grow">
        <h2 className="font-semibold text-lg mb-1">{food.food_name}</h2>

        <p className="text-sm text-blue-600 font-medium">
          {food.price} BDT
        </p>

        <p className="mt-3 text-gray-700 text-sm">
          {shortDescription}
        </p>

        <Link
          href={`/foods/${food._id}`}
          className="mt-auto inline-block bg-green-600 text-white px-4 py-2 rounded-md text-sm hover:bg-green-700 transition-colors w-full text-center"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}
