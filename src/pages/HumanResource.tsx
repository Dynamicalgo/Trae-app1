import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, FileText, Users, DollarSign, Clock } from "lucide-react";
import { useNavigate } from "react-router-dom";

const hrStats = {
  leaveTaken: {
    total: 45,
    pending: 12,
    details: "12 pending approvals"
  },
  medicalLeave: {
    total: 8,
    thisWeek: 3,
    details: "3 this week"
  },
  meetings: {
    total: 24,
    tomorrow: 5,
    details: "5 tomorrow"
  },
  claims: {
    total: 15,
    pending: 2450,
    details: "$2,450 pending"
  },
  payroll: {
    nextPayday: "Jan 25, 2024",
    totalEmployees: 148
  }
};

export default function HumanResource() {
  const navigate = useNavigate();

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Human Resource</h1>
        <p className="text-muted-foreground">
          Manage employee records, leaves, and payroll
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card 
          className="p-6 cursor-pointer hover:bg-gray-50 transition-colors"
          onClick={() => navigate('/human-resource/payroll')}
        >
          <div className="flex items-center gap-4">
            <DollarSign className="h-8 w-8 text-primary" />
            <div>
              <h3 className="font-semibold">Payroll</h3>
              <p className="text-sm text-muted-foreground">Salary Management</p>
            </div>
          </div>
          <div className="mt-4 space-y-2">
            <div className="flex justify-between">
              <span>Next Payday</span>
              <span className="font-medium">{hrStats.payroll.nextPayday}</span>
            </div>
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>Total Employees</span>
              <span>{hrStats.payroll.totalEmployees}</span>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center gap-4">
            <Calendar className="h-8 w-8 text-primary" />
            <div>
              <h3 className="font-semibold">Leave Management</h3>
              <p className="text-sm text-muted-foreground">Annual & Medical Leave</p>
            </div>
          </div>
          <div className="mt-4 space-y-2">
            <div className="flex justify-between">
              <span>Leave Taken</span>
              <span className="font-medium">{hrStats.leaveTaken.total} days</span>
            </div>
            <div className="flex justify-between">
              <span>Medical Leave</span>
              <span className="font-medium">{hrStats.medicalLeave.total} days</span>
            </div>
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>Pending Approvals</span>
              <span>{hrStats.leaveTaken.pending}</span>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center gap-4">
            <Clock className="h-8 w-8 text-primary" />
            <div>
              <h3 className="font-semibold">Meetings</h3>
              <p className="text-sm text-muted-foreground">Scheduled Meetings</p>
            </div>
          </div>
          <div className="mt-4 space-y-2">
            <div className="flex justify-between">
              <span>Total Meetings</span>
              <span className="font-medium">{hrStats.meetings.total}</span>
            </div>
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>Tomorrow</span>
              <span>{hrStats.meetings.tomorrow} meetings</span>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center gap-4">
            <FileText className="h-8 w-8 text-primary" />
            <div>
              <h3 className="font-semibold">Claims</h3>
              <p className="text-sm text-muted-foreground">Expense Claims</p>
            </div>
          </div>
          <div className="mt-4 space-y-2">
            <div className="flex justify-between">
              <span>Total Claims</span>
              <span className="font-medium">{hrStats.claims.total}</span>
            </div>
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>Pending Amount</span>
              <span>${hrStats.claims.pending}</span>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}