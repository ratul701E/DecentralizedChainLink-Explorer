import Navbar from '@/components/Navbar';
import React from 'react';

function Blocks() {
  // Dummy data for demonstration
  const blocksData = [
    { blockNumber: 1, age: '5 minutes ago', transactions: 10, validator: '0x1234...' },
    { blockNumber: 2, age: '15 minutes ago', transactions: 8, validator: '0x5678...' },
    { blockNumber: 3, age: '30 minutes ago', transactions: 12, validator: '0x9abc...' },
    { blockNumber: 3, age: '30 minutes ago', transactions: 12, validator: '0x9abc...' },
    { blockNumber: 3, age: '30 minutes ago', transactions: 12, validator: '0x9abc...' },
    { blockNumber: 3, age: '30 minutes ago', transactions: 12, validator: '0x9abc...' },
    { blockNumber: 3, age: '30 minutes ago', transactions: 12, validator: '0x9abc...' },
    { blockNumber: 3, age: '30 minutes ago', transactions: 12, validator: '0x9abc...' },
    { blockNumber: 3, age: '30 minutes ago', transactions: 12, validator: '0x9abc...' },
    { blockNumber: 3, age: '30 minutes ago', transactions: 12, validator: '0x9abc...' },
    { blockNumber: 3, age: '30 minutes ago', transactions: 12, validator: '0x9abc...' },
    { blockNumber: 3, age: '30 minutes ago', transactions: 12, validator: '0x9abc...' },
    { blockNumber: 3, age: '30 minutes ago', transactions: 12, validator: '0x9abc...' },
    { blockNumber: 3, age: '30 minutes ago', transactions: 12, validator: '0x9abc...' },
    { blockNumber: 3, age: '30 minutes ago', transactions: 12, validator: '0x9abc...' },
    { blockNumber: 3, age: '30 minutes ago', transactions: 12, validator: '0x9abc...' },
    { blockNumber: 3, age: '30 minutes ago', transactions: 12, validator: '0x9abc...' },
    { blockNumber: 3, age: '30 minutes ago', transactions: 12, validator: '0x9abc...' },
    { blockNumber: 3, age: '30 minutes ago', transactions: 12, validator: '0x9abc...' },
    { blockNumber: 3, age: '30 minutes ago', transactions: 12, validator: '0x9abc...' },
    { blockNumber: 3, age: '30 minutes ago', transactions: 12, validator: '0x9abc...' },
    { blockNumber: 3, age: '30 minutes ago', transactions: 12, validator: '0x9abc...' },
    { blockNumber: 3, age: '30 minutes ago', transactions: 12, validator: '0x9abc...' },
    { blockNumber: 3, age: '30 minutes ago', transactions: 12, validator: '0x9abc...' },
    { blockNumber: 3, age: '30 minutes ago', transactions: 12, validator: '0x9abc...' },
    { blockNumber: 3, age: '30 minutes ago', transactions: 12, validator: '0x9abc...' },
  ];


  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 mt-8">
        <h2 className="font-semibold mb-8 mt-4">Blocks</h2>
        <h2 className="mb-10 font-semibold">Last Safe Block</h2>
        <h2 className="text-sm mb-12">
            Total of 19,869,905 blocks <br />
            (Showing blocks between #19869880 to #19869904)
        </h2>
        <div className="w-full">
          <table className="w-full divide-y divide-gray-200" style={{ margin: '20px' }}>
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">Block</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">Age</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">Txn</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">Validator</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {blocksData.map((block, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{block.blockNumber}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{block.age}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{block.transactions}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{block.validator}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Blocks;
