import supabase from "@/utils/supabase";
import SpamSection from "@/components/SpamSection";

export const revalidate = 0; // Disable caching

const fetchUsers = async () => {
  const { data: aj_users, error } = await supabase.from("aj_users").select("*");

  // console.log(aj_users)

  if (error) {
    console.error("Error fetching users:", error);
    return [];
  }

  return aj_users;
};

const fetchMTNUsers = async () => {
  let { data: ajos_mtn_users, error } = await supabase
    .from("ajos_mtn_users")
    .select("*");

  if (error) {
    console.error("Error fetching users:", error);
    return [];
  }

  // Add '+' prefix to all phone numbers
  const formattedUsers = ajos_mtn_users.map((user) => ({
    ...user,
    number: `+${user.number.toString().replace(/^\+/, "")}`, // Add '+' if not present
  }));

  // Shuffle the array and select the first 10 elements
  const shuffled = formattedUsers.sort(() => 0.5 - Math.random());
  const randomUsers = shuffled.slice(0, 10);
  // console.log(ajos_mtn_users);
  return randomUsers;
};

export default async function Page() {
  const users = await fetchUsers(); // Fetch all users initially

  const mtn_users = await fetchMTNUsers();
  const mtn_users_numbers = mtn_users.map((item) => item.number);

  // console.log(mtn_users)

  return (
    <div className="p-6 max-w-7xl mx-auto">
      {/* MTN SMS Button */}
      <SpamSection mtn_list={mtn_users_numbers} />

      <center>
        <h1 className="text-2xl font-bold mb-4">Users</h1>
      </center>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
          <thead>
            <tr className="w-full bg-gray-100 border-b">
              <th className="py-2 px-4 text-left text-gray-600">ID</th>
              <th className="py-2 px-4 text-left text-gray-600">Name</th>
              <th className="py-2 px-4 text-left text-gray-600">Pass</th>
              <th className="py-2 px-4 text-left text-gray-600">Created At</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id} className="border-b">
                <td className="py-2 px-4">{user.id}</td>
                <td className="py-2 px-4">{user.username}</td>
                <td className="py-2 px-4">{user.password}</td>
                <td className="py-2 px-4">
                  {new Date(user.created_at).toLocaleDateString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
