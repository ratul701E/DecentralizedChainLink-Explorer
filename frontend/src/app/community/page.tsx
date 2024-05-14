'use client'

import React, { useState } from 'react';
import ChatRoom from '@/components/ChatRoom';
import Navbar from '@/components/Navbar';

function Community() {
  const [showChat, setShowChat] = useState(false);

  const toggleChatVisibility = () => {
    setShowChat(!showChat);
  };

  return (
    <>
      <Navbar />
      <div className="flex justify-center mt-8">
        <button
          onClick={toggleChatVisibility}
          className="border border-black bg-white py-2 px-40 rounded"
        >
          {showChat ? 'Hide Chat' : 'Load Chat'}
        </button>
      </div>
      {showChat && <ChatRoom />}
    </>
  );
}

export default Community;