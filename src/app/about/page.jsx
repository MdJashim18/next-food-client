"use client";

import React from "react";
import Link from "next/link";
import {
  FaUtensils,
  FaUsers,
  FaPizzaSlice,
  FaHamburger,
  FaTruck,
  FaLeaf,
} from "react-icons/fa";
import { MdLocalDining, MdSecurity } from "react-icons/md";
import { GiMeal } from "react-icons/gi";

const About = () => {
  const team = [
    { name: "Sarah Johnson", role: "CEO & Founder" },
    { name: "Michael Chen", role: "Head Chef" },
    { name: "Emma Davis", role: "Community Manager" },
    { name: "David Wilson", role: "Marketing Director" },
  ];

  const values = [
    {
      icon: <FaUtensils />,
      title: "Freshness",
      desc: "We serve fresh and quality meals every time",
    },
    {
      icon: <MdLocalDining />,
      title: "Variety",
      desc: "A wide range of dishes from different cuisines",
    },
    {
      icon: <FaLeaf />,
      title: "Healthy",
      desc: "Nutritious meals prepared with care",
    },
    {
      icon: <MdSecurity />,
      title: "Safe & Hygienic",
      desc: "Your food is prepared in safe, clean kitchens",
    },
    {
      icon: <FaUsers />,
      title: "Customer Care",
      desc: "We value our customers and listen to feedback",
    },
    {
      icon: <GiMeal />,
      title: "Innovation",
      desc: "We constantly add new dishes and offers",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-700 via-green-600 to-green-500 text-white py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl lg:text-6xl font-bold mb-6">
            About FoodLovers
          </h1>
          <p className="text-xl text-green-100 max-w-3xl mx-auto">
            Delivering delicious meals fresh to your doorstep
          </p>
        </div>
      </section>

   
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <h2 className="text-4xl font-bold mb-6">Our Story</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                Started in 2020, FoodLovers aims to deliver fresh and tasty
                meals to your doorstep in record time.
              </p>
              <p>
                From local favorites to international cuisines, we offer a wide
                variety of dishes for every palate.
              </p>
              <p>
                Our mission is to connect food lovers with top-quality meals
                while ensuring freshness and fast delivery.
              </p>
            </div>
          </div>

          <div className="lg:w-1/2 bg-gradient-to-br from-green-100 to-green-200 rounded-2xl p-8">
            <div className="grid grid-cols-2 gap-6">
              <Stat
                icon={<FaPizzaSlice />}
                value="1000+"
                label="Dishes Served"
                color="text-yellow-500"
              />
              <Stat
                icon={<FaUsers />}
                value="50K+"
                label="Happy Customers"
                color="text-blue-500"
              />
              <Stat
                icon={<FaTruck />}
                value="500+"
                label="Deliveries Completed"
                color="text-green-500"
              />
              <Stat
                icon={<FaHamburger />}
                value="50+"
                label="Restaurants Partnered"
                color="text-red-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((v, i) => (
              <div
                key={i}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition"
              >
                <div className="text-green-600 text-4xl mb-4">{v.icon}</div>
                <h3 className="text-xl font-bold mb-2">{v.title}</h3>
                <p className="text-gray-600">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Meet Our Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition"
              >
                <h3 className="text-xl font-bold">{member.name}</h3>
                <p className="text-green-600">{member.role}</p>
                <p className="text-sm text-gray-600 mt-2">
                  Passionate about serving fresh and tasty meals
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-gradient-to-r from-green-700 to-green-600 text-white text-center">
        <h2 className="text-4xl font-bold mb-6">Join Our FoodLovers Community</h2>
        <p className="text-xl text-green-100 mb-10">
          Enjoy fresh meals, exclusive offers, and fast delivery
        </p>
        <Link
          href="/contact"
          className="inline-block border-2 border-white px-10 py-4 rounded-xl text-lg font-bold hover:bg-white/10 transition"
        >
          Contact Us
        </Link>
      </section>
    </div>
  );
};

const Stat = ({ icon, value, label, color }) => (
  <div className="bg-white p-6 rounded-xl shadow-lg text-center">
    <div className={`text-4xl mb-3 ${color}`}>{icon}</div>
    <div className="text-3xl font-bold">{value}</div>
    <div className="text-gray-600">{label}</div>
  </div>
);

export default About;
