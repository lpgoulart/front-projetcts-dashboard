'use client'

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function BlogHeader() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const router = useRouter();

  const handleGoBack = () => {
    router.back();
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="p-4 bg-purple-900 flex justify-between items-center relative">
      <h1 className="text-white">Blog Header</h1>
      <div className="relative">
        <button
          className="bg-purple-700 text-white px-4 py-2 rounded-full cursor-pointer"
          onClick={toggleDropdown}
          aria-expanded={isOpen}
          aria-haspopup="true"
        >
          L
        </button>

        {isOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
            <button
              onClick={handleGoBack}
              className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
            >
              Go Back
            </button>
          </div>
        )}
      </div>
    </header>
  );
}