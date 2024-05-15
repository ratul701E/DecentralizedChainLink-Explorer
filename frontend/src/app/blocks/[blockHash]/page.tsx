import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar'
import Link from 'next/link';
import React from 'react'

function Block({ params }: { params: { blockHash: string } }) {

  const blockData = {
    blockNumber: 123456,
    timestamp: '2024-05-15 10:30:00',
    transactions: 10,
    validator: '0x1234567890abcdef'
  };

  return (
    <>
      <Navbar />
        <div className="bg-white shadow overflow-hidden sm:rounded-lg" style={{margin: 40}}>
          <div className="px-4 py-5 sm:px-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900">Block Details</h3>
            <p className="mt-1 max-w-2xl text-sm text-gray-500 mb-4">{params.blockHash}</p>
          </div>
          <div className="border-t border-gray-200">
            <dl>
              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Block Number</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">{blockData.blockNumber}</dd>
              </div>
              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Status</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">Finalized</dd>
              </div>
              <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Timestamp</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">{blockData.timestamp}</dd>
              </div>
              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Transactions</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">{blockData.transactions}</dd>
              </div>
              <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Validator</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2"><Link href={`/addresses/${blockData.validator}`}><span className='text-blue-500'>{blockData.validator}</span></Link></dd>
              </div>
            </dl>
          </div>
        </div>
        <br /><br /><br /><br />
        <Footer/>
    </>
  )

}

export default Block