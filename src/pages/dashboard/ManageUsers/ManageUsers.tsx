import {
  useGetAllUsersQuery,
  useDeactivateUserMutation,
} from "../../../redux/features/user/userApi";
import { toast } from "sonner";

const ManageUsers = () => {
  const { data, isLoading, isError } = useGetAllUsersQuery();
  const [deactivateUser] = useDeactivateUserMutation();

  const handleDeactivate = async (userId: string) => {
    try {
      await deactivateUser(userId).unwrap();
      toast.success("User deactivated successfully!");
    } catch (error) {
      toast.error("Failed to deactivate user.");
    }
  };

  if (isLoading) return <p>Loading users...</p>;
  if (isError) return <p>Failed to load users.</p>;

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">Manage Users</h1>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 p-2">User ID</th>
            <th className="border border-gray-300 p-2">Name</th>
            <th className="border border-gray-300 p-2">Email</th>
            <th className="border border-gray-300 p-2">Role</th>
            <th className="border border-gray-300 p-2">Status</th>
            <th className="border border-gray-300 p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {data?.data.map((user) => (
            <tr key={user._id}>
              <td className="border border-gray-300 p-2">{user._id}</td>
              <td className="border border-gray-300 p-2">{user.name}</td>
              <td className="border border-gray-300 p-2">{user.email}</td>
              <td className="border border-gray-300 p-2">{user.role}</td>
              <td className="border border-gray-300 p-2">
                {user.isBlocked ? "Deactivated" : "Active"}
              </td>
              <td className="border border-gray-300 p-2">
                {!user.isBlocked && (
                  <button
                    onClick={() => handleDeactivate(user._id)}
                    className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                  >
                    Deactivate
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageUsers;
