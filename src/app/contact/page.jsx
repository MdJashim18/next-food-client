'use client'

import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaPaperPlane } from 'react-icons/fa';
import { MdSupportAgent } from 'react-icons/md';

const Contact = () => {

    const contactInfo = [
        { icon: <FaPhone />, title: 'Phone', info: '+8801992578305', desc: 'Mon-Fri, 9am-6pm' },
        { icon: <FaEnvelope />, title: 'Email', info: 'mdjashimuddinjnn22990@gmail.com', desc: '24/7 Support' },
        { icon: <FaMapMarkerAlt />, title: 'Address', info: 'Dhaka, Bangladesh', desc: 'Visit our main kitchen' },
    ];

    const faqCategories = [
        {
            title: 'Ordering',
            questions: [
                { q: 'How do I place an order?', a: 'Browse our menu, add items to your cart, and checkout securely.' },
                { q: 'Can I schedule delivery?', a: 'Yes, choose a date and time at checkout.' },
            ]
        },
        {
            title: 'Payments & Offers',
            questions: [
                { q: 'Which payment methods are accepted?', a: 'We accept Cash on Delivery, Bkash, Nagad, and online card payments.' },
                { q: 'Do you have discounts?', a: 'Yes! Subscribe to our newsletter to get special offers.' },
            ]
        },
        {
            title: 'Delivery & Support',
            questions: [
                { q: 'How fast is the delivery?', a: 'Average delivery time is 30-45 minutes depending on your location.' },
                { q: 'Can I track my order?', a: 'Yes, tracking is available via your account dashboard or order link.' },
            ]
        }
    ];

    return (
        <div className="min-h-screen">
          
       
            <section className="bg-gradient-to-r from-green-900 via-green-700 to-green-800 text-white py-20 px-4">
                <div className="max-w-7xl mx-auto text-center">
                    <h1 className="text-5xl lg:text-6xl font-bold mb-6">Contact FoodLovers</h1>
                    <p className="text-xl text-green-100 max-w-3xl mx-auto">
                        We are here to serve you delicious meals. Reach out with questions, feedback, or support needs
                    </p>
                </div>
            </section>

         
            <section className="py-16 px-4">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Get in Touch</h2>
                    <div className='flex flex-col md:flex-row justify-center items-start w-full md:w-[80%] mx-auto gap-10 p-5 border border-gray-100 shadow-md rounded-3xl'>
                        
                        <div className="space-y-6 flex-1">
                            {contactInfo.map((item, index) => (
                                <div key={index} className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                                        <div className="text-green-600 text-xl">
                                            {item.icon}
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg text-gray-900">{item.title}</h3>
                                        <p className="text-gray-700 font-medium">{item.info}</p>
                                        <p className="text-gray-500 text-sm">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-6 flex-1">
                            <div className="flex items-center gap-3 mb-4">
                                <MdSupportAgent className="text-green-600 text-2xl" />
                                <h3 className="font-bold text-lg">Support Response Time</h3>
                            </div>
                            <ul className="space-y-2">
                                <li className="flex justify-between">
                                    <span className="text-gray-600">Email Support</span>
                                    <span className="font-semibold">Within 24 hours</span>
                                </li>
                                <li className="flex justify-between">
                                    <span className="text-gray-600">Live Chat</span>
                                    <span className="font-semibold">5-10 minutes</span>
                                </li>
                                <li className="flex justify-between">
                                    <span className="text-gray-600">Urgent Orders</span>
                                    <span className="font-semibold">Priority Support</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

          
            <section className="py-16 px-4 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
                        <p className="text-gray-600 text-lg">Quick answers to common questions about our food service</p>
                    </div>
                    
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {faqCategories.map((category, catIndex) => (
                            <div key={catIndex} className="bg-white rounded-2xl shadow-lg p-6">
                                <h3 className="text-xl font-bold mb-6 text-gray-900">{category.title}</h3>
                                <div className="space-y-4">
                                    {category.questions.map((item, itemIndex) => (
                                        <div key={itemIndex} className="border-b border-gray-100 pb-4 last:border-0">
                                            <h4 className="font-semibold text-gray-800 mb-2">{item.q}</h4>
                                            <p className="text-gray-600 text-sm">{item.a}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Contact;
