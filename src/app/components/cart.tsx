import React from "react";
import Image from "next/image";

const Uni = () => {
  return (
    <main className="relative">
      {/* Green Section */}
      <section className="w-full bg-[#23856D] py-10 px-5 lg:px-0">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10">
          {/* Text Content */}
          <div className="lg:w-1/2 flex flex-col gap-6 text-center lg:text-left">
            <h4 className="text-base sm:text-lg font-medium text-white">SUMMER 2020</h4>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
              Vita Classic Product
            </h1>
            <p className="text-sm sm:text-base lg:text-lg text-white">
              We know how large objects will act. We know how are objects will act. We know.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 items-center lg:items-start">
              <h3 className="text-xl sm:text-2xl font-bold text-white">$16.48</h3>
              <button className="bg-[#2DC071] text-white px-6 py-3 rounded-md hover:bg-green-700 transition">
                ADD TO CART
              </button>
            </div>
          </div>

          {/* Image Content */}
          <div className="lg:w-1/2 flex justify-center">
            <Image
              src="/col-md-6.png"
              alt="Product Image"
              width={510}
              height={685}
              className="rounded-lg object-cover"
            />
          </div>
        </div>
      </section>

  
    </main>
  );
};

export default Uni;
