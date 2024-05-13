'use client'

import React, { useState } from 'react';
import ChatRoom from "@/components/ChatRoom";
import Navbar from "@/components/Navbar";

const Home = () => {
  const [isCommunityOpen, setIsCommunityOpen] = useState(false);

  const handleCommunityToggle = () => {
    setIsCommunityOpen(!isCommunityOpen);
  };

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
      {isCommunityOpen && (
        <div style={{ marginTop: '20px' }}>
          <ChatRoom />
        </div>
      )}
      <div className="flex justify-center mt-4">
        <button onClick={handleCommunityToggle} className="px-10 py-3 bg-white text-black border border-black rounded focus:outline-none">
          {isCommunityOpen ? "Close Chat" : "Open Chat"}
        </button>
      </div>
    </>
  );
};

export default Home;
