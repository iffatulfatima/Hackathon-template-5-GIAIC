import Link from "next/link";

const Hero = () => {
  return (
    <section className="relative w-full h-screen bg-gray-100">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/hero.jpg" // Replace with your desired image path
          alt="Hero"
          className="w-full h-full object-cover"
        />
        {/* Overlay for Text Readability */}
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center h-full px-4 md:px-8">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
          Welcome to Bandage
        </h1>
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 mb-6 sm:mb-8 max-w-2xl">
          Discover the latest trends in fashion and shop the newest collections.
        </p>

        {/* Call-to-Action Buttons */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
          <Link
            href="/shop"
            className="px-5 sm:px-6 py-3 sm:py-3.5 bg-green-600 text-white text-sm sm:text-lg font-semibold rounded-md hover:bg-green-500 transition duration-200"
          >
            Shop Now
          </Link>
          <Link
            href="/about"
            className="px-5 sm:px-6 py-3 sm:py-3.5 bg-white text-gray-800 text-sm sm:text-lg font-semibold rounded-md hover:bg-gray-100 transition duration-200"
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
