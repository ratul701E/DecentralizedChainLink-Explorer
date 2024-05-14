import Navbar from '@/components/Navbar';
import React from 'react';

function Transactions() {
  
  const transactionData = [
    { transactionHash: 1, method: 1, block: 10001, age: '5 minutes ago', from: '0x1234...', to: '0x1234...', value: '10'},
    { transactionHash: 1, method: 1, block: 10001, age: '5 minutes ago', from: '0x1234...', to: '0x1234...', value: '10'},
    { transactionHash: 1, method: 1, block: 10001, age: '5 minutes ago', from: '0x1234...', to: '0x1234...', value: '10'},
    { transactionHash: 1, method: 1, block: 10001, age: '5 minutes ago', from: '0x1234...', to: '0x1234...', value: '10'},
    { transactionHash: 1, method: 1, block: 10001, age: '5 minutes ago', from: '0x1234...', to: '0x1234...', value: '10'},
    { transactionHash: 1, method: 1, block: 10001, age: '5 minutes ago', from: '0x1234...', to: '0x1234...', value: '10'},
    { transactionHash: 1, method: 1, block: 10001, age: '5 minutes ago', from: '0x1234...', to: '0x1234...', value: '10'},
    { transactionHash: 1, method: 1, block: 10001, age: '5 minutes ago', from: '0x1234...', to: '0x1234...', value: '10'},
    { transactionHash: 1, method: 1, block: 10001, age: '5 minutes ago', from: '0x1234...', to: '0x1234...', value: '10'},
    { transactionHash: 1, method: 1, block: 10001, age: '5 minutes ago', from: '0x1234...', to: '0x1234...', value: '10'},
    { transactionHash: 1, method: 1, block: 10001, age: '5 minutes ago', from: '0x1234...', to: '0x1234...', value: '10'},
    { transactionHash: 1, method: 1, block: 10001, age: '5 minutes ago', from: '0x1234...', to: '0x1234...', value: '10'},
    { transactionHash: 1, method: 1, block: 10001, age: '5 minutes ago', from: '0x1234...', to: '0x1234...', value: '10'},
    { transactionHash: 1, method: 1, block: 10001, age: '5 minutes ago', from: '0x1234...', to: '0x1234...', value: '10'},
    { transactionHash: 1, method: 1, block: 10001, age: '5 minutes ago', from: '0x1234...', to: '0x1234...', value: '10'},
  ];


  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 mt-8">
        <h2 className="font-semibold mb-8 mt-4">Transactions</h2>
        <h2 className="mb-10 font-semibold">Last Transaction </h2>
        <h2 className="text-sm mb-12">
            2,369,458,379 transactions found in total
        </h2>
        <div className="w-full">
          <table className="w-full divide-y divide-gray-200" style={{ margin: '20px' }}>
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">Transaction Hash</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">Method</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">Block</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">Age</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">From</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">To</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">Value</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {transactionData.map((transaction, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{transaction.transactionHash}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{transaction.method}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{transaction.block}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{transaction.age}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{transaction.from}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{transaction.to}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{transaction.value} DCL</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Transactions;
