import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

export default function CreateInterview() {
  const navigate = useNavigate();
  const form = useForm({
    defaultValues: {
      description: "",
      questions: [""],
      knowledgeBase: null as File | null,
    },
  });

  const onSubmit = (data: any) => {
    console.log(data);
    navigate("/send-invite");
  };

  const addQuestion = () => {
    const currentQuestions = form.getValues("questions");
    form.setValue("questions", [...currentQuestions, ""]);
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">
          Create A.I Interview Session
        </h1>
        <p className="text-muted-foreground">
          Set up and customize your AI-powered interview session
        </p>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <Card className="p-6">
            <h2 className="text-lg font-semibold mb-4">1. Describe Interview Content</h2>
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Interview Description</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Describe the purpose and context of this interview..."
                      className="min-h-[100px]"
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          </Card>

          <Card className="p-6">
            <h2 className="text-lg font-semibold mb-4">2. Interview Questions</h2>
            {form.watch("questions").map((_, index) => (
              <FormField
                key={index}
                control={form.control}
                name={`questions.${index}`}
                render={({ field }) => (
                  <FormItem className="mb-4">
                    <FormLabel>Question {index + 1}</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your question..." {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
            ))}
            <Button type="button" variant="outline" onClick={addQuestion}>
              Add Question
            </Button>
          </Card>

          <Card className="p-6">
            <h2 className="text-lg font-semibold mb-4">3. Knowledge Base</h2>
            <FormField
              control={form.control}
              name="knowledgeBase"
              render={({ field: { value, onChange, ...field } }) => (
                <FormItem>
                  <FormLabel>Upload PDF Document</FormLabel>
                  <FormControl>
                    <Input
                      type="file"
                      accept=".pdf"
                      onChange={(e) => onChange(e.target.files?.[0] || null)}
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          </Card>

          <div className="flex justify-end">
            <Button type="submit" size="lg">
              Deploy Agent
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}