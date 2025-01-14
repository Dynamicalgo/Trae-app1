import { Card } from "@/components/ui/card";
import { 
  Briefcase, 
  Users, 
  Video,
  TrendingUp 
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { ChartContainer, ChartTooltip, ChartTooltipContent, ChartLegend, ChartLegendContent } from "@/components/ui/chart";
import { Line, LineChart, XAxis, YAxis, CartesianGrid } from "recharts";

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

// Updated sample data for the chart
const chartData = [
  { month: 'Jan', jobs: 8, candidates: 80, interviews: 20, hireRate: 60 },
  { month: 'Feb', jobs: 10, candidates: 100, interviews: 25, hireRate: 62 },
  { month: 'Mar', jobs: 9, candidates: 120, interviews: 28, hireRate: 65 },
  { month: 'Apr', jobs: 11, candidates: 130, interviews: 30, hireRate: 66 },
  { month: 'May', jobs: 12, candidates: 148, interviews: 32, hireRate: 68 },
];

const chartConfig = {
  jobs: {
    label: "Active Jobs",
    theme: {
      light: "#8B5CF6",
      dark: "#A78BFA"
    },
  },
  candidates: {
    label: "Total Candidates",
    theme: {
      light: "#F97316",
      dark: "#FB923C"
    },
  },
  interviews: {
    label: "Pending Interviews",
    theme: {
      light: "#0EA5E9",
      dark: "#38BDF8"
    },
  },
  hireRate: {
    label: "Hire Rate (%)",
    theme: {
      light: "#D946EF",
      dark: "#E879F9"
    },
  },
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
        <h2 className="text-lg font-semibold mb-6">Recruitment Metrics Overview</h2>
        <div className="h-[400px]">
          <ChartContainer config={chartConfig}>
            <LineChart 
              data={chartData} 
              margin={{ top: 20, right: 20, bottom: 40, left: 40 }}
            >
              <CartesianGrid 
                strokeDasharray="3 3" 
                stroke="#E2E8F0" 
                vertical={false}
              />
              <XAxis 
                dataKey="month" 
                stroke="#64748B"
                fontSize={12}
                tickLine={false}
                axisLine={false}
                dy={10}
                label={{ 
                  value: 'Months', 
                  position: 'bottom',
                  offset: 20,
                  style: { fill: '#64748B' }
                }}
              />
              <YAxis
                stroke="#64748B"
                fontSize={12}
                tickLine={false}
                axisLine={false}
                dx={-10}
                label={{ 
                  value: 'Count / Percentage', 
                  angle: -90, 
                  position: 'left',
                  offset: 0,
                  style: { fill: '#64748B' }
                }}
              />
              <ChartTooltip
                content={({ active, payload }) => {
                  if (!active || !payload) return null;
                  return <ChartTooltipContent payload={payload} />;
                }}
              />
              <ChartLegend 
                content={({ payload }) => (
                  <ChartLegendContent payload={payload} />
                )}
              />
              <Line
                type="monotone"
                dataKey="jobs"
                strokeWidth={2}
                dot={{ r: 4 }}
                activeDot={{ r: 6 }}
              />
              <Line
                type="monotone"
                dataKey="candidates"
                strokeWidth={2}
                dot={{ r: 4 }}
                activeDot={{ r: 6 }}
              />
              <Line
                type="monotone"
                dataKey="interviews"
                strokeWidth={2}
                dot={{ r: 4 }}
                activeDot={{ r: 6 }}
              />
              <Line
                type="monotone"
                dataKey="hireRate"
                strokeWidth={2}
                dot={{ r: 4 }}
                activeDot={{ r: 6 }}
              />
            </LineChart>
          </ChartContainer>
        </div>
      </Card>
    </div>
  );
}
