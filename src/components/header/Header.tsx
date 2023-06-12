'use client';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-gray-800">
      <div className="container flex items-center justify-between px-4 py-6 mx-auto">
        <div>
          <Image
            src="/vercel.svg"
            alt="Logo"
            className="dark:invert"
            width={100}
            height={24}
          />
        </div>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link href="/" className="text-white hover:text-gray-300">
                Home
              </Link>
            </li>
            <li>
              <Link href="#" className="text-white hover:text-gray-300">
                About
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
