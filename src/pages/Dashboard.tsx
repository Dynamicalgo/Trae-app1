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
  ChartTooltipContent, 
  ChartLegend, 
  ChartLegendContent 
} from "@/components/ui/chart";
import { 
  Line, 
  LineChart, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  ResponsiveContainer, 
  ReferenceLine 
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
      light: "#4F46E5",
      dark: "#6366F1"
    },
  },
  candidates: {
    label: "Total Candidates",
    theme: {
      light: "#EC4899",
      dark: "#F472B6"
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
      light: "#10B981",
      dark: "#34D399"
    },
  },
};

export default function Dashboard() {
  const navigate = useNavigate();

  // Find max values for reference lines
  const maxCandidates = Math.max(...chartData.map(d => d.candidates));
  const maxHireRate = Math.max(...chartData.map(d => d.hireRate));

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
        <div className="flex flex-col space-y-3">
          <h2 className="text-lg font-semibold">Recruitment Metrics Overview</h2>
          <ChartContainer config={chartConfig}>
            <div className="flex justify-center">
              <ChartLegend 
                content={({ payload }) => (
                  <ChartLegendContent 
                    payload={payload} 
                    className="mb-4"
                  />
                )}
              />
            </div>
            <div className="h-[400px] mt-4">
              <LineChart 
                data={chartData} 
                margin={{ top: 20, right: 30, bottom: 40, left: 50 }}
              >
                <CartesianGrid 
                  strokeDasharray="3 3" 
                  stroke="#E2E8F0" 
                  opacity={0.4}
                  horizontal={true}
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
                    offset: 25,
                    style: { 
                      fill: '#64748B',
                      fontSize: 14,
                      fontWeight: 500
                    }
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
                    position: 'insideLeft',
                    offset: -35,
                    style: { 
                      fill: '#64748B',
                      fontSize: 14,
                      fontWeight: 500
                    }
                  }}
                />
                <ReferenceLine 
                  y={maxCandidates} 
                  stroke="#EC4899" 
                  strokeDasharray="3 3" 
                  opacity={0.3}
                />
                <ReferenceLine 
                  y={maxHireRate} 
                  stroke="#10B981" 
                  strokeDasharray="3 3" 
                  opacity={0.3}
                />
                <ChartTooltip
                  content={({ active, payload }) => {
                    if (!active || !payload) return null;
                    return (
                      <ChartTooltipContent 
                        payload={payload}
                        className="shadow-lg border-primary/10"
                      />
                    );
                  }}
                />
                <Line
                  type="monotone"
                  dataKey="jobs"
                  strokeWidth={2.5}
                  dot={{ r: 4, strokeWidth: 2 }}
                  activeDot={{ r: 6, strokeWidth: 2 }}
                />
                <Line
                  type="monotone"
                  dataKey="candidates"
                  strokeWidth={2.5}
                  dot={{ r: 4, strokeWidth: 2 }}
                  activeDot={{ r: 6, strokeWidth: 2 }}
                />
                <Line
                  type="monotone"
                  dataKey="interviews"
                  strokeWidth={2.5}
                  dot={{ r: 4, strokeWidth: 2 }}
                  activeDot={{ r: 6, strokeWidth: 2 }}
                />
                <Line
                  type="monotone"
                  dataKey="hireRate"
                  strokeWidth={2.5}
                  dot={{ r: 4, strokeWidth: 2 }}
                  activeDot={{ r: 6, strokeWidth: 2 }}
                />
              </LineChart>
            </div>
          </ChartContainer>
        </div>
      </Card>
    </div>
  );
}
