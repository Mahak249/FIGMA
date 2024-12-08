

// pages/ka.js
export default function KaPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Big Picture Section */}
      <div className="relative  px-10 h-[90%] w-full">
        <img
          src="big.svg" // Replace with your image URL
          alt="Big Picture"
          className="object-cover w-full h-full"
        />
        
      </div>

      {/* Spacer */}
      <div className="flex-grow bg-gray-100"></div>

      {/* Text at the Bottom */}
      <div className=" py-8">
        <p className="text-center text-lg font-semibold text-gray-800">
        The suede and synthetic leather upper with mesh underlays adds breathability and durability.
        </p>
      </div>
    </div>
  );
}