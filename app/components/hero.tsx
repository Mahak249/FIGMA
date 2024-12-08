import React from 'react';

const PicturePage: React.FC = () => {
  // Array of your image URLs
  const imageUrls = [
    '/hero1.svg',
    '/hero2.svg',
    '/hero3.svg',
    '/hero4.svg',
    '/hero5.svg',
    '/hero6.svg',
    '/hero7.svg',
    '/hero8.svg',
    '/hero9.svg',
    '/hero10.svg',
    '/hero11.svg',
    '/hero12.svg'
  ];

  return (
    <div className=" w-[1129px] h-[2649px] flex ml-7">
      {/* Picture Grid Section */}
      <div 
        className="w-[70%] h-[2590.6px] bg-white grid grid-cols-2 gap-2 p-2 content-start"
      >
        {imageUrls.map((url, index) => (
          <div 
            key={index} 
            className="w-[335.6px] h-[419.5px] bg-gray-100 border border-gray-300"
          >
            <img 
              src={url}
              alt={`Picture ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Product Details Section */}
      <div className="w-[301px] h-[846px] bg-white border-l border-gray-200 p-6 ml-[100px]">
        <h1 className="text-2xl font-bold mb-4">Nike Air Max 97 SE</h1>
        <p className="text-gray-500 mb-4">Men's Shoes</p>
        <p className="font-bold text-2xl mb-4">₹16,995.00</p>
        <p className="text-gray-500 mb-4">(Also includes all applicable duties)</p>
        <div className="mb-4">
          <h2 className="text-lg font-bold mb-2">Select Size</h2>
          <div className="grid grid-cols-3 gap-2">
            {["UK 6", "UK 6.5", "UK 7", "UK 7.5", "UK 8", "UK 8.5"].map((size, index) => (
              <div key={index} className="px-4 py-2 bg-gray-100 rounded cursor-pointer hover:bg-gray-200">
                {size}
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-between">
          <button className="bg-black text-white px-6 py-3 rounded hover:bg-gray-800">Add to Bag</button>
          <button className="text-black px-6 py-3 rounded hover:bg-gray-200">Favourite</button>
        </div>
        <p className="text-gray-500 mt-4">
          Layer on style with the Air Max 97. The cracked leather and soft suede update the iconic design while the original look (inspired by Japanese bullet trains and water droplets) still takes centre stage. Easy-to-style colours let you hit the streets quickly.
        </p>
        <p className="text-gray-500 mt-2">
          Colour Shown: Flat Pewter/ Light Bone/Black/White
        </p>
        <p className="text-gray-500 mt-2">
          Style: DV7421-001
        </p>
      </div>
    </div>
  );
};

export default PicturePage;