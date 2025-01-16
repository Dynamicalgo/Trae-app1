import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { FormControl, FormField, FormItem } from "@/components/ui/form";
import { ChevronDown, MessageSquare, Plus } from "lucide-react";
import { UseFormReturn } from "react-hook-form";

interface KnowledgeBaseSettingsProps {
  form: UseFormReturn<{
    globalPrompt: string;
    language: string;
    voice: string;
    model: string;
    knowledgeBase: File | null;
  }>;
}

export function KnowledgeBaseSettings({ form }: KnowledgeBaseSettingsProps) {
  return (
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
  );
}