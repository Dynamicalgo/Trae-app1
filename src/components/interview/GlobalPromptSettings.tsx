import { Card } from "@/components/ui/card";
import { FormControl, FormField, FormItem } from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { ChevronDown, Globe } from "lucide-react";
import { UseFormReturn } from "react-hook-form";

interface GlobalPromptSettingsProps {
  form: UseFormReturn<{
    globalPrompt: string;
    language: string;
    voice: string;
    model: string;
    knowledgeBase: File | null;
  }>;
}

export function GlobalPromptSettings({ form }: GlobalPromptSettingsProps) {
  return (
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
  );
}