import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Edit, Pause, Play, Square, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

type InterviewStatus = "ongoing" | "paused" | "ended";

interface InterviewSessionData {
  id: string;
  title: string;
  status: InterviewStatus;
  url: string;
}

const sessions = {
  "session-1": {
    id: "session-1",
    title: "Software Developer Round 1 Interview",
    status: "ongoing" as InterviewStatus,
    url: "https://interview.heyrocket.ai/session/123456",
  },
  "session-2": {
    id: "session-2",
    title: "Software Developer Round 2 Interview",
    status: "paused" as InterviewStatus,
    url: "https://interview.heyrocket.ai/session/789012",
  },
};

export default function InterviewSession() {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [selectedSession, setSelectedSession] = useState<string>("");
  const [currentSession, setCurrentSession] = useState<InterviewSessionData | null>(null);

  const handleSessionSelect = (value: string) => {
    setSelectedSession(value);
    setCurrentSession(sessions[value as keyof typeof sessions]);
  };

  const handleStatusChange = (action: "pause" | "resume" | "stop") => {
    if (!currentSession) return;

    let newStatus: InterviewStatus;
    let message = "";

    switch (action) {
      case "pause":
        newStatus = "paused";
        message = "Interview session paused";
        break;
      case "resume":
        newStatus = "ongoing";
        message = "Interview session resumed";
        break;
      case "stop":
        newStatus = "ended";
        message = "Interview session ended";
        break;
    }

    setCurrentSession({ ...currentSession, status: newStatus });
    toast({
      title: "Status Updated",
      description: message,
    });
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Interview Session</h1>
        <p className="text-muted-foreground">Manage your interview sessions</p>
      </div>

      <Select value={selectedSession} onValueChange={handleSessionSelect}>
        <SelectTrigger className="w-full md:w-[300px]">
          <SelectValue placeholder="Select interview session" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="session-1">Software Developer Round 1 Interview</SelectItem>
          <SelectItem value="session-2">Software Developer Round 2 Interview</SelectItem>
        </SelectContent>
      </Select>

      {currentSession && (
        <Card className="p-6 space-y-6">
          <div className="space-y-4">
            <div className="flex justify-between items-start">
              <div>
                <h2 className="text-xl font-semibold">{currentSession.title}</h2>
                <p className="text-sm text-muted-foreground mt-1">
                  Status: <span className="capitalize">{currentSession.status}</span>
                </p>
              </div>
              <Button variant="outline" size="icon">
                <Edit className="h-4 w-4" />
              </Button>
            </div>

            <div className="space-y-2">
              <p className="text-sm font-medium">Interview URL</p>
              <p className="text-sm text-muted-foreground break-all">{currentSession.url}</p>
            </div>

            <div className="flex gap-3">
              {currentSession.status === "ongoing" && (
                <>
                  <Button 
                    variant="outline" 
                    onClick={() => handleStatusChange("pause")}
                  >
                    <Pause className="h-4 w-4 mr-2" />
                    Pause Interview
                  </Button>
                  <Button 
                    variant="outline" 
                    onClick={() => handleStatusChange("stop")}
                  >
                    <Square className="h-4 w-4 mr-2" />
                    Stop Interview
                  </Button>
                </>
              )}
              {currentSession.status === "paused" && (
                <Button 
                  variant="outline" 
                  onClick={() => handleStatusChange("resume")}
                >
                  <Play className="h-4 w-4 mr-2" />
                  Resume Interview
                </Button>
              )}
              <Button onClick={() => navigate("/send-invite")}>
                <Send className="h-4 w-4 mr-2" />
                Send Invite
              </Button>
            </div>
          </div>
        </Card>
      )}
    </div>
  );
}