import { useState, useRef, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import {
  logout,
  selectCurrentUser,
} from "../../../redux/features/auth/authSlice";
import { NavLink, Link } from "react-router-dom";
import Container from "../Container/Container";
import { FiMenu } from "react-icons/fi";
import { FaLock, FaSignOutAlt } from "react-icons/fa";

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
              ? "text-[#2E8B57] text-lg font-bold"
              : "text-gray-700 text-lg font-medium"
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
              ? "text-[#2E8B57] text-lg font-bold"
              : "text-gray-700 text-lg font-medium"
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
              ? "text-[#2E8B57] text-lg font-bold"
              : "text-gray-700 text-lg font-medium"
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
              ? "text-[#2E8B57] text-lg font-bold"
              : "text-gray-700 text-lg font-medium"
          }
        >
          Contact
        </NavLink>
      </li>
    </>
  );

  return (
    <nav className="fixed w-full shadow-md z-30 bg-white/90 backdrop-blur-md">
      <div className="py-4">
        <Container>
          <div className="flex justify-between items-center relative">
            {/* Logo */}
            <div className="order-2 md:order-1">
              <h1>LOGO</h1>
            </div>

            {/* Desktop Menu */}
            <ul className="hidden md:flex items-center gap-8 order-2">
              {navLinks}
            </ul>

            {/* Mobile Menu */}
            <div className="md:hidden order-1">
              <FiMenu
                onClick={toggleMenu}
                className="text-3xl text-[#2E8B57] cursor-pointer"
              />
              {isOpen && (
                <ul className="absolute top-16 left-4 right-4 bg-white shadow-lg rounded-lg p-6 space-y-4">
                  {navLinks}
                </ul>
              )}
            </div>

            {/* Auth Buttons */}
            <div className="order-last flex gap-4 items-center relative">
              {user ? (
                <div className="relative" ref={profileRef}>
                  <div
                    onClick={toggleProfileMenu}
                    className="cursor-pointer flex items-center"
                  >
                    <div className="w-10 h-10 rounded-full overflow-hidden">
                      <img
                        src={"/default-avatar.png"}
                        alt="User Avatar"
                        className="object-cover w-full h-full"
                      />
                    </div>
                  </div>

                  {profileMenuOpen && (
                    <ul className="absolute right-0 mt-3 p-4 bg-white shadow-lg rounded-md w-52 z-40">
                      <li className="font-bold text-gray-800 mb-2">
                        {user?.name}
                      </li>
                      <li className="my-2">
                        <Link
                          to="/dashboard"
                          className="text-gray-700 text-lg font-medium"
                          onClick={() => setProfileMenuOpen(false)}
                        >
                          Dashboard
                        </Link>
                      </li>
                      <li>
                        <button
                          onClick={handleLogout}
                          className="flex gap-2 items-center text-[#FFA500] font-semibold mt-2"
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
                    className="bg-white border-2 border-[#2E8B57] text-[#2E8B57] px-4 py-2 rounded-full font-semibold flex items-center gap-2 hover:bg-[#2E8B57] hover:text-white transition"
                  >
                    Login <FaLock />
                  </Link>
                  <Link
                    to="/signup"
                    className="bg-[#2E8B57] text-white px-6 py-2 rounded-full font-semibold hidden lg:block hover:bg-[#256D46] transition"
                  >
                    Sign Up
                  </Link>
                </>
              )}
            </div>
          </div>
        </Container>
      </div>
    </nav>
  );
};

export default Navbar;
