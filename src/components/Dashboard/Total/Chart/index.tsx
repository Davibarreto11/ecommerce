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
    nome: "Jan",
    Gastos: 800,
    Renda: 1000,
  },
  {
    nome: "Feb",
    Gastos: 1900,
    Renda: 2100,
  },
  {
    nome: "Mar",
    Gastos: 2200,
    Renda: 900,
  },
  {
    nome: "Apr",
    Gastos: 2600,
    Renda: 1700,
  },
  {
    nome: "May",
    Gastos: 2800,
    Renda: 1550,
  },
  {
    nome: "Jun",
    Gastos: 1000,
    Renda: 1750,
  },
  {
    nome: "July",
    Gastos: 2500,
    Renda: 1300,
  },
  {
    nome: "Aug",
    Gastos: 2000,
    Renda: 1450,
  },
  {
    nome: "Oct",
    Gastos: 1200,
    Renda: 1800,
  },
  {
    name: "Nov",
    Gastos: 3100,
    Renda: 1200,
  },
  {
    name: "Dez",
    Gastos: 2300,
    Renda: 700,
  },
];

export default function Chart() {
  return (
    <div className="h-[22rem] bg-white p-4 rounded-sm flex flex-col flex-1">
      <div className="w-full mt-3 flex-1 text-xs">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            width={730}
            height={250}
            data={data}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
          >
            <defs>
              <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis dataKey="name" />
            <YAxis />
            <CartesianGrid vertical={false} />
            <Tooltip />
            <Area
              // type="monotone"
              dataKey="Renda"
              stroke="#8884d8"
              fillOpacity={1}
              fill="url(#colorUv)"
            />
            <Area
              // type="monotone"
              dataKey="Gastos"
              stroke="#82ca9d"
              fillOpacity={1}
              fill="url(#colorPv)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
