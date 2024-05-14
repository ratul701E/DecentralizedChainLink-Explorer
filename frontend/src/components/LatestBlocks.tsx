import Link from 'next/link';
import React, { useState, useEffect } from 'react';

function LatestBlocks() {
  const latestBlocks = [
    { blockHash: "0x123...", blockValidator: "0x0000...", timestamp: '2024-05-14 10:30:00', transactions: 15 },
    { blockHash: "0x456...", blockValidator: "0x0000...", timestamp: '2024-05-14 09:45:00', transactions: 20 },
    { blockHash: "0x789...", blockValidator: "0x0000...", timestamp: '2024-05-14 08:55:00', transactions: 12 },
    { blockHash: "0x123...", blockValidator: "0x0000...", timestamp: '2024-05-14 10:30:00', transactions: 15 },
    { blockHash: "0x456...", blockValidator: "0x0000...", timestamp: '2024-05-14 09:45:00', transactions: 20 },
    { blockHash: "0x789...", blockValidator: "0x0000...", timestamp: '2024-05-14 08:55:00', transactions: 12 },
    { blockHash: "0x123...", blockValidator: "0x0000...", timestamp: '2024-05-14 10:30:00', transactions: 15 },
    { blockHash: "0x456...", blockValidator: "0x0000...", timestamp: '2024-05-14 09:45:00', transactions: 20 },
    { blockHash: "0x789...", blockValidator: "0x0000...", timestamp: '2024-05-14 08:55:00', transactions: 12 },
  ];

  const calculateElapsedTime = (timestamp: string | number | Date) => {
    const blockTime = new Date(timestamp).getTime();
    const currentTime = Date.now();
    const elapsedTime = currentTime - blockTime;
    const seconds = Math.floor(elapsedTime / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    if (days > 0) {
      return `${days} days ago`;
    } else if (hours > 0) {
      return `${hours} hours ago`;
    } else if (minutes > 0) {
      return `${minutes} minutes ago`;
    } else {
      return `${seconds} seconds ago`;
    }
  };

  return (
    <div className="overflow-x-auto">
      <table className="w-full md:w-3/4 lg:w-2/3 xl:w-1/2 divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th colSpan="3" className="px-6 py-3 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">
              Latest Blocks
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {latestBlocks.map((block, index) => (
            <tr key={index}>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">{block.blockHash}</div>
                <div className="text-xs text-gray-500">{calculateElapsedTime(block.timestamp)}</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">Block Validated By {block.blockValidator}</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">{block.transactions} DCL</div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-center mt-4 py-4">
        <Link href="/blocks">
            <span className="text-gray-600 text-sm font-semibold">VIEW ALL BLOCKS &nbsp;&nbsp; →</span>
        </Link>
      </div>
    </div>
  );
}

export default LatestBlocks;
