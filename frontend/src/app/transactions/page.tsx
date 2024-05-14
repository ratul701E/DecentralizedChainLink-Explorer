import React from 'react';
import Navbar from '@/components/Navbar';
import Link from 'next/link';

function Transactions() {
  
  const transactionData = [
    { transactionHash: 1, method: "Transfer", block: 10001, age: '5 minutes ago', from: '0x1234...', to: '0x1234...', value: '10'},
    { transactionHash: 1, method: "Transfer", block: 10001, age: '5 minutes ago', from: '0x1234...', to: '0x1234...', value: '10'},
    { transactionHash: 1, method: "Transfer", block: 10001, age: '5 minutes ago', from: '0x1234...', to: '0x1234...', value: '10'},
    { transactionHash: 1, method: "Transfer", block: 10001, age: '5 minutes ago', from: '0x1234...', to: '0x1234...', value: '10'},
    { transactionHash: 1, method: "Transfer", block: 10001, age: '5 minutes ago', from: '0x1234...', to: '0x1234...', value: '10'},
    { transactionHash: 1, method: "Transfer", block: 10001, age: '5 minutes ago', from: '0x1234...', to: '0x1234...', value: '10'},
    { transactionHash: 1, method: "Transfer", block: 10001, age: '5 minutes ago', from: '0x1234...', to: '0x1234...', value: '10'},
    { transactionHash: 1, method: "Transfer", block: 10001, age: '5 minutes ago', from: '0x1234...', to: '0x1234...', value: '10'},
    { transactionHash: 1, method: "Transfer", block: 10001, age: '5 minutes ago', from: '0x1234...', to: '0x1234...', value: '10'},
    { transactionHash: 1, method: "Transfer", block: 10001, age: '5 minutes ago', from: '0x1234...', to: '0x1234...', value: '10'},
  ];

  const convertToCSV = () => {
    const csvContent =
      "data:text/csv;charset=utf-8," +
      transactionData.map((transaction) => Object.values(transaction).join(",")).join("\n");
    return encodeURI(csvContent);
  };

  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 mt-8">
        <h2 className="font-semibold mb-8 mt-4">Transactions</h2>
        <h2 className="mb-10 font-semibold">Last Transaction <Link href={`/transactions/19869880`}><span className='text-blue-500'>#19869880</span></Link></h2>
        <br />
        <h2 className="text-sm mb-12">
            2,369,458,379 transactions found in total
        <a
          href={convertToCSV()}
          download="transactions-data.csv"
          style={{float: 'right'}}
        >
          Download Page Data
        </a>
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
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900"><Link href={`/transactions/${transaction.transactionHash}`}><span className='text-blue-500'>{transaction.transactionHash}</span></Link></td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{transaction.method}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900"><Link href={`/blocks/${transaction.block}`}><span className='text-blue-500'>{transaction.block}</span></Link></td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{transaction.age}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900"><Link href={`/addresses/${transaction.from}`}><span className='text-blue-500'>{transaction.from}</span></Link></td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900"><Link href={`/addresses/${transaction.to}`}><span className='text-blue-500'>{transaction.to}</span></Link></td>
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