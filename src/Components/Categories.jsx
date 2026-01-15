'use client'
import { useEffect, useState } from "react";

export default function Categories() {
    const [categories, seCategories] = useState([])
    
    const categoryImages = [
        "https://i.ibb.co.com/N2zs1DJh/Double-Bacon-Cheeseburger.jpg",
        "https://i.ibb.co.com/r2d3vn04/Classic-Margherita-Pizza-Game-Night-022.jpg",
        "https://i.ibb.co.com/LjmcmtB/Chocolate-Lava-Cake.jpg",
        "https://i.ibb.co.com/Kx6VSTJr/Mango-Lassi.jpg",
        "https://i.ibb.co.com/Lh1B0x4m/Beef-Burrito-Bowl.jpg",
        "https://i.ibb.co.com/pB35mqv1/Chicken-Shawarma-Plate.jpg",
        "https://i.ibb.co.com/jZy3p9k3/Spicy-Chicken-Tikka.jpg",
        "https://i.ibb.co.com/j9jWFKSG/Seafood-Paella.jpg"
    ];

    useEffect(() => {
        fetch("https://food-network-api.vercel.app/categories")
            .then(res => res.json())
            .then(data => {
                seCategories(data);
            })
            .catch(err => {
                console.error(err);
            });
    }, [])

    return (
        <section className="bg-gradient-to-r from-gray-50 to-gray-100 py-16 px-4">
            <div className="max-w-7xl mx-auto">
              
                <div className="flex flex-col md:flex-row justify-center items-center mb-12">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                            Food Categories
                        </h2>
                        <p className="text-gray-600 mt-2">
                            Discover amazing dishes from different categories
                        </p>
                    </div>
                    
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {categories.map((cat, index) => (
                        <div 
                            key={cat._id} 
                            className="relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-[1.02] group"
                        >
                            <div className="absolute inset-0">
                                <img 
                                    src={categoryImages[index % categoryImages.length]}
                                    alt={cat.name}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                            </div>
                            
                          
                            <div className="relative p-6 h-64 flex flex-col justify-end">
                                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-green-300 transition-colors duration-300">
                                    {cat.name}
                                </h3>
                                <p className="text-gray-200 text-sm mb-4">
                                    Explore delicious {cat.name.toLowerCase()} dishes
                                </p>
                                
                               
                                <button className="w-full py-2 bg-white/10 backdrop-blur-sm text-white font-medium rounded-lg hover:bg-white hover:text-green-700 transition-all duration-300 border border-white/30">
                                    Explore
                                </button>
                            </div>
                            
                            <div className="absolute inset-0 bg-green-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}