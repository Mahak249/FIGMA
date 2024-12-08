// components/Sidebar.js
export default function Sidebar() {
    return (
      <div className="w-64 h-screen bg-gray-100 p-4 border-r">
        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-4">Categories</h2>
          <ul className="space-y-2">
            <li className="hover:text-blue-600 cursor-pointer">Shoes</li>
            <li className="hover:text-blue-600 cursor-pointer">Sports Bras</li>
            <li className="hover:text-blue-600 cursor-pointer">Tops & T-Shirts</li>
            <li className="hover:text-blue-600 cursor-pointer">Hoodies & Sweatshirts</li>
            <li className="hover:text-blue-600 cursor-pointer">Jackets</li>
            <li className="hover:text-blue-600 cursor-pointer">Trousers & Tights</li>
            <li className="hover:text-blue-600 cursor-pointer">Shorts</li>
            <li className="hover:text-blue-600 cursor-pointer">Tracksuits</li>
            <li className="hover:text-blue-600 cursor-pointer">Jumpsuits & Rompers</li>
            <li className="hover:text-blue-600 cursor-pointer">Skirts & Dresses</li>
            <li className="hover:text-blue-600 cursor-pointer">Socks</li>
            <li className="hover:text-blue-600 cursor-pointer">Accessories & Equipment</li>
          </ul>
        </div>
  
        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-4">Gender</h2>
          <ul className="space-y-2">
            <li className="hover:text-blue-600 cursor-pointer">Men</li>
            <li className="hover:text-blue-600 cursor-pointer">Women</li>
            <li className="hover:text-blue-600 cursor-pointer">Unisex</li>
          </ul>
        </div>
  
        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-4">Kids</h2>
          <ul className="space-y-2">
            <li className="hover:text-blue-600 cursor-pointer">Boys</li>
            <li className="hover:text-blue-600 cursor-pointer">Girls</li>
          </ul>
        </div>
  
        <div>
          <h2 className="text-lg font-semibold mb-4">Shop By Price</h2>
          <div className="flex items-center">
            <input
              type="range"
              min="500"
              max="20000"
              className="w-full"
            />
          </div>
          <div className="text-sm mt-2">
            ₹500 - ₹20,000
          </div>
        </div>
      </div>
    );
  }
  