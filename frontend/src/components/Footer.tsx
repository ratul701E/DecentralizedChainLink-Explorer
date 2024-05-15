import React from 'react';
import Link from 'next/link';

function Footer() {
  return (
    <footer className="bg-gray-800 py-4 px-6  flex justify-between items-center text-white">
      <div className="flex flex-col">
        <h1 className="text-xl font-bold">DCLscan</h1>
        <p className="text-sm">DCLscan is a robust and user-friendly blockchain simulation platform that replicates key features of a real-world blockchain network. This includes decentralized transaction processing, smart contracts, gas fees, and wallet management.</p>
      </div>
      <div className="flex space-x-4">
        <Link href="/about">
          <p className="text-sm hover:text-gray-400">About</p>
        </Link>
        <Link href="/contact">
          <p className="text-sm hover:text-gray-400">Contact</p>
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
