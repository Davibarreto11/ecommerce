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
    name: "Jan",
    Expenses: 800,
    Income: 1000,
  },
  {
    name: "Feb",
    Expenses: 1900,
    Income: 2100,
  },
  {
    name: "Mar",
    Expenses: 2200,
    Income: 900,
  },
  {
    name: "Apr",
    Expenses: 2600,
    Income: 1700,
  },
  {
    name: "May",
    Expenses: 2800,
    Income: 1550,
  },
  {
    name: "Jun",
    Expenses: 1000,
    Income: 1750,
  },
  {
    name: "July",
    Expenses: 2500,
    Income: 1300,
  },
  {
    name: "Aug",
    Expenses: 2000,
    Income: 1450,
  },
  {
    name: "Oct",
    Expenses: 1200,
    Income: 1800,
  },
  {
    name: "Nov",
    Expenses: 3100,
    Income: 1200,
  },
  {
    name: "Dez",
    Expenses: 2300,
    Income: 700,
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
            <CartesianGrid vertical={false}  />
            <Tooltip />
            <Area
              // type="monotone"
              dataKey="Income"
              stroke="#8884d8"
              fillOpacity={1}
              fill="url(#colorUv)"
            />
            <Area
              // type="monotone"
              dataKey="Expenses"
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
