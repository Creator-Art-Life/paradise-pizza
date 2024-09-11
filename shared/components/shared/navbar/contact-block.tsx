import React from "react";
import Image from "next/image"; // Assuming you're using Next.js for images
import Link from "next/link";
import { MdPhoneIphone } from "react-icons/md";


export const ContactBlock = () => {
  return (
    <div className="flex flex-col items-start text-white space-y-4 mt-8">
      {/* About Section */}
      <div className="w-full">
        <div className="w-full border-b border-gray-700 my-2"></div>
      </div>

      {/* Phone Number */}
      <div className="text-white text-left mb-4 w-full">
        <div className="flex items-center text-xl font-semibold">
          <MdPhoneIphone />
          <span className="text-white">8 800 302-00-60</span>
        </div>
        <p className="text-gray-400 text-sm">The call is free</p>
      </div>

      {/* App Store Button */}
      <Link href="https://www.apple.com/app-store/">
        <div className="flex items-center bg-gray-900 text-white py-3 pr-6 pl-4 rounded-lg space-x-3">
          <Image
            src="/assets/app-store-badge.png" // Make sure this path is correct
            alt=""
            width={40}
            height={40}
          />
          <span className="font-semibold">Download on the App Store</span>
        </div>
      </Link>
    </div>
  );
};
