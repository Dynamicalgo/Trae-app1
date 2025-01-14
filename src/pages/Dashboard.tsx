import { Card } from "@/components/ui/card";
import { 
  Briefcase, 
  Users, 
  Video,
  TrendingUp 
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { 
  Line, 
  LineChart, 
  XAxis, 
  YAxis, 
  CartesianGrid,
  ResponsiveContainer,
  Legend,
  Tooltip
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
  {
    month: "Jan",
    activeJobs: 80,
    totalCandidates: 10,
    pendingInterviews: 5,
    hireRate: 2
  },
  {
    month: "Feb",
    activeJobs: 90,
    totalCandidates: 15,
    pendingInterviews: 7,
    hireRate: 3
  },
  {
    month: "Mar",
    activeJobs: 100,
    totalCandidates: 20,
    pendingInterviews: 9,
    hireRate: 4
  },
  {
    month: "Apr",
    activeJobs: 120,
    totalCandidates: 25,
    pendingInterviews: 12,
    hireRate: 5
  },
  {
    month: "May",
    activeJobs: 140,
    totalCandidates: 30,
    pendingInterviews: 15,
    hireRate: 6
  }
];

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
          <h2 className="text-lg font-semibold">Recruitment Metrics Overview</h2>
          <div className="h-[400px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart 
                data={chartData}
                margin={{ top: 20, right: 30, left: 10, bottom: 20 }}
              >
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis 
                  dataKey="month" 
                  stroke="#6b7280"
                  tickLine={false}
                  axisLine={false}
                />
                <YAxis
                  yAxisId="left"
                  stroke="#6b7280"
                  tickLine={false}
                  axisLine={false}
                  label={{ value: 'Counts', angle: -90, position: 'insideLeft' }}
                />
                <YAxis
                  yAxisId="right"
                  orientation="right"
                  stroke="#6b7280"
                  tickLine={false}
                  axisLine={false}
                  label={{ value: 'Percentage', angle: 90, position: 'insideRight' }}
                />
                <Tooltip />
                <Legend />
                <Line
                  yAxisId="left"
                  type="monotone"
                  dataKey="activeJobs"
                  stroke="#1E40AF"
                  strokeWidth={2}
                  dot={{ r: 4 }}
                  name="Active Jobs"
                />
                <Line
                  yAxisId="left"
                  type="monotone"
                  dataKey="totalCandidates"
                  stroke="#10B981"
                  strokeWidth={2}
                  dot={{ r: 4 }}
                  name="Total Candidates"
                />
                <Line
                  yAxisId="left"
                  type="monotone"
                  dataKey="pendingInterviews"
                  stroke="#F59E0B"
                  strokeWidth={2}
                  dot={{ r: 4 }}
                  name="Pending Interviews"
                />
                <Line
                  yAxisId="right"
                  type="monotone"
                  dataKey="hireRate"
                  stroke="#EF4444"
                  strokeWidth={2}
                  dot={{ r: 4 }}
                  name="Hire Rate (%)"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </Card>
    </div>
  );
}