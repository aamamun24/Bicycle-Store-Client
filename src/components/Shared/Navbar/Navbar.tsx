import { useState, useRef, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import {
  logout,
  selectCurrentUser,
} from "../../../redux/features/auth/authSlice";
import { NavLink, Link } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import { FaSignOutAlt, FaUserCircle } from "react-icons/fa";
import logo from "./../../../assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [profileMenuOpen, setProfileMenuOpen] = useState(false);
  const profileRef = useRef<HTMLDivElement>(null);
  const dispatch = useAppDispatch();
  const user = useAppSelector(selectCurrentUser);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleProfileMenu = () => {
    setProfileMenuOpen(!profileMenuOpen);
  };

  const handleLogout = () => {
    dispatch(logout());
    setProfileMenuOpen(false);
  };

  // Close profile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        profileRef.current &&
        !profileRef.current.contains(event.target as Node)
      ) {
        setProfileMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const navLinks = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-[#2E8B57] font-semibold border-b-2 border-[#2E8B57] pb-1"
              : "text-gray-700 hover:text-[#2E8B57] transition"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/bicycles"
          className={({ isActive }) =>
            isActive
              ? "text-[#2E8B57] font-semibold border-b-2 border-[#2E8B57] pb-1"
              : "text-gray-700 hover:text-[#2E8B57] transition"
          }
        >
          Bicycles
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive
              ? "text-[#2E8B57] font-semibold border-b-2 border-[#2E8B57] pb-1"
              : "text-gray-700 hover:text-[#2E8B57] transition"
          }
        >
          About Us
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive
              ? "text-[#2E8B57] font-semibold border-b-2 border-[#2E8B57] pb-1"
              : "text-gray-700 hover:text-[#2E8B57] transition"
          }
        >
          Contact
        </NavLink>
      </li>
    </>
  );

  return (
    <nav className="fixed w-full shadow-md z-30 bg-white/90 backdrop-blur-md">
      <div className="py-3">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img src={logo} alt="SpinCycle Logo" className="h-12 w-12" />
            <span className="text-[#2E8B57] text-2xl font-bold">SpinCycle</span>
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-8">{navLinks}</ul>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center gap-4">
            {user ? (
              <div className="relative" ref={profileRef}>
                <button
                  onClick={toggleProfileMenu}
                  className="flex items-center gap-2 text-gray-700 hover:text-[#2E8B57] transition"
                >
                  <FaUserCircle className="text-2xl" />
                  <span className="font-medium">{user.name}</span>
                </button>
                {profileMenuOpen && (
                  <ul className="absolute right-0 mt-3 p-4 bg-white shadow-lg rounded-md w-52 z-40">
                    <li className="font-bold text-gray-800 mb-2">
                      {user?.name}
                    </li>
                    <li className="my-2">
                      <Link
                        to="/dashboard"
                        className="text-gray-700 hover:text-[#2E8B57] transition"
                        onClick={() => setProfileMenuOpen(false)}
                      >
                        Dashboard
                      </Link>
                    </li>
                    <li>
                      <button
                        onClick={handleLogout}
                        className="flex gap-2 items-center text-[#FD661F] font-semibold mt-2"
                      >
                        Logout <FaSignOutAlt />
                      </button>
                    </li>
                  </ul>
                )}
              </div>
            ) : (
              <>
                <Link
                  to="/login"
                  className="border-2 border-[#2E8B57] text-[#2E8B57] px-4 py-2 rounded-full font-medium hover:bg-[#2E8B57] hover:text-white transition"
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="bg-[#2E8B57] text-white px-6 py-2 rounded-full font-medium hover:bg-[#256D46] transition"
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <FiMenu
              onClick={toggleMenu}
              className="text-3xl text-[#2E8B57] cursor-pointer"
            />
            {isOpen && (
              <ul className="absolute top-16 left-4 right-4 bg-white shadow-lg rounded-lg p-6 space-y-4">
                {navLinks}
                {user ? (
                  <>
                    <li>
                      <Link
                        to="/dashboard"
                        className="text-gray-700 hover:text-[#2E8B57] transition"
                        onClick={() => setIsOpen(false)}
                      >
                        Dashboard
                      </Link>
                    </li>
                    <li>
                      <button
                        onClick={handleLogout}
                        className="flex gap-2 items-center text-[#FD661F] font-semibold"
                      >
                        Logout <FaSignOutAlt />
                      </button>
                    </li>
                  </>
                ) : (
                  <>
                    <li>
                      <Link
                        to="/login"
                        className="border-2 border-[#2E8B57] text-[#2E8B57] px-4 py-2 rounded-full font-medium hover:bg-[#2E8B57] hover:text-white transition"
                        onClick={() => setIsOpen(false)}
                      >
                        Login
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/register"
                        className="bg-[#2E8B57] text-white px-6 py-2 rounded-full font-medium hover:bg-[#256D46] transition"
                        onClick={() => setIsOpen(false)}
                      >
                        Sign Up
                      </Link>
                    </li>
                  </>
                )}
              </ul>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
