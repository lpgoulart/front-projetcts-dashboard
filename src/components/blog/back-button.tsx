'use client'

import Link from "next/link";
import { IoArrowBackSharp } from "react-icons/io5";

export default function BackButton() {
  return (
    <div className='mb-4 cursor-pointer text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'>
      <Link href='/blog' className='flex items-center gap-2'>
        <IoArrowBackSharp />
        <span>Back to Blog</span>
      </Link>
    </div>
  );
}