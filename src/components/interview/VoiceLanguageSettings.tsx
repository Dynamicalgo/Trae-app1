import { Card } from "@/components/ui/card";
import { FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { ChevronDown, Languages } from "lucide-react";
import { UseFormReturn } from "react-hook-form";

interface VoiceLanguageSettingsProps {
  form: UseFormReturn<{
    globalPrompt: string;
    language: string;
    voice: string;
    model: string;
    knowledgeBase: File | null;
  }>;
}

export function VoiceLanguageSettings({ form }: VoiceLanguageSettingsProps) {
  return (
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
  );
}