import { Link, useLocation } from "react-router-dom";
import { LayoutDashboard, BookOpen, Users, Menu, X } from "lucide-react";
import { useState } from "react";

const navItems = [
  { label: "Dashboard", path: "/dashboard", icon: LayoutDashboard },
  { label: "Poems", path: "/dashboard/poems", icon: BookOpen },
  { label: "Authors", path: "/dashboard/authors", icon: Users },
  { label: "Users", path: "/dashboard/users", icon: Users },
];

export default function Sidebar() {
  const { pathname } = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Mobile toggle */}
      <button
        onClick={() => setIsOpen(true)}
        className="md:hidden fixed top-4 left-4 z-50 bg-[#4189DD] text-white p-2 rounded-lg shadow"
      >
        <Menu size={20} />
      </button>

      {/* Overlay (mobile only) */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          bg-[#4189DD] text-white flex flex-col backdrop-blur-xl z-50
          w-64 min-h-screen

          fixed md:relative top-0 left-0
          transform transition-transform duration-300

          ${isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
        `}
      >
        {/* Header */}
        <div className="px-6 py-5 border-b border-white/20 flex justify-between items-center">
          <div>
            <h2 className="text-lg font-semibold tracking-wide">Maanso Admin</h2>
            <p className="text-xs text-white/70">Dashboard</p>
          </div>

          {/* Close on mobile */}
          <button
            onClick={() => setIsOpen(false)}
            className="md:hidden text-white"
          >
            <X size={20} />
          </button>
        </div>

        {/* Nav */}
        <nav className="flex-1 mt-4 px-3 space-y-1">
          {navItems.map((item) => {
            const active = pathname === item.path;
            const Icon = item.icon;

            return (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 ${
                  active
                    ? "bg-white/30 backdrop-blur-md text-white shadow-md"
                    : "text-white/90 hover:bg-white/10"
                }`}
              >
                <Icon size={18} />
                {item.label}
              </Link>
            );
          })}
        </nav>
      </aside>
    </>
  );
}
