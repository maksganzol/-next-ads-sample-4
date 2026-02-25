"use client";

import { Search, Menu, ShoppingCart, User } from "lucide-react";
import { useState } from "react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      {/* Top bar */}
      <div className="bg-primary text-white text-sm py-1.5">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <span>Free shipping on orders over $50</span>
          <div className="hidden md:flex items-center gap-4">
            <a href="#" className="hover:underline">Help</a>
            <a href="#" className="hover:underline">Track Order</a>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 gap-4">
          {/* Logo */}
          <h1 className="text-2xl font-bold text-primary whitespace-nowrap">ShopVault</h1>

          {/* Search bar */}
          <div className="hidden md:flex flex-1 max-w-xl">
            <div className="flex w-full">
              <input
                type="text"
                placeholder="Search products, brands..."
                className="w-full px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:border-primary"
              />
              <button className="px-4 py-2 bg-primary text-white rounded-r-lg hover:bg-indigo-700 transition-colors">
                <Search size={18} />
              </button>
            </div>
          </div>

          {/* Icons */}
          <div className="flex items-center gap-3">
            <button className="md:hidden p-2 hover:bg-gray-100 rounded-full transition-colors">
              <Search size={20} className="text-gray-700" />
            </button>
            <a href="#" className="hidden md:flex items-center gap-1 text-sm text-gray-700 hover:text-primary transition-colors">
              <User size={20} />
              <span>Sign In</span>
            </a>
            <button className="p-2 hover:bg-gray-100 rounded-full transition-colors relative">
              <ShoppingCart size={20} className="text-gray-700" />
              <span className="absolute -top-1 -right-1 bg-primary text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                3
              </span>
            </button>
            <button
              className="md:hidden p-2 hover:bg-gray-100 rounded-full transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu size={20} className="text-gray-700" />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="mb-4">
              <div className="flex w-full">
                <input
                  type="text"
                  placeholder="Search products..."
                  className="w-full px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:border-primary"
                />
                <button className="px-4 py-2 bg-primary text-white rounded-r-lg">
                  <Search size={18} />
                </button>
              </div>
            </div>
            <nav className="flex flex-col space-y-3">
              <a href="#" className="text-gray-700 hover:text-primary transition-colors">Deals</a>
              <a href="#" className="text-gray-700 hover:text-primary transition-colors">New Arrivals</a>
              <a href="#" className="text-gray-700 hover:text-primary transition-colors">Brands</a>
              <a href="#" className="text-gray-700 hover:text-primary transition-colors">Contact</a>
              <a href="#" className="text-gray-700 hover:text-primary transition-colors">Sign In</a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
