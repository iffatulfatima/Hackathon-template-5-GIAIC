import React from "react";
import Image from "next/image";

const ShopCard = () => {
  return (
    <div className="w-full flex justify-center py-10 bg-[#f5f5f5]">
      <div className="w-full max-w-[1050px] bg-[#FAFAFA] p-6 sm:p-10 rounded-lg shadow-md flex flex-col gap-8">
        {/* Title Section */}
        <div className="flex flex-col items-center gap-2">
          <h3 className="font-Montserrat font-semibold text-xl sm:text-2xl text-[#252B42]">
            EDITOR’S PICK
          </h3>
          <p className="text-center text-sm sm:text-base text-[#737373]">
            Problems trying to resolve the conflict between
          </p>
        </div>

        {/* Images Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Men Image */}
          <div className="relative h-[300px] sm:h-[350px] lg:h-[600px] lg:row-span-2">
            <Image
              src="/a1.png"
              alt="Men"
              layout="fill"
              objectFit="cover"
              className="rounded-md"
            />
            <button className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-white px-6 py-2 rounded shadow-md font-bold text-[#252B42] hover:bg-gray-100">
              MEN
            </button>
          </div>

          {/* Women Image */}
          <div className="relative h-[300px] sm:h-[350px] lg:h-[600px] lg:row-span-2">
            <Image
              src="/a2.png"
              alt="Women"
              layout="fill"
              objectFit="cover"
              className="rounded-md"
            />
            <button className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-white px-6 py-2 rounded shadow-md font-bold text-[#252B42] hover:bg-gray-100">
              WOMEN
            </button>
          </div>

          {/* Accessories and Kids Column */}
          <div className="flex flex-col gap-6">
            {/* Accessories Image */}
            <div className="relative h-[200px] sm:h-[250px] lg:h-[300px]">
              <Image
                src="/a3.png"
                alt="Accessories"
                layout="fill"
                objectFit="cover"
                className="rounded-md"
              />
              <button className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white px-6 py-2 rounded shadow-md font-bold text-[#252B42] hover:bg-gray-100">
                ACCESSORIES
              </button>
            </div>

            {/* Kids Image */}
            <div className="relative h-[200px] sm:h-[250px] lg:h-[300px]">
              <Image
                src="/a4.png"
                alt="Kids"
                layout="fill"
                objectFit="cover"
                className="rounded-md"
              />
              <button className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white px-6 py-2 rounded shadow-md font-bold text-[#252B42] hover:bg-gray-100">
                KIDS
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopCard;
