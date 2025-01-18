import { Card } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";

export function ConversationFlow() {
  return (
    <Card className="p-6 space-y-8">
      <div>
        <h2 className="text-lg font-semibold mb-6">Conversation Flow</h2>
        <p className="text-sm text-muted-foreground mb-8">Design your agent's conversation structure</p>
      </div>

      {/* 1. Conversation Starter */}
      <div className="space-y-4">
        <Label className="text-base font-semibold">1. Conversation Starter</Label>
        <Textarea 
          placeholder="Enter your conversation starter content..."
          className="min-h-[100px]"
        />
        <div className="bg-slate-100 p-3 rounded-md text-sm">Wait for feedback</div>
      </div>

      {/* 2. Opening Questions */}
      <div className="space-y-4">
        <Label className="text-base font-semibold">2. Opening Questions</Label>
        <Textarea 
          placeholder="Enter your opening questions..."
          className="min-h-[100px]"
        />
        <div className="bg-slate-100 p-3 rounded-md text-sm">Wait for feedback</div>
      </div>

      {/* 3. Further Questions */}
      <div className="space-y-4">
        <Label className="text-base font-semibold">3. Further Questions</Label>
        <Textarea 
          placeholder="Enter the description for further questions..."
          className="min-h-[100px]"
        />
        <div className="space-y-4 mt-4">
          <Input placeholder="Question 1" />
          <Input placeholder="Question 2" />
          <Input placeholder="Question 3" />
        </div>
        <div className="bg-slate-100 p-3 rounded-md text-sm">Wait for feedback</div>
      </div>

      {/* 4. Q and A */}
      <div className="space-y-4">
        <Label className="text-base font-semibold">4. Q and A</Label>
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Select knowledge base" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="kb1">Knowledge Base 1</SelectItem>
            <SelectItem value="kb2">Knowledge Base 2</SelectItem>
            <SelectItem value="kb3">Knowledge Base 3</SelectItem>
          </SelectContent>
        </Select>
        <div className="bg-slate-100 p-3 rounded-md text-sm">Wait for feedback</div>
      </div>

      {/* 5. Sum Up Interview */}
      <div className="space-y-4">
        <Label className="text-base font-semibold">5. Sum Up Interview</Label>
        <Textarea 
          placeholder="Enter your interview summary content..."
          className="min-h-[100px]"
        />
        <div className="bg-slate-100 p-3 rounded-md text-sm">Wait for feedback</div>
      </div>

      {/* 6. Closing */}
      <div className="space-y-4">
        <Label className="text-base font-semibold">6. Closing</Label>
        <Textarea 
          placeholder="Enter your closing content..."
          className="min-h-[100px]"
        />
        <div className="bg-slate-100 p-3 rounded-md text-sm">Wait for feedback</div>
      </div>
    </Card>
  );
}