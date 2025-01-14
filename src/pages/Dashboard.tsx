import { Card } from "@/components/ui/card";
import { 
  Briefcase, 
  Users, 
  Video,
  TrendingUp 
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { 
  ChartContainer, 
  ChartTooltip, 
  ChartTooltipContent 
} from "@/components/ui/chart";
import { 
  Line, 
  LineChart, 
  XAxis, 
  YAxis, 
  CartesianGrid,
  ResponsiveContainer
} from "recharts";

const stats = [
  {
    title: "Active Jobs",
    value: "12",
    icon: Briefcase,
    href: "/jobs",
    trend: "+2 this week",
  },
  {
    title: "Total Candidates",
    value: "148",
    icon: Users,
    trend: "+28 this week",
  },
  {
    title: "Pending Interviews",
    value: "32",
    icon: Video,
    trend: "+5 today",
  },
  {
    title: "Hire Rate",
    value: "68%",
    icon: TrendingUp,
    trend: "+2% this month",
  },
];

const chartData = [
  { month: 'Jan', value: 30 },
  { month: 'Feb', value: 45 },
  { month: 'Mar', value: 38 },
  { month: 'Apr', value: 50 },
  { month: 'May', value: 65 },
];

const chartConfig = {
  primary: {
    label: "Monthly Progress",
    theme: {
      light: "#1E40AF",
      dark: "#3B82F6"
    },
  }
};

export default function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Welcome back</h1>
        <p className="text-muted-foreground">
          Here's an overview of your recruitment activities
        </p>
      </div>
      
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card 
            key={stat.title} 
            className={`p-6 ${stat.href ? 'cursor-pointer hover:bg-gray-50 transition-colors' : ''}`}
            onClick={() => stat.href && navigate(stat.href)}
          >
            <div className="flex items-center space-x-4">
              <div className="p-2 bg-primary/10 rounded-full">
                <stat.icon className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">
                  {stat.title}
                </p>
                <h2 className="text-2xl font-bold">{stat.value}</h2>
                <p className="text-xs text-muted-foreground mt-1">
                  {stat.trend}
                </p>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <Card className="p-6">
        <div className="space-y-4">
          <h2 className="text-lg font-semibold">Monthly Progress</h2>
          <div className="h-[300px] w-full">
            <ChartContainer config={chartConfig}>
              <LineChart 
                data={chartData}
                margin={{ top: 5, right: 5, left: 5, bottom: 5 }}
              >
                <CartesianGrid 
                  strokeDasharray="3 3" 
                  vertical={false} 
                  stroke="#e5e7eb"
                />
                <XAxis 
                  dataKey="month"
                  stroke="#6b7280"
                  tickLine={false}
                  axisLine={false}
                  dy={10}
                />
                <YAxis
                  stroke="#6b7280"
                  tickLine={false}
                  axisLine={false}
                  dx={-10}
                />
                <ChartTooltip
                  content={({ active, payload }) => {
                    if (!active || !payload?.length) return null;
                    return (
                      <ChartTooltipContent 
                        payload={payload}
                      />
                    );
                  }}
                />
                <Line
                  type="monotone"
                  dataKey="value"
                  strokeWidth={2}
                  dot={{ r: 4, strokeWidth: 2 }}
                  activeDot={{ r: 6, strokeWidth: 2 }}
                />
              </LineChart>
            </ChartContainer>
          </div>
        </div>
      </Card>
    </div>
  );
}