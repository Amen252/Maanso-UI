import { Outlet, createRootRoute } from "@tanstack/react-router";
import NavBar from "@/Components/Navbar";
import Footer from "@/Components/Footer"; // Make sure "Footer" matches the actual filename (case-sensitive)

export const Route = createRootRoute({
  component: () => (
    <div className="flex flex-col min-h-screen bg-gradient-to-r from-[#EAF6FF] via-[#FFFFFF] to-[#EAF6FF]">
      {/* Navbar always at top */}
      <NavBar />

      {/* Page content in between */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Footer always at bottom */}
      <Footer />
    </div>
  ),
});
