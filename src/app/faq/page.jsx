"use client";

import React, { useState } from "react";
import {
  FaSearch,
  FaQuestionCircle,
  FaAppleAlt,
  FaUtensils,
  FaShoppingCart,
  FaCreditCard,
  FaLock,
  FaClock,
  FaPepperHot,
  FaUser,
  FaShieldAlt,
} from "react-icons/fa";
import { MdSupportAgent } from "react-icons/md";

const FAQ = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  const [openItems, setOpenItems] = useState({});

  const toggleItem = (id) => {
    setOpenItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const categories = [
    { id: "all", name: "All Questions", icon: <FaQuestionCircle />, count: 25 },
    { id: "orders", name: "Orders & Delivery", icon: <FaShoppingCart />, count: 8 },
    { id: "account", name: "Account & Profile", icon: <FaUser />, count: 5 },
    { id: "payments", name: "Payments & Pricing", icon: <FaCreditCard />, count: 6 },
    { id: "security", name: "Security & Privacy", icon: <FaLock />, count: 3 },
    { id: "technical", name: "Technical Support", icon: <MdSupportAgent />, count: 3 },
  ];

  const allFaqs = [
    {
      id: 1,
      category: "orders",
      question: "How do I place an order?",
      answer:
        "Browse our menu, select the items you like, add them to your cart, and proceed to checkout. Choose delivery or pickup, confirm payment, and your order will be processed.",
    },
    {
      id: 2,
      category: "orders",
      question: "Can I customize my meal?",
      answer:
        "Yes! Most dishes allow customization. You can select extra toppings, remove ingredients, or request special instructions at checkout.",
    },
    {
      id: 3,
      category: "orders",
      question: "How long does delivery take?",
      answer:
        "Delivery times vary depending on location and restaurant availability. Typically, it takes 30-60 minutes. You can track your order in real-time.",
    },
    {
      id: 4,
      category: "payments",
      question: "What payment methods are accepted?",
      answer:
        "We accept credit/debit cards, digital wallets, and cash on delivery in selected areas. All transactions are encrypted and secure.",
    },
    {
      id: 5,
      category: "payments",
      question: "Are there any hidden fees?",
      answer:
        "No. All prices, taxes, and delivery fees are clearly displayed before you confirm your order.",
    },
    {
      id: 6,
      category: "account",
      question: "How do I create an account?",
      answer:
        "Click 'Sign Up', provide your email, create a password, and verify your email address. You can also sign up using Google or Apple accounts.",
    },
    {
      id: 7,
      category: "account",
      question: "Can I update my profile information?",
      answer:
        "Yes. Go to 'My Profile' in your dashboard to update your name, email, phone number, and preferences.",
    },
    {
      id: 8,
      category: "security",
      question: "Is my payment information secure?",
      answer:
        "Absolutely. We use SSL encryption and partner with trusted payment gateways. Your card details are never stored on our servers.",
    },
    {
      id: 9,
      category: "technical",
      question: "What if I face issues placing an order?",
      answer:
        "Try refreshing the page, using a different browser, or checking your internet connection. If the issue persists, contact our support team.",
    },
    {
      id: 10,
      category: "orders",
      question: "Can I order multiple meals at once?",
      answer:
        "Yes, you can add multiple items to your cart and place a single order for all of them.",
    },
    {
      id: 11,
      category: "payments",
      question: "Do you provide invoices?",
      answer:
        "Yes. After each order, you can download a detailed invoice from your order history.",
    },
    {
      id: 12,
      category: "account",
      question: "How do I reset my password?",
      answer:
        "Click 'Forgot Password' on the login page, enter your registered email, and follow the instructions sent to your email to reset your password.",
    },
  ];

  const filteredFaqs = allFaqs.filter((faq) => {
    const matchesSearch =
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === "all" || faq.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gray-50">
     
      <div className="bg-gradient-to-r from-green-900 via-green-700 to-green-800 text-white py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl lg:text-6xl font-bold mb-6">Food FAQs</h1>
          <p className="text-xl text-green-100 max-w-3xl mx-auto mb-10">
            Find quick answers about orders, payments, accounts, and food options
          </p>
        </div>
      </div>

      
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
       
          <div className="lg:w-1/4">
            <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-6">
              <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <FaQuestionCircle className="text-green-600" />
                Categories
              </h2>
              <div className="space-y-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`w-full flex items-center justify-between p-4 rounded-xl transition-all ${
                      activeCategory === category.id
                        ? "bg-green-50 border-2 border-green-200"
                        : "hover:bg-gray-50"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`p-2 rounded-lg ${
                          activeCategory === category.id
                            ? "bg-green-100 text-green-600"
                            : "bg-gray-100 text-gray-600"
                        }`}
                      >
                        {category.icon}
                      </div>
                      <span
                        className={`font-medium ${
                          activeCategory === category.id ? "text-green-700" : "text-gray-700"
                        }`}
                      >
                        {category.name}
                      </span>
                    </div>
                    <span
                      className={`px-2 py-1 rounded-full text-sm ${
                        activeCategory === category.id
                          ? "bg-green-600 text-white"
                          : "bg-gray-200 text-gray-600"
                      }`}
                    >
                      {category.count}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:w-3/4">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                {activeCategory === "all"
                  ? "All Questions"
                  : categories.find((c) => c.id === activeCategory)?.name}
              </h2>
              <p className="text-gray-600">{filteredFaqs.length} questions found</p>
            </div>

            {filteredFaqs.length === 0 ? (
              <div className="bg-white rounded-2xl shadow-lg p-12 text-center">
                <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <FaSearch className="text-gray-400 text-3xl" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">No questions found</h3>
                <p className="text-gray-600 mb-6">Try different search terms or browse by category</p>
                <button
                  onClick={() => {
                    setSearchTerm("");
                    setActiveCategory("all");
                  }}
                  className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
                >
                  View All Questions
                </button>
              </div>
            ) : (
              <div className="space-y-4">
                {filteredFaqs.map((faq) => (
                  <div key={faq.id} className="bg-white rounded-2xl shadow-lg overflow-hidden">
                    <button
                      onClick={() => toggleItem(faq.id)}
                      className="w-full p-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                    >
                      <div className="flex items-start gap-4">
                        <div className="p-2 bg-green-100 rounded-lg flex-shrink-0">
                          <div className="text-green-600">
                            {categories.find((c) => c.id === faq.category)?.icon}
                          </div>
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900 mb-1">
                            {faq.question}
                          </h3>
                          <span className="inline-block px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">
                            {categories.find((c) => c.id === faq.category)?.name}
                          </span>
                        </div>
                      </div>
                      <div className={`text-2xl transition-transform ${openItems[faq.id] ? "rotate-180" : ""}`}>
                        ▼
                      </div>
                    </button>
                    {openItems[faq.id] && (
                      <div className="px-6 pb-6 pt-2 border-t border-gray-100">
                        <div className="pl-14">
                          <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                          {faq.category === "payments" && (
                            <div className="mt-4 p-4 bg-green-50 rounded-lg border border-green-200">
                              <div className="flex items-center gap-2 mb-2">
                                <FaClock className="text-green-600" />
                                <span className="font-semibold text-green-800">Payment Timeline</span>
                              </div>
                              <div className="text-sm text-green-700">
                                Order placed → Processing → Delivered → Receipt generated
                              </div>
                            </div>
                          )}
                          {faq.category === "orders" && (
                            <div className="mt-4 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                              <div className="flex items-center gap-2 mb-2">
                                <FaPepperHot className="text-yellow-600" />
                                <span className="font-semibold text-yellow-800">Preparation Info</span>
                              </div>
                              <div className="text-sm text-yellow-700">
                                Ingredients prepared → Cooked → Packed → Delivered
                              </div>
                            </div>
                          )}
                          {faq.category === "security" && (
                            <div className="mt-4 p-4 bg-purple-50 rounded-lg border border-purple-200">
                              <div className="flex items-center gap-2 mb-2">
                                <FaShieldAlt className="text-purple-600" />
                                <span className="font-semibold text-purple-800">Security Features</span>
                              </div>
                              <div className="text-sm text-purple-700">
                                SSL Encryption • Account Protection • Data Privacy • Secure Payments
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
