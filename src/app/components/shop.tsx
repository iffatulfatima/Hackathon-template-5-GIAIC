import React from "react";
import Image from "next/image";

const Universe = () => {
  return (
    <main className="relative">
      {/* Main Section */}
      <section className="w-full bg-white py-10 px-5 lg:px-0">
        <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-10">
          {/* Left Side: Image */}
          <div className="lg:w-1/2 flex justify-center">
            <Image
              src="/asian.png"
              alt="Asian"
              width={725}
              height={774}
              className="rounded-lg object-cover"
            />
          </div>

          {/* Right Side: Content */}
          <div className="lg:w-1/2 flex flex-col gap-6 text-center lg:text-left">
            <h5 className="text-gray-400 text-sm font-bold">SUMMER 2020</h5>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#252B42] leading-tight">
              Part of the Neural Universe
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-[#737373]">
              We know how large objects will act, <br />
              but things on a small scale.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 items-center lg:items-start">
              <button className="bg-[#2DC071] text-white px-6 py-3 rounded-md hover:bg-green-700 transition">
                BUY NOW
              </button>
              <button className="bg-[#2DC071] text-white px-6 py-3 rounded-md hover:bg-green-700 transition">
                READ MORE
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Universe;
