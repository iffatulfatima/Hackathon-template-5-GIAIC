"use client"
import React, { useState } from "react";
import Link from "next/link";
import { AiOutlineUser, AiOutlineSearch, AiOutlineShoppingCart } from "react-icons/ai";
import { CiHeart } from "react-icons/ci";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white flex items-center justify-between px-6 sm:px-8 h-[58px] shadow-md">
      {/* Logo Section */}
      <div className="flex items-center">
        <h3 className="text-2xl font-bold text-gray-800">Bandage</h3>
      </div>

      {/* Hamburger Menu (Mobile) */}
      <button
        className="sm:hidden text-2xl text-gray-700"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle Menu"
      >
        {menuOpen ? <HiOutlineX /> : <HiOutlineMenuAlt3 />}
      </button>

      {/* Navigation Links */}
      <nav
        className={`${
          menuOpen ? "flex" : "hidden"
        } absolute top-[58px] left-0 w-full bg-white flex-col items-center shadow-md sm:shadow-none sm:flex sm:relative sm:flex-row sm:w-auto sm:bg-transparent gap-4 sm:gap-6 py-4 sm:py-0`}
      >
        <Link
          href="/"
          className="text-sm font-semibold text-gray-500 hover:text-gray-700"
        >
          Home
        </Link>
        <Link
          href="/shop"
          className="text-sm font-semibold text-black"
        >
          Shop
        </Link>
        <Link
          href="/about"
          className="text-sm font-semibold text-gray-500 hover:text-gray-700"
        >
          About
        </Link>
        <Link
          href="/blog"
          className="text-sm font-semibold text-gray-500 hover:text-gray-700"
        >
          Blog
        </Link>
        <Link
          href="/contact"
          className="text-sm font-semibold text-gray-500 hover:text-gray-700"
        >
          Contact
        </Link>
        <Link
          href="/pages"
          className="text-sm font-semibold text-gray-500 hover:text-gray-700"
        >
          Pages
        </Link>
      </nav>

      {/* Utility Icons */}
      <div className="hidden sm:flex items-center gap-6">
        <Link
          href="/account"
          className="text-blue-400 text-lg hover:text-gray-700"
        >
          <AiOutlineUser />
        </Link>
        <Link
          href="/login"
          className="text-blue-400 text-sm font-semibold hover:text-gray-700"
        >
          Login/Register
        </Link>
        <Link
          href="/search"
          className="text-blue-400 text-lg hover:text-gray-700"
        >
          <AiOutlineSearch />
        </Link>
        <Link
          href="/cart"
          className="text-blue-400 text-lg hover:text-gray-700"
        >
          <AiOutlineShoppingCart />
        </Link>
        <Link
          href="/wishlist"
          className="text-blue-400 text-lg hover:text-gray-700"
        >
          <CiHeart />
        </Link>
      </div>
    </header>
  );
};

export default Header;
