import { Link, useNavigate } from "react-router-dom";
import { Home, LogOut } from "lucide-react";

export default function DashboardHeader() {
  const user = JSON.parse(localStorage.getItem("user") || "{}");
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <header className="w-full min-h-16 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 px-4 sm:px-6 py-3 mb-6 bg-white border-b border-slate-200">
      {/* Left */}
      <div className="flex items-center gap-3">
        <Link
          to="/"
          className="flex items-center gap-2 text-slate-600 hover:text-[#4189DD] transition"
        >
          <Home size={18} />
          <span className="hidden sm:inline text-sm font-medium">
            Back to site
          </span>
        </Link>

        <div className="hidden sm:block h-6 w-px bg-slate-300" />

        <div>
          <h1 className="text-base sm:text-lg font-semibold text-slate-800">
            Dashboard
          </h1>
          <p className="hidden sm:block text-xs text-slate-500">
            Welcome back
          </p>
        </div>
      </div>

      {/* Right */}
      <div className="flex items-center justify-between sm:justify-end gap-3">
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-full bg-[#4189DD]/20 flex items-center justify-center font-bold text-[#4189DD]">
            {user?.name?.[0] || "A"}
          </div>
          <div className="hidden sm:block text-right leading-tight">
            <p className="text-sm font-medium text-slate-800">
              {user?.name || "Admin"}
            </p>
            <p className="text-xs text-slate-500">
              {user?.email || "admin@maanso.so"}
            </p>
          </div>
        </div>

        <button
          onClick={handleLogout}
          className="px-3 py-2 sm:px-4 rounded-lg border border-[#4189DD] text-[#4189DD] hover:bg-[#4189DD] hover:text-white transition flex items-center gap-2"
        >
          <LogOut size={16} />
          <span className="hidden sm:inline">Logout</span>
        </button>
      </div>
    </header>
  );
}
