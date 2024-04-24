import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  {
    name: "S",
    Gastos: 800,
    Renda: 1000,
  },
  {
    name: "T",
    Gastos: 1900,
    Renda: 2100,
  },
  {
    name: "Q",
    Gastos: 2200,
    Renda: 900,
  },
  {
    name: "Q",
    Gastos: 2600,
    Renda: 1700,
  },
  {
    name: "S",
    Gastos: 2800,
    Renda: 1550,
  },
  {
    name: "S",
    Gastos: 1000,
    Renda: 1750,
  },
  {
    name: "D",
    Gastos: 2500,
    Renda: 1300,
  },
];

export default function Chart() {
  return (
    <div className="h-[22rem] bg-white rounded-sm flex flex-col flex-1">
      <div className="w-full h-full mt-3 flex-1 text-xs">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            width={300}
            height={250}
            data={data}
            margin={{ top: 20, right: 20, bottom: 20, left: -20 }}
          >
            <Legend
              iconType="circle"
              verticalAlign="top"
              align="center"
              margin={{
                top: 0,
                right: 0,
                bottom: 30,
                left: 0,
              }}
            />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="Gastos" fill="#81b398" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
