'use client'

import React, { useState } from 'react';
import Navbar from "@/components/Navbar";
import LatestBlocks from '@/components/LatestBlocks';
import LatestTransactions from '@/components/LatestTransactions';

const Home = () => {
  return (
    <>
      <Navbar />
        <div className="relative">
          <img src={'/home-panel.jpg'} alt="Panel" className="w-full h-auto opacity-50 mb-8" />
          <div className="absolute top-0 right-0 mt-8 mr-8">
            <div className="bg-transparent px-4 py-2 rounded-lg border border-black w-96">
              <input
                type="text"
                placeholder="Search by Address / Txn Hash / Block"
                className="w-full h-full px-2 bg-transparent placeholder-gray-500 focus:outline-none"
                style={{ fontFamily: 'Open Sans, sans-serif' }}
              />
            </div>
          </div>
        </div>
        <br /><br /><br />
        <div className="container mx-auto px-4 flex justify-center items-center h-screen">
          <div className="p-4 w-full"> 
            <div className="flex justify-between">
              <div className="w-5/12 pr-4"> 
                <LatestBlocks />
              </div>
              <div className="w-5/12 pl-4"> 
                <LatestTransactions />
              </div>
            </div>
          </div>
        </div>
        <br /><br /><br />
    </>
  );
};

export default Home;
