import Link from 'next/link';
import React from 'react';

function LatestTransactions() {
  const latestTransactions = [
    { hash: "0x123...", blockNumber: 1234567, timestamp: '2024-05-14 10:30:00', value: '1' },
    { hash: "0x456...", blockNumber: 1234566, timestamp: '2024-05-14 09:45:00', value: '0.5' },
    { hash: "0x789...", blockNumber: 1234565, timestamp: '2024-05-14 08:55:00', value: '2' },
    { hash: "0x123...", blockNumber: 1234567, timestamp: '2024-05-14 10:30:00', value: '1' },
    { hash: "0x456...", blockNumber: 1234566, timestamp: '2024-05-14 09:45:00', value: '0.5' },
    { hash: "0x789...", blockNumber: 1234565, timestamp: '2024-05-14 08:55:00', value: '2' },
    { hash: "0x123...", blockNumber: 1234567, timestamp: '2024-05-14 10:30:00', value: '1' },
    { hash: "0x456...", blockNumber: 1234566, timestamp: '2024-05-14 09:45:00', value: '0.5' },
    { hash: "0x789...", blockNumber: 1234565, timestamp: '2024-05-14 08:55:00', value: '2' },
  ];

  const calculateElapsedTime = (timestamp: string | number | Date) => {
    const transactionTime = new Date(timestamp).getTime();
    const currentTime = Date.now();
    const elapsedTime = currentTime - transactionTime;
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
              Latest Transactions
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {latestTransactions.map((transaction, index) => (
            <tr key={index}>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">{transaction.hash}</div>
                <div className="text-xs text-gray-500">{calculateElapsedTime(transaction.timestamp)}</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">From <Link href={"/addresses/0x0000..."}><span className = "text-blue-500">0x0000...</span></Link> to <Link href={"/addresses/0x0000..."}><span className = "text-blue-500">0x0001...</span></Link></div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">{transaction.value} DCL</div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-center mt-4 py-4">
        <Link href="/transactions">
            <span className="text-gray-600 text-sm font-semibold">VIEW ALL TRANSACTIONS &nbsp;&nbsp; →</span>
        </Link>
      </div>
    </div>
  );
}

export default LatestTransactions;
