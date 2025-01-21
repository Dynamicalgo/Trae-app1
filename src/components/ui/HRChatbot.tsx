import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Bot, Send } from "lucide-react";
import { useState } from "react";

export default function HRChatbot() {
  const [message, setMessage] = useState("");

  return (
    <Card className="p-4">
      <div className="flex items-center gap-2 mb-4">
        <Bot className="h-5 w-5 text-primary" />
        <h3 className="font-medium">HR Assistant Bot</h3>
      </div>
      
      <div className="h-[300px] border rounded-lg mb-4 p-4 overflow-y-auto">
        <p className="text-sm text-muted-foreground">
          Hello! I'm your HR assistant. How can I help you today?
        </p>
      </div>

      <div className="flex gap-2">
        <Input
          placeholder="Type your message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <Button size="icon">
          <Send className="h-4 w-4" />
        </Button>
      </div>
    </Card>
  );
}