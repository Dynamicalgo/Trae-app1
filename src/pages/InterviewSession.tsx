import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Edit, Pause, Play, Square, Send, Circle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

type InterviewStatus = "ongoing" | "paused" | "ended";

interface InterviewSessionData {
  id: string;
  title: string;
  status: InterviewStatus;
  url: string;
}

const sessions = [
  {
    id: "session-1",
    title: "Software Developer Round 1 Interview",
    status: "ongoing" as InterviewStatus,
    url: "https://interview.heyrocket.ai/session/123456",
  },
  {
    id: "session-2",
    title: "Software Developer Round 2 Interview",
    status: "paused" as InterviewStatus,
    url: "https://interview.heyrocket.ai/session/789012",
  },
];

export default function InterviewSession() {
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleStatusChange = (sessionId: string, action: "pause" | "resume" | "stop") => {
    let message = "";
    switch (action) {
      case "pause":
        message = "Interview session paused";
        break;
      case "resume":
        message = "Interview session resumed";
        break;
      case "stop":
        message = "Interview session ended";
        break;
    }

    toast({
      title: "Status Updated",
      description: message,
    });
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Interview Sessions</h1>
        <p className="text-muted-foreground">Manage your interview sessions</p>
      </div>

      <div className="grid gap-6">
        {sessions.map((session) => (
          <Card key={session.id} className="p-6 space-y-6">
            <div className="space-y-4">
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-xl font-semibold">{session.title}</h2>
                  <p className="text-sm text-muted-foreground mt-1">
                    Status: <span className="capitalize">{session.status}</span>
                    {session.status === "ongoing" && (
                      <Circle className="h-3 w-3 inline ml-2 text-green-500 fill-green-500" />
                    )}
                    {session.status === "paused" && (
                      <Circle className="h-3 w-3 inline ml-2 text-orange-500 fill-orange-500" />
                    )}
                  </p>
                </div>
                <Button variant="outline" size="icon">
                  <Edit className="h-4 w-4" />
                </Button>
              </div>

              <div className="space-y-2">
                <p className="text-sm font-medium">Interview URL</p>
                <p className="text-sm text-muted-foreground break-all">{session.url}</p>
              </div>

              <div className="flex gap-3">
                {session.status === "ongoing" && (
                  <>
                    <Button 
                      variant="outline" 
                      onClick={() => handleStatusChange(session.id, "pause")}
                    >
                      <Pause className="h-4 w-4 mr-2" />
                      Pause Interview
                    </Button>
                    <Button 
                      variant="outline" 
                      onClick={() => handleStatusChange(session.id, "stop")}
                    >
                      <Square className="h-4 w-4 mr-2" />
                      Stop Interview
                    </Button>
                    <Button 
                      variant="default"
                      onClick={() => navigate('/send-invite')}
                    >
                      <Send className="h-4 w-4 mr-2" />
                      Send Invite
                    </Button>
                  </>
                )}
                {session.status === "paused" && (
                  <Button 
                    variant="outline" 
                    onClick={() => handleStatusChange(session.id, "resume")}
                  >
                    <Play className="h-4 w-4 mr-2" />
                    Resume Interview
                  </Button>
                )}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}