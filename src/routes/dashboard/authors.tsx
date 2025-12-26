import { useState } from "react";
import { Eye, Pencil, Trash2 } from "lucide-react";

interface Author {
  id: number;
  name: string;
  email: string;
  poems: number;
  status: "Active" | "Inactive";
}

const sampleAuthors: Author[] = [
  { id: 1, name: "Abdirahman Hadraawi", email: "hadraawi@maanso.so", poems: 45, status: "Active" },
  { id: 2, name: "Timacadde", email: "timacadde@maanso.so", poems: 30, status: "Active" },
  { id: 3, name: "Gaarriye", email: "gaarriye@maanso.so", poems: 52, status: "Active" },
  { id: 4, name: "Qaasim", email: "qasim@maanso.so", poems: 18, status: "Inactive" },
  { id: 5, name: "Warsan Shire", email: "warsan@maanso.so", poems: 26, status: "Active" },
];

export default function DashboardAuthors() {
  const [authors, setAuthors] = useState(sampleAuthors);
  const [search, setSearch] = useState("");

  const filtered = authors.filter(
    (a) =>
      a.name.toLowerCase().includes(search.toLowerCase()) ||
      a.email.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-[#418FDE]">Authors</h1>
          <p className="text-slate-500">Manage poets and contributors</p>
        </div>

        <input
          type="text"
          placeholder="Search authors..."
          className="px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-[#418FDE] outline-none w-full sm:w-64"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {filtered.map((author) => (
          <div
            key={author.id}
            className="bg-white rounded-2xl shadow hover:shadow-lg transition p-5 flex flex-col justify-between"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[#418FDE]/20 flex items-center justify-center font-bold text-[#418FDE] text-lg">
                {author.name[0]}
              </div>

              <div>
                <p className="font-semibold text-slate-800">{author.name}</p>
                <p className="text-xs text-slate-500">{author.email}</p>
              </div>
            </div>

            <div className="mt-4 flex justify-between text-sm text-slate-600">
              <span>Poems: <b>{author.poems}</b></span>
              <span
                className={`px-3 py-1 rounded-full text-xs ${
                  author.status === "Active"
                    ? "bg-green-100 text-green-700"
                    : "bg-slate-200 text-slate-600"
                }`}
              >
                {author.status}
              </span>
            </div>

            {/* Actions */}
            <div className="mt-5 flex justify-end gap-2">
              <button className="p-2 rounded-lg hover:bg-slate-100">
                <Eye size={16} />
              </button>
              <button className="p-2 rounded-lg hover:bg-slate-100">
                <Pencil size={16} />
              </button>
              <button
                onClick={() =>
                  setAuthors((prev) => prev.filter((a) => a.id !== author.id))
                }
                className="p-2 rounded-lg hover:bg-red-100 text-red-600"
              >
                <Trash2 size={16} />
              </button>
            </div>
          </div>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="text-center text-slate-500">No authors found.</p>
      )}
    </div>
  );
}
