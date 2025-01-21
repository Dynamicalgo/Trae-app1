import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Payroll() {
  const navigate = useNavigate();

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Button 
          variant="ghost" 
          size="icon"
          onClick={() => navigate('/human-resource')}
        >
          <ArrowLeft className="h-4 w-4" />
        </Button>
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Payroll</h1>
          <p className="text-muted-foreground">Global payroll on autopilot</p>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card className="p-6">
          <h3 className="text-sm text-muted-foreground mb-2">TOTAL MONTHLY PAYROLL</h3>
          <p className="text-2xl font-semibold">$0</p>
        </Card>

        <Card className="p-6">
          <h3 className="text-sm text-muted-foreground mb-2">TOTAL BONUS GIVEN</h3>
          <p className="text-2xl font-semibold">$0</p>
        </Card>
      </div>

      <div className="flex space-x-4 border-b">
        <Button variant="link" className="text-primary">Monthly pay</Button>
        <Button variant="link" className="text-muted-foreground">Payments</Button>
        <Button variant="link" className="text-muted-foreground">Bonus history</Button>
        <Button variant="link" className="text-muted-foreground">Raise history</Button>
        <Button variant="link" className="text-muted-foreground">Payment method</Button>
      </div>

      <div className="flex items-center justify-center h-64 border rounded-lg bg-muted/10">
        <p className="text-muted-foreground">No subscriptions found!</p>
      </div>
    </div>
  );
}