import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { useToast } from "@/components/ui/use-toast";

export default function SendInvite() {
  const { toast } = useToast();
  const form = useForm({
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = (data: { email: string }) => {
    console.log("Sending invite to:", data.email);
    toast({
      title: "Invite Sent",
      description: `An invitation has been sent to ${data.email}`,
    });
    form.reset();
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">
          Send Interview Invitation
        </h1>
        <p className="text-muted-foreground">
          Invite candidates to participate in the AI interview session
        </p>
      </div>

      <Card className="p-6">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Candidate Email</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="Enter candidate's email address..."
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <Button type="submit">
              Send Invitation
            </Button>
          </form>
        </Form>
      </Card>
    </div>
  );
}