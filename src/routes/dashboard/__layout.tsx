import { Outlet } from "react-router-dom";
import Sidebar from "@/Components/layout/Sidebar";

export default function DashboardLayout() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 p-8 bg-slate-50">
        <Outlet />
      </main>
    </div>
  );
}
