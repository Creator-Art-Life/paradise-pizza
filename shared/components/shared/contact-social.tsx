'use client';

import Link from "next/link";

export const ContactSocial = () => {
  return (
    <div className="bg-gray-100 p-6 rounded-lg max-w-md mx-auto mt-4">
      <p className="text-gray-600 font-medium">Telegram:</p>
      <Link 
        href="https://t.me/maxim_paradise" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="text-gray-900 font-bold underline mb-4 block"
      >
        maxim_paradise
      </Link>

      <p className="text-gray-600 font-medium">Questions, feedback and suggestions:</p>
      <Link 
        href="mailto:rajskijmaksim83@gmail.com" 
        className="text-gray-900 font-bold underline block"
      >
        rajskijmaksim83@gmail.com
      </Link>
    </div>
  );
};
