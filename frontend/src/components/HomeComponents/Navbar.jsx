import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUser, useClerk } from "@clerk/clerk-react";
import Logo from "../../assets/logo.svg";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const { user, isSignedIn } = useUser();
  const { signOut } = useClerk();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    await signOut();
    navigate("/");
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleProfileDropdown = () => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  };

  return (
    <header
      id="header"
      className="bg-transparent fixed w-full z-30 top-0 shadow backdrop-blur-md"
    >
      <nav className="container mx-auto px-4 py-3" id="el-mj0l0sjt">
        <div className="flex items-center justify-between" id="el-3uddywkl">
          <div className="flex items-center space-x-2" id="el-t7wrapyd">
            <Link to="/">
              <div className="flex items-center space-x-2">
                <img src={Logo} className="w-12 h-12" alt="logo" />
                <span className="text-xl font-bold text-white" id="el-742nk914">
                  Kisan Kart
                </span>
              </div>
            </Link>
          </div>

          <ul
            className="hidden md:flex items-center space-x-8"
            id="el-tw79rgzv"
          >
            <li id="el-293p54ih">
              <Link
                to="/home"
                className="text-white hover:text-green-600 transition-colors duration-300"
              >
                Home
              </Link>
            </li>
            <li id="el-9xb85dn8">
              <Link
                to="/markets"
                className="text-white hover:text-green-600 transition-colors duration-300"
              >
                Markets
              </Link>
            </li>
            <li id="el-0pp0a1my">
              <Link
                to="/vendors"
                className="text-white hover:text-green-600 transition-colors duration-300"
              >
                Vendors
              </Link>
            </li>
            <li id="el-q2cu62o3">
              <Link
                to="/about"
                className="text-white hover:text-green-600 transition-colors duration-300"
              >
                About
              </Link>
            </li>
            <li id="el-addbids">
              <Link
                to="/bidding"
                className="text-white hover:text-green-600 transition-colors duration-300"
              >
                Add Bids
              </Link>
            </li>
          </ul>

          <div
            className="hidden md:flex items-center space-x-4"
            id="el-k2s75zti"
          >
            <div className="relative">
              {isSignedIn ? (
                <button
                  onClick={toggleProfileDropdown}
                  className="flex items-center focus:outline-none cursor-pointer"
                >
                  <img
                    src={user.imageUrl}
                    alt="Profile"
                    className="h-8 w-8 rounded-full object-cover"
                  />
                </button>
              ) : (
                <Link
                  to="/sign-in"
                  className="text-white hover:text-green-600 transition-colors duration-300"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                </Link>
              )}

              {/* Profile Dropdown */}
              {isProfileDropdownOpen && isSignedIn && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 cursor-pointer">
                  <div className="px-4 py-2 text-sm text-gray-700 border-b">
                    {user.fullName}
                  </div>
                  <Link
                    to="/profile"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Profile Settings
                  </Link>
                  <button
                    onClick={handleSignOut}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                  >
                    Sign Out
                  </button>
                </div>
              )}
            </div>
          </div>

          <button
            onClick={toggleMenu}
            className="md:hidden text-white focus:outline-none cursor-pointer"
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden ${isMenuOpen ? "block" : "hidden"}`}>
          <ul className="mt-4 space-y-4 pb-3">
            <li>
              <Link
                to="/"
                className="block text-white hover:text-green-600 transition-colors duration-300"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/markets"
                className="block text-white hover:text-green-600 transition-colors duration-300"
              >
                Markets
              </Link>
            </li>
            <li>
              <Link
                to="/vendors"
                className="block text-white hover:text-green-600 transition-colors duration-300"
              >
                Vendors
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="block text-white hover:text-green-600 transition-colors duration-300"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/bidding"
                className="block text-white hover:text-green-600 transition-colors duration-300"
              >
                Add Bids
              </Link>
            </li>
            {isSignedIn ? (
              <>
                <li className="border-t pt-2">
                  <div className="flex items-center space-x-2">
                    <img
                      src={user.imageUrl}
                      alt="Profile"
                      className="h-8 w-8 rounded-full object-cover"
                    />
                    <span className="text-gray-700">{user.fullName}</span>
                  </div>
                </li>
                <li>
                  <Link
                    to="/profile"
                    className="block text-white hover:text-green-600 transition-colors duration-300"
                  >
                    Profile Settings
                  </Link>
                </li>
                <li>
                  <button
                    onClick={handleSignOut}
                    className="block w-full text-left text-white hover:text-green-600 transition-colors duration-300"
                  >
                    Sign Out
                  </button>
                </li>
              </>
            ) : (
              <li>
                <Link
                  to="/sign-in"
                  className="block text-white hover:text-green-600 transition-colors duration-300"
                >
                  Sign In
                </Link>
              </li>
            )}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
