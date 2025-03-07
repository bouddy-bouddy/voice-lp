"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Close mobile menu when clicking a link
  const handleMobileMenuLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMobileMenuOpen]);

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <svg
              className="h-8 w-8"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 200 200"
            >
              {/* Background circle */}
              <circle cx="100" cy="100" r="90" fill="#4F46E5" />

              {/* Microphone icon */}
              <path
                d="M100 50 L100 110 M80 110 L120 110 M100 50 C88 50 78 60 78 72 L78 88 C78 100 88 110 100 110 C112 110 122 100 122 88 L122 72 C122 60 112 50 100 50"
                fill="none"
                stroke="white"
                strokeWidth="8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />

              {/* Sound waves */}
              <path
                d="M70 80 Q65 80 65 85 L65 95 Q65 100 70 100"
                fill="none"
                stroke="white"
                strokeWidth="4"
                strokeLinecap="round"
              />
              <path
                d="M130 80 Q135 80 135 85 L135 95 Q135 100 130 100"
                fill="none"
                stroke="white"
                strokeWidth="4"
                strokeLinecap="round"
              />

              {/* Checkmark */}
              <path
                d="M70 140 L90 160 L130 120"
                fill="none"
                stroke="white"
                strokeWidth="8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="ml-2 text-xl font-semibold text-gray-900">
              VoxMark
            </span>
          </div>
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              href="#fonctionnalites"
              className="text-gray-600 hover:text-gray-900"
            >
              Fonctionnalités
            </Link>
            <Link
              href="#comment-ca-marche"
              className="text-gray-600 hover:text-gray-900"
            >
              Comment ça marche
            </Link>
            <Link
              href="#temoignages"
              className="text-gray-600 hover:text-gray-900"
            >
              Témoignages
            </Link>
            <Link href="#tarifs" className="text-gray-600 hover:text-gray-900">
              Tarifs
            </Link>
            <Link href="#contact" className="text-gray-600 hover:text-gray-900">
              Contact
            </Link>
            <Link
              href="#telechargement"
              className="ml-2 px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700"
            >
              Télécharger
            </Link>
          </div>
          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-gray-600 hover:text-gray-900 focus:outline-none"
              title="toggle"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu Panel */}
      <div
        className={`mobile-menu md:hidden ${isMobileMenuOpen ? "active" : ""}`}
      >
        <div className="px-4 pt-2 pb-3 space-y-1">
          <div className="flex justify-end p-4">
            <button
              onClick={toggleMobileMenu}
              className="text-gray-600 hover:text-gray-900 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <Link
            href="#fonctionnalites"
            onClick={handleMobileMenuLinkClick}
            className="block py-2 text-base font-medium text-gray-600 hover:text-gray-900"
          >
            Fonctionnalités
          </Link>
          <Link
            href="#comment-ca-marche"
            onClick={handleMobileMenuLinkClick}
            className="block py-2 text-base font-medium text-gray-600 hover:text-gray-900"
          >
            Comment ça marche
          </Link>
          <Link
            href="#temoignages"
            onClick={handleMobileMenuLinkClick}
            className="block py-2 text-base font-medium text-gray-600 hover:text-gray-900"
          >
            Témoignages
          </Link>
          <Link
            href="#tarifs"
            onClick={handleMobileMenuLinkClick}
            className="block py-2 text-base font-medium text-gray-600 hover:text-gray-900"
          >
            Tarifs
          </Link>
          <Link
            href="#contact"
            onClick={handleMobileMenuLinkClick}
            className="block py-2 text-base font-medium text-gray-600 hover:text-gray-900"
          >
            Contact
          </Link>
          <Link
            href="#telechargement"
            onClick={handleMobileMenuLinkClick}
            className="block mt-4 py-2 text-base font-medium text-center text-white bg-indigo-600 rounded-md hover:bg-indigo-700"
          >
            Télécharger
          </Link>
        </div>
      </div>
    </nav>
  );
}
