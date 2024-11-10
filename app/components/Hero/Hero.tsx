


  import React from "react";
import Image from "next/image";

function Home() {
  return (
    <div className="h-screen">
     
      <div className="flex h-[80%]">
        <div className="w-1/2 flex flex-col justify-center items-start m-12">
          <h1 className="text-[44px] font-bold">IMPECCABLE </h1>
          <h1 className="text-[44px] font-bold">CRAFTSMANSHIP AND</h1>
          <h1 className="text-[44px] font-bold">FINESSE</h1>
          <p className="text-[32px] w-[902px]">
          An example of intricate workmanship and detail, elegant necklaces and long and short chains form a part of our desirable collection.
          </p>
          <button className="width-fixed-[288px] height-[58px] left-[176px] gap-[10px] text-[30px] text-[#FFFFFF] bg-[#A29875]    ">Explore Now</button>
        </div>
        <div className="w-1/2 flex justify-center items-center">
          <Image
            src={"/images/hero.svg"}
            alt="hero image"
            width={462}
            height={647}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;

