import { Card } from "@/components/ui/card";

export default function CreateInterview() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">
          Create Interview Session
        </h1>
        <p className="text-muted-foreground">
          Set up and schedule interview sessions for shortlisted candidates
        </p>
      </div>

      <Card className="p-6">
        <p className="text-muted-foreground">Interview creation form will be implemented here</p>
      </Card>
    </div>
  );
}