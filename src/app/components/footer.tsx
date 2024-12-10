import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white py-10 font-montserrat">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row items-center justify-between bg-gray-100 py-5 px-6 rounded-lg">
          {/* Logo */}
          <h3 className="text-2xl font-bold text-gray-800 mb-4 lg:mb-0">Bandage</h3>

          {/* Social Media Icons */}
          <div className="flex gap-4">
            <a
              href="#"
              className="text-blue-600 text-lg hover:text-blue-800 transition"
              aria-label="Facebook"
            >
              <FaFacebook />
            </a>
            <a
              href="#"
              className="text-blue-600 text-lg hover:text-blue-800 transition"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              className="text-blue-600 text-lg hover:text-blue-800 transition"
              aria-label="Twitter"
            >
              <FaTwitter />
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gray-300 my-8"></div>

        {/* Middle Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h4 className="text-lg font-bold text-gray-800 mb-4">Company Info</h4>
            <ul className="text-gray-600 space-y-2">
              <li>About Us</li>
              <li>Careers</li>
              <li>We are hiring</li>
              <li>Blog</li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-lg font-bold text-gray-800 mb-4">Legal</h4>
            <ul className="text-gray-600 space-y-2">
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
              <li>Cookie Policy</li>
              <li>Accessibility</li>
            </ul>
          </div>

          {/* Features */}
          <div>
            <h4 className="text-lg font-bold text-gray-800 mb-4">Features</h4>
            <ul className="text-gray-600 space-y-2">
              <li>Business Marketing</li>
              <li>User Analytics</li>
              <li>Live Chat</li>
              <li>Unlimited Support</li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-bold text-gray-800 mb-4">Resources</h4>
            <ul className="text-gray-600 space-y-2">
              <li>iOS & Android</li>
              <li>Watch a Demo</li>
              <li>Customers</li>
              <li>API</li>
            </ul>
          </div>

          {/* Get in Touch */}
          <div>
            <h4 className="text-lg font-bold text-gray-800 mb-4">Get in Touch</h4>
            <form className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-3 border border-gray-300 rounded-md text-gray-800"
              />
              <button
                type="submit"
                className="bg-blue-600 text-white py-3 px-5 rounded-md hover:bg-blue-700 transition"
              >
                Subscribe
              </button>
            </form>
            <p className="text-gray-600 text-sm mt-4">
              Stay updated with our latest news.
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="text-center text-gray-600 text-sm">
          Made With Love By Finland &copy; {new Date().getFullYear()} All Rights Reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;
