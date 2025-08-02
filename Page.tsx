<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Amazon-Style UI with Dinosaur Loader</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    animation: {
                        'dino-run': 'dinoRun 1.5s linear infinite',
                        'dino-leg': 'dinoLeg 0.5s infinite alternate',
                        'dino-head': 'dinoHead 0.8s infinite alternate',
                        'dino-tail': 'dinoTail 0.6s infinite alternate',
                        'pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                        'float': 'float 3s ease-in-out infinite',
                    },
                    keyframes: {
                        dinoRun: {
                            '0%': { transform: 'translateX(-100%)' },
                            '100%': { transform: 'translateX(100vw)' }
                        },
                        dinoLeg: {
                            '0%': { transform: 'rotate(0deg)' },
                            '100%': { transform: 'rotate(-25deg)' }
                        },
                        dinoHead: {
                            '0%': { transform: 'rotate(0deg)' },
                            '100%': { transform: 'rotate(5deg)' }
                        },
                        dinoTail: {
                            '0%': { transform: 'rotate(0deg)' },
                            '100%': { transform: 'rotate(-10deg)' }
                        },
                        float: {
                            '0%, 100%': { transform: 'translateY(0)' },
                            '50%': { transform: 'translateY(-10px)' }
                        },
                        pulse: {
                            '0%, 100%': { opacity: '1' },
                            '50%': { opacity: '0.85' }
                        }
                    }
                }
            }
        }
    </script>
    <style>
        .dino-loader {
            position: relative;
            height: 120px;
            overflow: hidden;
            background: linear-gradient(to bottom, #c5e1f9, #eaf5ff);
        }
        
        .ground {
            position: absolute;
            bottom: 0;
            width: 100%;
            height: 25px;
            background: linear-gradient(to bottom, #8c6d46, #5e4528);
        }
        
        .cactus {
            position: absolute;
            bottom: 25px;
            width: 15px;
            height: 40px;
            background: #4a7c59;
            border-radius: 5px;
        }
        
        .cactus::before {
            content: '';
            position: absolute;
            top: -8px;
            left: -5px;
            width: 25px;
            height: 15px;
            background: #4a7c59;
            border-radius: 50%;
        }
        
        .cactus::after {
            content: '';
            position: absolute;
            top: 10px;
            right: -10px;
            width: 15px;
            height: 25px;
            background: #4a7c59;
            border-radius: 5px;
        }
        
        .dino {
            position: absolute;
            bottom: 25px;
            left: 0;
            z-index: 10;
            animation: dino-run 5s linear infinite;
        }
        
        .dino-body {
            position: relative;
            width: 70px;
            height: 40px;
            background: #4CAF50;
            border-radius: 15px 15px 5px 5px;
        }
        
        .dino-head {
            position: absolute;
            top: -15px;
            right: -15px;
            width: 35px;
            height: 35px;
            background: #4CAF50;
            border-radius: 50%;
            transform-origin: bottom left;
            animation: dino-head 0.8s infinite alternate;
        }
        
        .dino-eye {
            position: absolute;
            top: 8px;
            right: 8px;
            width: 8px;
            height: 8px;
            background: white;
            border-radius: 50%;
        }
        
        .dino-eye::after {
            content: '';
            position: absolute;
            top: 2px;
            left: 2px;
            width: 4px;
            height: 4px;
            background: #333;
            border-radius: 50%;
        }
        
        .dino-mouth {
            position: absolute;
            top: 18px;
            right: 5px;
            width: 15px;
            height: 8px;
            border-bottom: 3px solid #333;
            border-radius: 0 0 10px 10px;
        }
        
        .dino-tail {
            position: absolute;
            top: 10px;
            left: -20px;
            width: 30px;
            height: 10px;
            background: #4CAF50;
            border-radius: 10px 0 0 10px;
            transform-origin: right center;
            animation: dino-tail 0.6s infinite alternate;
        }
        
        .dino-leg {
            position: absolute;
            bottom: -15px;
            width: 12px;
            height: 20px;
            background: #388E3C;
            border-radius: 5px 5px 0 0;
            transform-origin: top center;
        }
        
        .leg-front {
            right: 20px;
            animation: dino-leg 0.5s infinite alternate;
        }
        
        .leg-back {
            right: 40px;
            animation: dino-leg 0.5s infinite alternate-reverse;
        }
        
        .dino-foot {
            position: absolute;
            bottom: -5px;
            left: -2px;
            width: 16px;
            height: 5px;
            background: #1B5E20;
            border-radius: 3px;
        }
        
        .cloud {
            position: absolute;
            background: white;
            border-radius: 50%;
            opacity: 0.8;
        }
        
        .cloud-1 {
            top: 20px;
            left: 10%;
            width: 40px;
            height: 20px;
        }
        
        .cloud-2 {
            top: 35px;
            left: 30%;
            width: 60px;
            height: 25px;
        }
        
        .cloud-3 {
            top: 15px;
            right: 20%;
            width: 50px;
            height: 22px;
        }
        
        .loading-text {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            font-size: 1.2rem;
            font-weight: bold;
            color: #2E7D32;
            text-shadow: 0 0 5px rgba(255,255,255,0.7);
            animation: pulse 2s infinite;
        }
        
        .dino-shadow {
            position: absolute;
            bottom: 20px;
            left: 50%;
            width: 50px;
            height: 10px;
            background: rgba(0,0,0,0.2);
            border-radius: 50%;
            filter: blur(3px);
            animation: dino-run 5s linear infinite;
        }
        
        .pulse {
            animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
    </style>
</head>
<body class="bg-gray-100">
    <div class="max-w-6xl mx-auto p-4">
        <div class="bg-white rounded-lg shadow-md overflow-hidden">
            <!-- Header -->
            <div class="bg-gradient-to-r from-yellow-400 to-yellow-500 p-4">
                <div class="flex items-center">
                    <div class="w-10 h-10 bg-white rounded-full flex items-center justify-center mr-3">
                        <span class="text-yellow-500 font-bold text-xl">A</span>
                    </div>
                    <h1 class="text-2xl font-bold text-gray-900">Amazon-Style Store</h1>
                </div>
            </div>
            
            <!-- Search Bar -->
            <div class="p-4 bg-gray-50">
                <div class="search-container relative flex items-center max-w-2xl mx-auto">
                    <input type="text" placeholder="Search for products..." class="search-input border border-gray-300 rounded-l-lg py-2 px-4 w-full focus:ring-2 focus:ring-yellow-500 focus:border-transparent">
                    <button class="amazon-button bg-gradient-to-b from-yellow-200 to-yellow-400 hover:from-yellow-300 hover:to-yellow-500 text-black font-bold py-2 px-6 rounded-r-lg border border-yellow-600 transition-all duration-200">Search</button>
                </div>
            </div>
            
            <!-- Loading Area -->
            <div class="p-6">
                <h2 class="amazon-title text-xl mb-4">Featured Products</h2>
                
                <!-- Dinosaur Loader -->
                <div class="dino-loader rounded-lg border border-gray-200 mb-8">
                    <div class="cloud cloud-1"></div>
                    <div class="cloud cloud-2"></div>
                    <div class="cloud cloud-3"></div>
                    
                    <div class="dino">
                        <div class="dino-tail"></div>
                        <div class="dino-body">
                            <div class="dino-head">
                                <div class="dino-eye"></div>
                                <div class="dino-mouth"></div>
                            </div>
                            <div class="dino-leg leg-front">
                                <div class="dino-foot"></div>
                            </div>
                            <div class="dino-leg leg-back">
                                <div class="dino-foot"></div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="dino-shadow"></div>
                    
                    <div class="cactus" style="left: 25%;"></div>
                    <div class="cactus" style="left: 55%;"></div>
                    <div class="cactus" style="left: 80%;"></div>
                    
                    <div class="ground"></div>
                    
                    <div class="loading-text">Loading Products...</div>
                </div>
                
                <!-- Product Grid -->
                <div class="product-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    <!-- Product Cards -->
                    <div class="amazon-card bg-white rounded-lg overflow-hidden border border-gray-200 transition-all duration-300 transform hover:-translate-y-1">
                        <div class="animate-shimmer bg-gray-200 h-48 w-full"></div>
                        <div class="p-4">
                            <div class="animate-shimmer bg-gray-200 h-5 w-3/4 mb-2"></div>
                            <div class="animate-shimmer bg-gray-200 h-4 w-1/2 mb-3"></div>
                            <div class="animate-shimmer bg-gray-200 h-6 w-1/4 mb-4"></div>
                            <div class="animate-shimmer bg-gray-200 h-10 w-full rounded"></div>
                        </div>
                    </div>
                    
                    <div class="amazon-card bg-white rounded-lg overflow-hidden border border-gray-200 transition-all duration-300 transform hover:-translate-y-1">
                        <div class="animate-shimmer bg-gray-200 h-48 w-full"></div>
                        <div class="p-4">
                            <div class="animate-shimmer bg-gray-200 h-5 w-3/4 mb-2"></div>
                            <div class="animate-shimmer bg-gray-200 h-4 w-1/2 mb-3"></div>
                            <div class="animate-shimmer bg-gray-200 h-6 w-1/4 mb-4"></div>
                            <div class="animate-shimmer bg-gray-200 h-10 w-full rounded"></div>
                        </div>
                    </div>
                    
                    <div class="amazon-card bg-white rounded-lg overflow-hidden border border-gray-200 transition-all duration-300 transform hover:-translate-y-1">
                        <div class="animate-shimmer bg-gray-200 h-48 w-full"></div>
                        <div class="p-4">
                            <div class="animate-shimmer bg-gray-200 h-5 w-3/4 mb-2"></div>
                            <div class="animate-shimmer bg-gray-200 h-4 w-1/2 mb-3"></div>
                            <div class="animate-shimmer bg-gray-200 h-6 w-1/4 mb-4"></div>
                            <div class="animate-shimmer bg-gray-200 h-10 w-full rounded"></div>
                        </div>
                    </div>
                    
                    <div class="amazon-card bg-white rounded-lg overflow-hidden border border-gray-200 transition-all duration-300 transform hover:-translate-y-1">
                        <div class="animate-shimmer bg-gray-200 h-48 w-full"></div>
                        <div class="p-4">
                            <div class="animate-shimmer bg-gray-200 h-5 w-3/4 mb-2"></div>
                            <div class="animate-shimmer bg-gray-200 h-4 w-1/2 mb-3"></div>
                            <div class="animate-shimmer bg-gray-200 h-6 w-1/4 mb-4"></div>
                            <div class="animate-shimmer bg-gray-200 h-10 w-full rounded"></div>
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- Footer -->
            <div class="bg-gray-800 text-gray-300 p-6 mt-8">
                <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div>
                        <h3 class="font-bold text-white mb-3">Get to Know Us</h3>
                        <ul class="space-y-2">
                            <li><a href="#" class="hover:text-white">About Us</a></li>
                            <li><a href="#" class="hover:text-white">Careers</a></li>
                            <li><a href="#" class="hover:text-white">Press Releases</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 class="font-bold text-white mb-3">Make Money with Us</h3>
                        <ul class="space-y-2">
                            <li><a href="#" class="hover:text-white">Sell on Amazon</a></li>
                            <li><a href="#" class="hover:text-white">Sell Under Amazon Accelerator</a></li>
                            <li><a href="#" class="hover:text-white">Become an Affiliate</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 class="font-bold text-white mb-3">Amazon Payment Products</h3>
                        <ul class="space-y-2">
                            <li><a href="#" class="hover:text-white">Amazon Business Card</a></li>
                            <li><a href="#" class="hover:text-white">Shop with Points</a></li>
                            <li><a href="#" class="hover:text-white">Reload Your Balance</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 class="font-bold text-white mb-3">Let Us Help You</h3>
                        <ul class="space-y-2">
                            <li><a href="#" class="hover:text-white">Amazon and COVID-19</a></li>
                            <li><a href="#" class="hover:text-white">Your Account</a></li>
                            <li><a href="#" class="hover:text-white">Shipping Rates & Policies</a></li>
                        </ul>
                    </div>
                </div>
                <div class="mt-8 pt-6 border-t border-gray-700 text-center">
                    <p>© 2023 Amazon-Style Store Demo. This is a demonstration only.</p>
                </div>
            </div>
        </div>
    </div>
</body>
</html>
