// components/Header.js
import Link from 'next/link';

const Header = () => {
  return (
    <header className="border-b">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Left Logo */}
        <div className="flex items-center space-x-4">
          <Link href="/">
          
              <img
                src="/nike.svg" // Replace with your Nike logo URL
                alt="Nike Logo"
                className="h-6"
              />
            
          </Link>
        </div>

        {/* Center Nav Links */}
        <nav className="hidden md:flex space-x-6 text-sm font-medium text-gray-700">
          <Link className="hover:text-black" href="/new-featured">
            New & Featured
          </Link>
          <Link className="hover:text-black" href="/men">
            Men
          </Link>
          <Link className="hover:text-black"  href="/women">
            Women
          </Link>
          <Link className="hover:text-black" href="/kids">
          Kids
          </Link>
          <Link className="hover:text-black" href="/sale">
            Sale
          </Link>
          <Link  className="hover:text-black" href="/snkrs">
            SNKRS
          </Link>
        </nav>

        {/* Right Options */}
        <div className="flex items-center space-x-6">
          <Link href="/search">
            
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-5 h-5 text-gray-600 hover:text-black"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-4.35-4.35m1.85-5.15a7.5 7.5 0 11-15 0 7.5 7.5 0 0115 0z"
                />
              </svg>
            
          </Link>
          <Link href="/cart">
            
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-5 h-5 text-gray-600 hover:text-black"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 3h2.25l1.541 9.705a2.25 2.25 0 002.25 1.962h9.968a2.25 2.25 0 002.25-1.962L20.75 3M8.25 21a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm8.25 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"
                />
              </svg>
            
          </Link>
          <Link href="/account">
            
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-5 h-5 text-gray-600 hover:text-black"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 9A3.75 3.75 0 1112 5.25 3.75 3.75 0 0115.75 9zm-7.5 0A3.75 3.75 0 1112 12.75 3.75 3.75 0 018.25 9zm0 10.5a7.5 7.5 0 017.5 0M12 12.75a7.5 7.5 0 017.5 0"
                />
              </svg>
            
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
