import Link from 'next/link';

export default function Navbar () {
  return (
    <nav className="bg-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <p className="text-black text-xl font-semibold cursor-pointer tracking-tight" style={{ fontFamily: 'Open Sans, sans-serif' }}>
            <Link href="/">
              Decentralized Chain Link
            </Link>
          </p>
        </div>
        <div className="flex items-center">
          <p className="text-black hover:text-blue-500 px-3 py-2 rounded-md text-sm font-medium cursor-pointer tracking-tight" style={{ fontFamily: 'Open Sans, sans-serif' }}>
            <Link href="/">
              Home
            </Link>
          </p>
          <p className="text-black hover:text-blue-500 px-3 py-2 rounded-md text-sm font-medium cursor-pointer tracking-tight" style={{ fontFamily: 'Open Sans, sans-serif' }}>
            <Link href="/blocks">
              Blocks
            </Link>
          </p>
          <p className="text-black hover:text-blue-500 px-3 py-2 rounded-md text-sm font-medium cursor-pointer tracking-tight" style={{ fontFamily: 'Open Sans, sans-serif' }}>
            <Link href="/transactions">
              Transactions
            </Link>
          </p>
          <p className="text-black hover:text-blue-500 px-3 py-2 rounded-md text-sm font-medium cursor-pointer tracking-tight" style={{ fontFamily: 'Open Sans, sans-serif' }}>
            <Link href="/addresses">
              Addresses
            </Link>
          </p>
          <p className="text-black hover:text-blue-500 px-3 py-2 rounded-md text-sm font-medium cursor-pointer tracking-tight" style={{ fontFamily: 'Open Sans, sans-serif' }}>
            <Link href="/about">
              About
            </Link>
          </p>
        </div>
      </div>
    </nav>
  );
};
