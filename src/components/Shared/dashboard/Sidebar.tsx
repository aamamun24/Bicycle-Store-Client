import { useState } from "react";
import { AiOutlineBars } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import {
  logout,
  selectCurrentUser,
} from "../../../redux/features/auth/authSlice";
import logo from "./../../../assets/logo.png";
import { FaSignOutAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector(selectCurrentUser); // Fetch user from Redux
  const [isActive, setActive] = useState(false);

  // Sidebar Responsive Handler
  const handleToggle = () => {
    setActive(!isActive);
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  const role = user?.role; // Role-based navigation

  return (
    <>
      {/* Small Screen Navbar */}
      <div className="bg-gray-100 text-gray-800 flex justify-between md:hidden">
        <Link to="/">
          <div className="flex gap-1 items-center">
            <img className="w-12" src={logo} alt="" />
            <h2 className="text-center text-xl font-bold text-[#2E8B57]">
              SpinCycle
            </h2>
          </div>
        </Link>

        <button
          onClick={handleToggle}
          className="mobile-menu-button p-4 focus:outline-none focus:bg-gray-200"
        >
          <AiOutlineBars className="h-5 w-5" />
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`z-10 md:fixed flex flex-col justify-between overflow-x-hidden bg-gray-100 w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform ${
          isActive && "-translate-x-full"
        } md:translate-x-0 transition duration-200 ease-in-out`}
      >
        <div>
          <div className="hidden md:block">
            <Link to="/">
              <div className="flex gap-2 items-center">
                <img className="w-12" src={logo} alt="" />
                <h2 className="text-center text-xl font-bold text-[#2E8B57]">
                  SpinCycle
                </h2>
              </div>
            </Link>
          </div>

          {/* Nav Items */}
          <div className="flex flex-col justify-between flex-1 mt-2 ml-2">
            <ul>
              {role === "customer" && (
                <>
                  <li>
                    <NavLink
                      to="/dashboard/my-orders"
                      className={({ isActive }) =>
                        isActive
                          ? "text-[#FD661F] text-lg font-bold"
                          : "text-[#252641] text-lg font-medium"
                      }
                    >
                      My Orders
                    </NavLink>
                  </li>
                </>
              )}
              {role === "admin" && (
                <>
                  <li>
                    <NavLink
                      to="/dashboard/manage-orders"
                      className={({ isActive }) =>
                        isActive
                          ? "text-[#FD661F] text-lg font-bold"
                          : "text-[#252641] text-lg font-medium"
                      }
                    >
                      Manage Orders
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/dashboard/manage-products"
                      className={({ isActive }) =>
                        isActive
                          ? "text-[#FD661F] text-lg font-bold"
                          : "text-[#252641] text-lg font-medium"
                      }
                    >
                      Manage Products
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/dashboard/create-product"
                      className={({ isActive }) =>
                        isActive
                          ? "text-[#FD661F] text-lg font-bold"
                          : "text-[#252641] text-lg font-medium"
                      }
                    >
                      Create Product
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/dashboard/manage-users"
                      className={({ isActive }) =>
                        isActive
                          ? "text-[#FD661F] text-lg font-bold"
                          : "text-[#252641] text-lg font-medium"
                      }
                    >
                      Manage Users
                    </NavLink>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>

        <div className="space-y-3">
          <hr />
          <NavLink
            to="/dashboard/profile"
            className={({ isActive }) =>
              isActive
                ? "text-[#FD661F] text-lg font-bold"
                : "text-[#252641] text-lg font-medium"
            }
          >
            Profile
          </NavLink>
          <button
            onClick={handleLogout}
            className="flex gap-2 items-center text-[#FD661F] font-semibold"
          >
            Logout <FaSignOutAlt />
          </button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
