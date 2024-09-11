'use client';

import { useState } from 'react';
import { IoSearch } from "react-icons/io5";

export const SearchRes = () => {
  const [inputValue, setInputValue] = useState('');

  return (
    <div className="flex items-center border border-gray-300 rounded-md px-4 py-2 max-w-md mb-4 ml-4 mr-4  mx-auto">
      <IoSearch />
      <input 
        type="text" 
        placeholder="District, street..." 
        value={inputValue} 
        onChange={(e) => setInputValue(e.target.value)} 
        className="ml-2 w-full border-none focus:outline-none placeholder-gray-400 text-gray-700"
      />
    </div>
  );
};
