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
    name: "M",
    Expenses: 800,
    Income: 1000,
  },
  {
    name: "T",
    Expenses: 1900,
    Income: 2100,
  },
  {
    name: "W",
    Expenses: 2200,
    Income: 900,
  },
  {
    name: "T",
    Expenses: 2600,
    Income: 1700,
  },
  {
    name: "F",
    Expenses: 2800,
    Income: 1550,
  },
  {
    name: "S",
    Expenses: 1000,
    Income: 1750,
  },
  {
    name: "S",
    Expenses: 2500,
    Income: 1300,
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
            <Legend iconType="circle" verticalAlign="top" align="center" margin={{
              top: 0, right: 0, bottom: 30, left: 0 
            }}/>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="Expenses" fill="#81b398" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
