import { Card } from "@/components/ui/card";
import { 
  Briefcase, 
  Users, 
  Video,
  TrendingUp,
  Clock,
  HeartPulse,
  UserPlus,
  Receipt,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import HRChatbot from "@/components/HRChatbot";  // Updated import path

const recruitmentStats = [
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

const hrStats = [
  {
    title: "Payroll",
    value: "$148K",
    icon: UserPlus,
    href: "/human-resource/payroll",
    trend: "Next payday in 5 days",
  },
  {
    title: "Medical Leave",
    value: "8",
    icon: HeartPulse,
    trend: "3 this week",
  },
  {
    title: "Leave Taken",
    value: "45",
    icon: Clock,
    trend: "12 pending approvals",
  },
  {
    title: "Claims & Reimbursement",
    value: "15",
    icon: Receipt,
    trend: "$2,450 pending",
  },
];

export default function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Welcome back</h1>
        <p className="text-muted-foreground">
          Here's an overview of your recruitment and HR activities
        </p>
      </div>
      
      <div className="space-y-6">
        <div>
          <h2 className="text-lg font-semibold mb-4">Recruitment</h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {recruitmentStats.map((stat) => (
              <Card 
                key={stat.title} 
                className={`p-6 transition-transform hover:scale-105 cursor-pointer hover:bg-gray-50`}
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
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-4">Human Resource</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {hrStats.map((stat) => (
              <Card 
                key={stat.title} 
                className="p-6 transition-transform hover:scale-105 cursor-pointer hover:bg-gray-50"
                onClick={() => {
                  console.log('Clicked:', stat.href);
                  stat.href && navigate(stat.href);
                }}
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
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-4">HR Assistant</h2>
          <HRChatbot />
        </div>
      </div>
    </div>
  );
}