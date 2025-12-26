import { useEffect, useState } from "react";
import { Users, Feather, BookOpen } from "lucide-react";

export default function DashboardAuthors() {
  const [usersCount, setUsersCount] = useState(0);

  const authorsCount = 4;
  const poemsCount = 312;

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((r) => r.json())
      .then((data) => setUsersCount(data.length));
  }, []);

  return (
    <div className="space-y-8">
      <h1 className="text-lg font-semibold text-slate-800">Overview</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <StatCard
          label="Authors"
          value={authorsCount}
          icon={Feather}
          gradient="from-[#418FDE]/30 via-[#7aaeff]/30 to-[#c7ddff]/30"
          iconBg="bg-[#418FDE]/30"
          iconColor="text-[#418FDE]"
        />
        <StatCard
          label="Users"
          value={usersCount}
          icon={Users}
          gradient="from-green-200/40 via-emerald-200/40 to-teal-200/40"
          iconBg="bg-green-200/40"
          iconColor="text-green-600"
        />
        <StatCard
          label="Poems"
          value={poemsCount}
          icon={BookOpen}
          gradient="from-purple-200/40 via-pink-200/40 to-fuchsia-200/40"
          iconBg="bg-purple-200/40"
          iconColor="text-purple-600"
        />
      </div>
    </div>
  );
}

function StatCard({
  label,
  value,
  icon: Icon,
  gradient,
  iconBg,
  iconColor,
}: {
  label: string;
  value: number;
  icon: any;
  gradient: string;
  iconBg: string;
  iconColor: string;
}) {
  return (
    <div
      className={`rounded-3xl bg-gradient-to-br ${gradient} backdrop-blur-xl shadow-sm hover:shadow-lg transition-all duration-300 px-6 py-6 flex items-center gap-5`}
    >
      <div
        className={`w-14 h-14 rounded-2xl ${iconBg} flex items-center justify-center ${iconColor} shadow-inner`}
      >
        <Icon size={24} />
      </div>
      <div>
        <p className="text-sm text-slate-600">{label}</p>
        <p className="text-3xl font-semibold text-slate-900">{value}</p>
      </div>
    </div>
  );
}
