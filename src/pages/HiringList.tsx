import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export default function HiringList() {
  const navigate = useNavigate();

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Hiring List</h1>
          <p className="text-muted-foreground">
            View and manage your shortlisted candidates for hiring
          </p>
        </div>
        <Button variant="outline" onClick={() => navigate("/interview-result")}>
          Back to Results
        </Button>
      </div>

      <Card className="p-6">
        <p className="text-center text-muted-foreground">
          Selected candidates will appear here
        </p>
      </Card>
    </div>
  );
}