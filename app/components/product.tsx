import React from 'react';

const NikeProductGrid = () => {
  const products = [
    {
      image: "/shoes4.svg",
      title: "Jordan Why Not .6 PF",
      price: "$149.99",
      url: "#"
    },
    {
      image: "/shoes.svg", 
      title: "Zion 2 PF",
      price: "$104.95",
      url: "#"
    },
    {
      image: "/shoes2.svg",
      title: "Air Jordan 1 Mid SE",
      price: "$112.95",
      url: "#"
    },
    {
      image: "/shoes5.svg",
      title: "Jordan Why Not? 6 PF",
      price: "$113.95",
      url: "#"
    }
  ];

  return (
    <div className="bg-white py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-8">New Arrivals</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <a href={product.url} key={index} className="block">
              <div className="bg-gray-100 rounded-lg overflow-hidden">
                <img src={product.image} alt={product.title} className="w-full h-64 object-contain" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mt-4">{product.title}</h3>
              <p className="text-gray-600 font-medium">{product.price}</p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NikeProductGrid;