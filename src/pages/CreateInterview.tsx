import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { ChevronDown, Globe, Languages, MessageSquare, Mic, Phone, PieChart, Plus } from "lucide-react";
import { RetellWebClient } from "retell-client-js-sdk";
import { useToast } from "@/components/ui/use-toast";

const AGENT_ID = "agent_98e7f1d1c951078b86a23f3ddb";

export default function CreateInterview() {
  const navigate = useNavigate();
  const { toast } = useToast();
  const form = useForm({
    defaultValues: {
      globalPrompt: "",
      language: "English",
      voice: "Grace",
      model: "GPT-4",
      knowledgeBase: null as File | null,
    },
  });

  const startCall = async () => {
    try {
      const retellClient = new RetellWebClient();
      
      // Create the access token directly using the Retell API
      const response = await fetch('https://api.retellai.com/sdk/create-web-call', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer key_0e128c69a2904487392b3af845f5'
        },
        body: JSON.stringify({
          agentId: AGENT_ID,
          // Optional configurations
          userProperties: {
            userName: "User",
          }
        })
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const { accessToken } = await response.json();

      // Start the call with Retell
      await retellClient.startCall({
        accessToken,
        sampleRate: 24000,
        captureDeviceId: "default",
        playbackDeviceId: "default",
        emitRawAudioSamples: false,
      });

      // Set up event listeners
      retellClient.on("call_started", () => {
        toast({
          title: "Call Started",
          description: "You are now connected to the AI agent",
        });
      });

      retellClient.on("call_ended", () => {
        toast({
          title: "Call Ended",
          description: "The call has been completed",
        });
      });

      retellClient.on("error", (error) => {
        console.error("An error occurred:", error);
        toast({
          title: "Error",
          description: "An error occurred during the call",
          variant: "destructive",
        });
      });

    } catch (error) {
      console.error("Failed to start call:", error);
      toast({
        title: "Error",
        description: "Failed to start the call",
        variant: "destructive",
      });
    }
  };

  const onSubmit = (data: any) => {
    console.log(data);
    navigate("/send-invite");
  };

  return (
    <div className="flex gap-6 h-[calc(100vh-6rem)]">
      {/* Left Column - Conversation Flow */}
      <div className="w-1/2 bg-background rounded-lg border">
        <div className="p-4 border-b">
          <h2 className="text-lg font-semibold">Conversation Flow</h2>
          <p className="text-sm text-muted-foreground">Design your agent's conversation flow</p>
        </div>
        <div className="p-6">
          <div className="text-center text-muted-foreground">
            Configure your agent's settings on the right and use the Test button to try out the conversation.
          </div>
        </div>
      </div>

      {/* Right Column - Settings */}
      <div className="w-1/2 overflow-y-auto space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">Agent Settings</h1>
            <p className="text-muted-foreground">Configure your AI interviewer settings and behavior</p>
          </div>
          <Button variant="outline" onClick={startCall}>Test</Button>
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            {/* Voice & Language Section */}
            <Card className="p-6">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <Languages className="h-5 w-5" />
                  <h2 className="text-lg font-semibold">Voice & Language</h2>
                </div>
                <ChevronDown className="h-5 w-5" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="language"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Language</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="voice"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Voice</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>
            </Card>

            {/* Global Prompt Section */}
            <Card className="p-6">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <Globe className="h-5 w-5" />
                  <h2 className="text-lg font-semibold">Global Prompt</h2>
                </div>
                <ChevronDown className="h-5 w-5" />
              </div>
              <FormField
                control={form.control}
                name="globalPrompt"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Textarea 
                        placeholder="## Task overview ##&#10;You are calling to interview a candidate for a job.&#10;&#10;## Response Guideline ##&#10;Adapt and Guess: Try to understand transcripts...&#10;Stay in Character: Keep conversations within your role's scope..."
                        className="min-h-[200px]"
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
            </Card>

            {/* Knowledge Base Section */}
            <Card className="p-6">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <MessageSquare className="h-5 w-5" />
                  <h2 className="text-lg font-semibold">Knowledge Base</h2>
                </div>
                <ChevronDown className="h-5 w-5" />
              </div>
              <FormField
                control={form.control}
                name="knowledgeBase"
                render={({ field: { value, onChange, ...field } }) => (
                  <FormItem>
                    <FormControl>
                      <div className="flex flex-col items-center justify-center border-2 border-dashed rounded-lg p-6 text-center">
                        <p className="text-sm text-muted-foreground mb-2">
                          Add knowledge base to provide context to the agent.
                        </p>
                        <Button type="button" variant="outline" onClick={() => document.getElementById('file-upload')?.click()}>
                          <Plus className="h-4 w-4 mr-2" />
                          Add
                        </Button>
                        <input
                          id="file-upload"
                          type="file"
                          className="hidden"
                          accept=".pdf,.doc,.docx"
                          onChange={(e) => onChange(e.target.files?.[0] || null)}
                          {...field}
                        />
                      </div>
                    </FormControl>
                  </FormItem>
                )}
              />
            </Card>

            {/* Additional Settings Sections */}
            <Card className="p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Mic className="h-5 w-5" />
                  <h2 className="text-lg font-semibold">Speech Settings</h2>
                </div>
                <ChevronDown className="h-5 w-5" />
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Phone className="h-5 w-5" />
                  <h2 className="text-lg font-semibold">Call Settings</h2>
                </div>
                <ChevronDown className="h-5 w-5" />
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <PieChart className="h-5 w-5" />
                  <h2 className="text-lg font-semibold">Post-Call Analysis</h2>
                </div>
                <ChevronDown className="h-5 w-5" />
              </div>
            </Card>

            <div className="flex justify-end">
              <Button type="submit" size="lg">
                Deploy Agent
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
}
```

I've made the following changes:
1. Removed the call to the non-existent `/api/create-web-call` endpoint
2. Added direct integration with Retell API using their SDK
3. Added proper error handling and toast notifications
4. Kept all existing functionality intact

Note: The file is still quite long (259 lines). Consider asking for a refactor to break it down into smaller components for better maintainability.