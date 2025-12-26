import { useEffect, useState } from "react";
import { Eye, Pencil, Trash2 } from "lucide-react";

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  company: { name: string };
  role: "Admin" | "Editor" | "User";
}

const roles = ["Admin", "Editor", "User"] as const;

export default function DashboardUsers() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  const perPage = 5;

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        const withRoles = data.map((u: any) => ({
          ...u,
          role: roles[Math.floor(Math.random() * roles.length)],
        }));
        setUsers(withRoles);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    setPage(1);
  }, [search]);

  const filtered = users.filter(
    (u) =>
      u.name.toLowerCase().includes(search.toLowerCase()) ||
      u.email.toLowerCase().includes(search.toLowerCase())
  );

  const totalPages = Math.max(1, Math.ceil(filtered.length / perPage));
  const paginated = filtered.slice((page - 1) * perPage, page * perPage);

  const updateRole = (id: number, role: User["role"]) => {
    setUsers((prev) =>
      prev.map((u) => (u.id === id ? { ...u, role } : u))
    );
  };

  if (loading) return <p>Loading users...</p>;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <div>
          <h1 className="text-3xl font-bold text-[#418FDE]">Users</h1>
          <p className="text-slate-500">Manage users and permissions</p>
        </div>

        <input
          type="text"
          placeholder="Search users..."
          className="w-full sm:w-64 px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-[#418FDE] outline-none"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Table */}
      <div className="bg-white rounded-2xl shadow overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead className="bg-slate-100 text-slate-600">
            <tr>
              <th className="px-4 py-3 sm:px-5 sm:py-4 text-left">User</th>
              <th className="px-4 py-3 sm:px-5 sm:py-4 text-left hidden sm:table-cell">
                Username
              </th>
              <th className="px-4 py-3 sm:px-5 sm:py-4 text-left hidden md:table-cell">
                Company
              </th>
              <th className="px-4 py-3 sm:px-5 sm:py-4 text-left">Role</th>
              <th className="px-4 py-3 sm:px-5 sm:py-4 text-left">Status</th>
              <th className="px-4 py-3 sm:px-5 sm:py-4 text-right">Actions</th>
            </tr>
          </thead>

          <tbody>
            {paginated.map((user) => {
              const isAdmin = user.role === "Admin";

              return (
                <tr key={user.id} className="border-t hover:bg-slate-50 transition">
                  <td className="px-4 py-3 sm:px-5 sm:py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-[#418FDE]/20 flex items-center justify-center font-bold text-[#418FDE]">
                        {user.name[0]}
                      </div>
                      <div>
                        <p className="font-medium text-slate-800">{user.name}</p>
                        <p className="text-xs text-slate-500">{user.email}</p>
                      </div>
                    </div>
                  </td>

                  <td className="px-4 py-3 sm:px-5 sm:py-4 text-slate-600 hidden sm:table-cell">
                    @{user.username}
                  </td>
                  <td className="px-4 py-3 sm:px-5 sm:py-4 text-slate-600 hidden md:table-cell">
                    {user.company.name}
                  </td>

                  <td className="px-4 py-3 sm:px-5 sm:py-4">
                    <select
                      value={user.role}
                      onChange={(e) =>
                        updateRole(user.id, e.target.value as User["role"])
                      }
                      className="px-3 py-1 rounded-lg border border-slate-300 text-sm"
                    >
                      {roles.map((r) => (
                        <option key={r}>{r}</option>
                      ))}
                    </select>
                  </td>

                  <td className="px-4 py-3 sm:px-5 sm:py-4">
                    <span className="px-3 py-1 rounded-full text-xs bg-green-100 text-green-700">
                      Active
                    </span>
                  </td>

                  <td className="px-4 py-3 sm:px-5 sm:py-4 text-right space-x-2">
                    <button className="p-2 rounded-lg hover:bg-slate-100">
                      <Eye size={16} />
                    </button>
                    <button className="p-2 rounded-lg hover:bg-slate-100">
                      <Pencil size={16} />
                    </button>
                    <button
                      disabled={isAdmin}
                      className={`p-2 rounded-lg ${
                        isAdmin
                          ? "opacity-30 cursor-not-allowed"
                          : "hover:bg-red-100 text-red-600"
                      }`}
                    >
                      <Trash2 size={16} />
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {filtered.length === 0 && (
        <div className="bg-white rounded-xl p-8 text-center text-slate-500">
          No users found.
        </div>
      )}

      {/* Pagination */}
      <div className="flex justify-center items-center gap-4 mt-4">
        <button
          onClick={() => setPage((p) => Math.max(1, p - 1))}
          disabled={page === 1}
          className={`w-10 h-10 flex items-center justify-center rounded-full border transition ${
            page === 1
              ? "opacity-40 cursor-not-allowed"
              : "hover:bg-[#418FDE]/10 text-[#418FDE]"
          }`}
        >
          ◀
        </button>

        <span className="text-sm text-slate-600 font-medium">
          Page {page} of {totalPages}
        </span>

        <button
          onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
          disabled={page === totalPages}
          className={`w-10 h-10 flex items-center justify-center rounded-full border transition ${
            page === totalPages
              ? "opacity-40 cursor-not-allowed"
              : "hover:bg-[#418FDE]/10 text-[#418FDE]"
          }`}
        >
          ▶
        </button>
      </div>
    </div>
  );
}
