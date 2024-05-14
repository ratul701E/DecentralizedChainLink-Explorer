import Navbar from '@/components/Navbar';
import React from 'react';

function Transaction() {
  const transactionData = {
    transactionHash: '0x1234567890abcdef',
    method: 1,
    block: 10001,
    age: '5 minutes ago',
    from: '0x1234...',
    to: '0x5678...',
    value: '10'
  };

  return (
    <>
      <Navbar />
      <div className="bg-white shadow overflow-hidden sm:rounded-lg" style={{ margin: 40 }}>
        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900">Transaction Details</h3>
          <p className="mt-1 max-w-2xl text-sm text-gray-500 mb-4">Transaction Hash: {transactionData.transactionHash}</p>
        </div>
        <div className="border-t border-gray-200">
          <dl>
            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Method</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">{transactionData.method}</dd>
            </div>
            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Block</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">{transactionData.block}</dd>
            </div>
            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Age</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">{transactionData.age}</dd>
            </div>
            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">From</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">{transactionData.from}</dd>
            </div>
            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">To</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">{transactionData.to}</dd>
            </div>
            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Value</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">{transactionData.value} DCL</dd>
            </div>
          </dl>
        </div>
      </div>
      <br /><br /><br />
    </>
  );
}

export default Transaction;