export default function SpecialOffers() {
    return (
        <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-20 overflow-hidden">
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-green-500 to-green-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
                <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-green-500 to-green-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
            </div>
            
            <div className="relative max-w-4xl mx-auto px-4 text-center">
               
                <div className="mb-8">
                    <span className="inline-block px-4 py-2 bg-gradient-to-r from-red-500/20 to-orange-500/20 backdrop-blur-sm rounded-full border border-red-500/30 mb-4">
                        <span className="text-sm font-semibold text-white/90 uppercase tracking-wider">Exclusive Offer</span>
                    </span>
                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
                        Special <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-600">Offers</span>
                    </h2>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
                        Experience premium quality at exceptional prices. Limited time only!
                    </p>
                </div>
                
              
                <div className="relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 p-8 md:p-12 mb-12 shadow-2xl">
                    <div className="grid md:grid-cols-3 gap-8 items-center">
                      
                        <div className="relative">
                            <div className="w-48 h-48 mx-auto">
                                <svg className="w-full h-full" viewBox="0 0 100 100">
                                    <circle cx="50" cy="50" r="45" stroke="url(#gradient)" strokeWidth="8" fill="transparent" strokeLinecap="round" strokeDasharray="283" strokeDashoffset="70" transform="rotate(-90 50 50)" />
                                    <defs>
                                        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                            <stop offset="0%" stopColor="#00FF00" />
                                            <stop offset="100%" stopColor="#00FF00" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="text-center">
                                        <div className="text-5xl font-bold bg-gradient-to-r from-green-400 to-green-500 bg-clip-text text-transparent">30%</div>
                                        <div className="text-lg font-semibold text-white mt-2">OFF</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                      
                        <div className="md:col-span-2 text-left">
                            <div className="space-y-6">
                                <div>
                                    <h3 className="text-2xl font-bold text-white mb-2">Premium Dining Experience</h3>
                                    <p className="text-gray-300">
                                        Enjoy our signature dishes with exclusive discounts. Perfect for family dinners, date nights, or solo indulgence.
                                    </p>
                                </div>
                                
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-lg flex items-center justify-center">
                                        </div>
                                        <div>
                                            <div className="font-semibold text-white">Premium Quality</div>
                                            <div className="text-sm text-gray-400">5-star ingredients</div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-lg flex items-center justify-center">
                                        </div>
                                        <div>
                                            <div className="font-semibold text-white">Fast Delivery</div>
                                            <div className="text-sm text-gray-400">30-minutes or free</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="mt-8 pt-8 border-t border-gray-700/50">
                        <button className="group relative px-12 py-4 bg-gradient-to-r from-green-400 to-green-500 text-white font-semibold text-lg rounded-xl hover:from-green-700 hover:to-green-700 transition-all duration-300 shadow-lg hover:shadow-red-500/25">
                            <div className="flex items-center justify-center gap-3">
                                <span>Order Now & Save 30%</span>
                                <svg className="w-5 h-5 transform group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </div>
                            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-green-500 to-green-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </button>
                    </div>
                </div>
                
                
            </div>
        </section>
    );
}