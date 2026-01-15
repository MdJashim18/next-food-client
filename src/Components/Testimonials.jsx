import React from "react";

const Testimonials = () => {
  return (
    <div className="bg-base-100">
      
      <section className="py-16 bg-base-200">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl  text-center mb-10 md:text-4xl font-bold text-gray-900">
            What Our Customers Say
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
            <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow border-t-4 border-green-500">
              <div className="card-body items-center text-center">
                <div className="rating mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <input
                      key={star}
                      type="radio"
                      name="rating-1"
                      className="mask mask-star-2 bg-green-400"
                      checked
                      readOnly
                    />
                  ))}
                </div>
                <p className="text-lg italic text-gray-600">
                  "Their food is always fresh and the delivery is super fast!"
                </p>
                <div className="mt-6">
                  <h4 className="font-bold text-xl">- Arif Ahmed</h4>
                  <span className="text-sm text-gray-500">Regular Customer</span>
                </div>
              </div>
            </div>

            <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow border-t-4 border-green-500">
              <div className="card-body items-center text-center">
                <div className="rating mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <input
                      key={star}
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-green-400"
                      checked
                      readOnly
                    />
                  ))}
                </div>
                <p className="text-lg italic text-gray-600">
                  "I ordered biryani and it tasted just like homemade food."
                </p>
                <div className="mt-6">
                  <h4 className="font-bold text-xl">- Maliha Khan</h4>
                  <span className="text-sm text-gray-500">Food Lover</span>
                </div>
              </div>
            </div>

            <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow border-t-4 border-green-500">
              <div className="card-body items-center text-center">
                <div className="rating mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <input
                      key={star}
                      type="radio"
                      name="rating-3"
                      className="mask mask-star-2 bg-green-400"
                      checked
                      readOnly
                    />
                  ))}
                </div>
                <p className="text-lg italic text-gray-600">
                  "The packaging was excellent and the food arrived hot. Thank you!"
                </p>
                <div className="mt-6">
                  <h4 className="font-bold text-xl">- Sakib Al Hasan</h4>
                  <span className="text-sm text-gray-500">New Customer</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="bg-gray-800 rounded-3xl p-8 md:p-16 text-center text-primary-content shadow-2xl">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
              Subscribe to Get Updates on New Foods
            </h2>
            <p className="text-lg mb-10 opacity-90 max-w-2xl mx-auto">
              Join today to receive special offers, discount coupons, and new menu updates directly in your inbox.
            </p>
            
            <div className="max-w-md mx-auto">
              <div className="join w-full">
                <input 
                  type="email" 
                  placeholder="Email Address" 
                  className="input input-bordered join-item w-full text-black focus:outline-none" 
                  required
                />
                <button className="btn bg-green-500 outline-0 join-item px-8 font-bold">
                  Join Now
                </button>
              </div>
              <label className="label mt-2 justify-center">
                <span className="label-text-alt text-white opacity-70 italic">
                  We never share your email with anyone.
                </span>
              </label>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Testimonials;
