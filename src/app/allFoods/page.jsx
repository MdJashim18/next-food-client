"use client";

import React, { useEffect, useState } from "react";
import AllFoods from "@/Components/AllFoods";
import { useRouter } from "next/navigation";

const Foods = () => {
  const [foods, setFoods] = useState([]);
  const [loading, setLoading] = useState(true);

 
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  const router = useRouter();

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

  const handleGoBack = () => {
    router.back();
  };

 
  const totalPages = Math.ceil(foods.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentFoods = foods.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  if (loading) {
    return <h2 className="text-center py-20">Loading foods...</h2>;
  }

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="max-w-6xl mx-auto mb-4">
        <button onClick={handleGoBack} className="btn">
          Go Back
        </button>
      </div>

      <h1 className="text-3xl md:text-4xl font-bold text-center mb-2 text-gray-900">
        Our Delicious Menu
      </h1>
      <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
        Discover a wide variety of mouth-watering dishes from top restaurants
      </p>

      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {currentFoods.map(food => (
          <AllFoods key={food._id} food={food} />
        ))}
      </div>

      <div className="flex justify-center items-center gap-2 mt-12 flex-wrap">
        <button
          onClick={() => setCurrentPage(prev => prev - 1)}
          disabled={currentPage === 1}
          className="px-4 py-2 border rounded-md disabled:opacity-50"
        >
          Prev
        </button>

        {[...Array(totalPages).keys()].map(page => (
          <button
            key={page}
            onClick={() => setCurrentPage(page + 1)}
            className={`px-4 py-2 border rounded-md ${
              currentPage === page + 1
                ? "bg-green-600 text-white"
                : "bg-white"
            }`}
          >
            {page + 1}
          </button>
        ))}

        <button
          onClick={() => setCurrentPage(prev => prev + 1)}
          disabled={currentPage === totalPages}
          className="px-4 py-2 border rounded-md disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Foods;
