import { Routes, Route } from "react-router-dom";

import PublicLayout from "./Components/layout/PublicLayout";
import DashboardLayout from "./Components/layout/DashboardLayout";

import Home from "./routes/Home";
import Contact from "./routes/contact/index";
import Poets from "./routes/poets/[poetsId]";
import Poems from "./routes/poems/index";
import DashboardHome from "./routes/dashboard";
import DashboardPoems from "./routes/dashboard/poems";
import DashboardAuthors from "./routes/dashboard/authors";
import DashboardUsers from "./routes/dashboard/users";

export default function App() {
  return (
    <Routes>
      {/* Public site */}
      <Route element={<PublicLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/poets" element={<Poets />} />
        <Route path="/poems" element={<Poems />} />
      </Route>

      {/* Dashboard */}
      <Route path="/dashboard" element={<DashboardLayout />}>
        <Route index element={<DashboardHome />} />
        <Route path="poems" element={<DashboardPoems />} />
        <Route path="authors" element={<DashboardAuthors />} />
        <Route path="users" element={<DashboardUsers  />} />
      </Route>
    </Routes>
  );
}
