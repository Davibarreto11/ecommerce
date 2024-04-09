import { Cell, Legend, Pie, PieChart, ResponsiveContainer } from "recharts";

const data = [
  {
    name: "Tablet",
    Expenses: 800,
    Income: 1000,
  },
  {
    name: "Mobile",
    Expenses: 1900,
    Income: 2100,
  },
  {
    name: "Desktop",
    Expenses: 2200,
    Income: 900,
  },
  {
    name: "Unknown",
    Expenses: 2600,
    Income: 1700,
  },
];

const COLORS = ["#81b398", "#22c55e", "#15803d", "#14532d"];

export default function Chart() {
  return (
    <div className="h-[22rem] bg-white rounded-sm flex flex-col flex-1">
      <div className="w-full mt-3 flex-1 text-xs">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart width={730} height={250}>
            <Pie
              data={data}
              dataKey="Expenses"
              nameKey="name"
              cx="50%"
              cy="50%"
              innerRadius={100}
              outerRadius={150}
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
              label
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
