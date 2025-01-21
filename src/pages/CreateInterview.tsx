import { Form } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { VoiceLanguageSettings } from "@/components/interview/VoiceLanguageSettings";
import { GlobalPromptSettings } from "@/components/interview/GlobalPromptSettings";
import { KnowledgeBaseSettings } from "@/components/interview/KnowledgeBaseSettings";
import { AdditionalSettings } from "@/components/interview/AdditionalSettings";
import { ConversationFlow } from "@/components/interview/ConversationFlow";

export default function CreateInterview() {
  const form = useForm({
    defaultValues: {
      globalPrompt: "",
      language: "English",
      voice: "Grace",
      model: "GPT-4",
      knowledgeBase: null as File | null,
    },
  });

  return (
    <div className="flex gap-6 h-[calc(100vh-4rem)] -mx-8">
      <div className="w-2/3">
        <ConversationFlow />
      </div>

      {/* Right Column - Settings */}
      <div className="w-1/3 overflow-y-auto space-y-6">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Agent Settings</h1>
          <p className="text-muted-foreground">Configure your AI interviewer</p>
        </div>

        <Form {...form}>
          <form className="space-y-6">
            <VoiceLanguageSettings form={form} />
            <GlobalPromptSettings form={form} />
            <KnowledgeBaseSettings form={form} />
            <AdditionalSettings />
          </form>
        </Form>
      </div>
    </div>
  );
}