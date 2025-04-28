'use client'
import ImageToolkits from "@/components/imagetoolkit";
import { X } from "lucide-react";
import { useState } from "react";
const Ads = () => {
  const [isVisible, setIsVisible] = useState(true);
  if (!isVisible) return null;
    return ( 
      <div className="mt-8 p-4 bg-blue-50 rounded-lg border border-blue-100 relative">
      <button
        onClick={() => setIsVisible(false)}
        className="absolute top-2 right-2 text-blue-400 hover:text-blue-600"
        aria-label="Close ad"
      >
        <X className="h-5 w-5" />
      </button>
      <div className="flex items-center">
        <div className="flex-shrink-0">
          <ImageToolkits
            src="/featured4.jpeg"
            alt="Special Offer"
            width={40}
            height={40}
            className="h-10 w-10 rounded-full"
          />
        </div>
        <div className="ml-3">
          <p className="text-sm font-medium text-blue-800">Limited Time Offer</p>
          <p className="text-xs text-blue-600">
            Get 10% off on accessories with code <span className="font-bold">SAVE10</span>
          </p>
        </div>
      </div>
    </div>
);
}
export default Ads
