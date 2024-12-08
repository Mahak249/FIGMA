import React from 'react';
import { TiSocialFacebook } from 'react-icons/ti';
import { CiInstagram, CiTwitter } from 'react-icons/ci';
import { FaYoutube } from 'react-icons/fa';

const NikeFooter = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {/* Footer Columns */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Find a Store</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-gray-400">Store Locator</a></li>
            <li><a href="#" className="hover:text-gray-400">Buy Gift Cards</a></li>
            <li><a href="#" className="hover:text-gray-400">Offers</a></li>
            <li><a href="#" className="hover:text-gray-400">SNKRS Launches</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Get Help</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-gray-400">Order Status</a></li>
            <li><a href="#" className="hover:text-gray-400">Delivery</a></li>
            <li><a href="#" className="hover:text-gray-400">Returns</a></li>
            <li><a href="#" className="hover:text-gray-400">Payment Options</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">About Nike</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-gray-400">News</a></li>
            <li><a href="#" className="hover:text-gray-400">Careers</a></li>
            <li><a href="#" className="hover:text-gray-400">Investors</a></li>
            <li><a href="#" className="hover:text-gray-400">Sustainability</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white">
              <CiTwitter className="w-6 h-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <TiSocialFacebook className="w-6 h-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <CiInstagram  className="w-6 h-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <FaYoutube  className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-8 text-center text-gray-400 text-sm">
        <p>&copy; 2023 Nike, Inc. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default NikeFooter;