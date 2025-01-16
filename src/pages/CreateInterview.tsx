import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { VoiceLanguageSettings } from "@/components/interview/VoiceLanguageSettings";
import { GlobalPromptSettings } from "@/components/interview/GlobalPromptSettings";
import { KnowledgeBaseSettings } from "@/components/interview/KnowledgeBaseSettings";
import { AdditionalSettings } from "@/components/interview/AdditionalSettings";
import { ConversationFlow } from "@/components/interview/ConversationFlow";

export default function CreateInterview() {
  const navigate = useNavigate();
  const form = useForm({
    defaultValues: {
      globalPrompt: "",
      language: "English",
      voice: "Grace",
      model: "GPT-4",
      knowledgeBase: null as File | null,
    },
  });

  const onSubmit = (data: any) => {
    console.log(data);
    navigate("/send-invite");
  };

  return (
    <div className="flex gap-6 h-[calc(100vh-4rem)] -mx-8">
      <ConversationFlow />

      {/* Right Column - Settings */}
      <div className="w-1/3 overflow-y-auto space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">Agent Settings</h1>
            <p className="text-muted-foreground">Configure your AI interviewer</p>
          </div>
          <Button 
            variant="outline"
            onClick={() => window.open('https://dashboard.retellai.com/agents/agent_98e7f1d1c951078b86a23f3ddb', '_blank')}
          >
            Test
          </Button>
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <VoiceLanguageSettings form={form} />
            <GlobalPromptSettings form={form} />
            <KnowledgeBaseSettings form={form} />
            <AdditionalSettings />

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