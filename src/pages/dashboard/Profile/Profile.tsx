import {
  logout,
  selectCurrentUser,
} from "../../../redux/features/auth/authSlice";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";

const Profile = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector(selectCurrentUser);

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div className="flex h-[100vh] justify-center items-center">
      <div className="bg-gray-100 p-8 rounded shadow-md w-96">
        <div className="flex items-center mb-4">
          <img
            src={"https://via.placeholder.com/150"}
            alt="User Avatar"
            className="rounded-full h-16 w-16 object-cover mr-4"
          />
          <div>
            <h1 className="text-2xl font-semibold">
              {user?.name || "User Name"}
            </h1>
          </div>
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">User Details</h2>
          <div>
            <p className="text-gray-600 mb-1">
              <span className="font-semibold">Email:</span>{" "}
              {user?.email || "Not Available"}
            </p>
            <p className="text-gray-600">
              <span className="font-semibold">Phone:</span>{" "}
              {user?.phone || "Not Available"}
            </p>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">Actions</h2>
          <button className="bg-blue-500 text-white px-4 py-2 rounded">
            Edit Profile
          </button>
          <button
            onClick={handleLogout}
            className="bg-red-500 text-white ml-2 px-4 py-2 rounded"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
