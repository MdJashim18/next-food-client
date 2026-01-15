import React from 'react';
import { FiTruck, FiStar, FiShield, FiClock } from 'react-icons/fi';

const Features = () => {
  const features = [
    {
      icon: <FiTruck className="text-3xl" />,
      title: "Fast Delivery",
      description: "30 minutes delivery guaranteed or get 50% off",
      color: "from-indigo-600 to-purple-600"
    },
    {
      icon: <FiStar className="text-3xl" />,
      title: "Top Rated",
      description: "4.8+ average customer rating from 10K+ reviews",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <FiShield className="text-3xl" />,
      title: "Safe & Secure",
      description: "Contactless delivery and hygienic packaging",
      color: "from-blue-500 to-indigo-600"
    },
    {
      icon: <FiClock className="text-3xl" />,
      title: "24/7 Service",
      description: "Order anytime, we deliver 24 hours a day",
      color: "from-purple-600 to-indigo-600"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-indigo-50">
      <div className="max-w-7xl mx-auto px-4">

       
        <div className="text-center mb-14">
          <h2 className="text-4xl font-extrabold text-gray-900">
            Why Choose FoodLovers
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mt-4">
            We deliver excellence in every bite with our premium service
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="
                bg-white 
                p-7 rounded-2xl 
                shadow-lg 
                border 
                border-indigo-100 
                hover:shadow-2xl 
                transition-all 
                duration-300 
                transform 
                group-hover:-translate-y-3
                hover:border-indigo-300
              ">
                <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${feature.color} flex items-center justify-center text-white mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 text-center mb-2 group-hover:text-indigo-600 transition">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-center">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>


      </div>
    </section>
  );
};

export default Features;