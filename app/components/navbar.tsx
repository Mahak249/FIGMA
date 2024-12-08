// components/Navbar.js
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="border-b  bg-slate-100 shadow-sm">
      <div className="container mx-auto flex items-center justify-between py-2 px-4">
        {/* Left Logo */}
        <div className="flex items-center">
          <Link href="/">
            
              <img
                src="/logo.svg"
                alt="Nike Logo"
                className="h-4"
              />
            
          </Link>
        </div>

        {/* Center Navigation */}
        


        {/* Right Links */}
        <div className="flex items-center space-x-4 text-sm text-gray-600">
          <Link className="hover:text-black" href="/find-store">
            Find a Store
          </Link>
          <Link className="hover:text-black" href="/help">
            Help
          </Link>
          <Link  className="hover:text-black"href="/account">
            Join us
          </Link>
          <Link  className="hover:text-black" href="/SignUp">
           SignUp
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
