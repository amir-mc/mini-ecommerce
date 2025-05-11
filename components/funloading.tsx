// 'use client';

// import { ShoppingCart } from 'lucide-react';
// import { useEffect, useState } from 'react';


// const messages = [
//   "Loading your awesome products 🛒...",
//   "Spinning up some spicy discounts 🌶️",
//   "Fetching unicorns from the database 🦄",
//   "Organizing virtual shelves 🧹",
//   "Bribing the API hamsters 🐹",
// ];

// export default function zxzxzxzx() {
//   const [messageIndex, setMessageIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setMessageIndex((prev) => (prev + 1) % messages.length);
//     }, 2000);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="flex items-center justify-center h-screen bg-gradient-to-br from-yellow-100 via-pink-200 to-purple-100">
//       <div className="flex flex-col items-center gap-6 bg-white/70 backdrop-blur-xl px-10 py-8 rounded-3xl shadow-xl animate-fade-in">
//         <div className="relative">
//           <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-pink-300 via-yellow-300 to-purple-400 blur-2xl opacity-40 animate-ping"></div>
//           <div className="animate-bounce">
//             <ShoppingCart className="w-16 h-16 text-purple-700 drop-shadow-xl" />
//           </div>
//         </div>


//         <div className="text-center">
//           <p className="text-lg font-semibold text-purple-800 transition-all duration-500">
//             {messages[messageIndex]}
//           </p>
//           <p className="text-sm text-gray-600 mt-2">Almost there... hang tight! 🧃</p>
//         </div>
//       </div>
//     </div>
//   );
// }
