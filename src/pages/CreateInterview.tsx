import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { ChevronDown, Globe, Languages, MessageSquare, Mic, Phone, PieChart, Plus } from "lucide-react";
import {
  ReactFlow,
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';

const initialNodes = [
  {
    id: '1',
    type: 'input',
    data: { label: 'Start Call' },
    position: { x: 250, y: 25 },
  },
  {
    id: '2',
    data: { label: 'Introduction' },
    position: { x: 250, y: 125 },
  },
  {
    id: '3',
    data: { label: 'Ask Questions' },
    position: { x: 250, y: 225 },
  },
  {
    id: '4',
    type: 'output',
    data: { label: 'End Call' },
    position: { x: 250, y: 325 },
  },
];

const initialEdges = [
  { id: 'e1-2', source: '1', target: '2' },
  { id: 'e2-3', source: '2', target: '3' },
  { id: 'e3-4', source: '3', target: '4' },
];

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

  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = (params: any) => setEdges((eds) => addEdge(params, eds));

  const onSubmit = (data: any) => {
    console.log(data);
    navigate("/send-invite");
  };

  return (
    <div className="flex gap-6 h-[calc(100vh-6rem)]">
      {/* Left Column - Settings */}
      <div className="w-1/2 overflow-y-auto space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">
              Agent Settings
            </h1>
            <p className="text-muted-foreground">
              Configure your AI interviewer settings and behavior
            </p>
          </div>
          <Button variant="outline">Test</Button>
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

      {/* Right Column - Workflow Builder */}
      <div className="w-1/2 bg-background rounded-lg border">
        <div className="p-4 border-b">
          <h2 className="text-lg font-semibold">Workflow Builder</h2>
          <p className="text-sm text-muted-foreground">Design your agent's conversation flow</p>
        </div>
        <div style={{ height: 'calc(100% - 85px)' }}>
          <ReactFlow
            nodes={nodes}
            edges={edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onConnect={onConnect}
            fitView
          >
            <Controls />
            <MiniMap />
            <Background />
          </ReactFlow>
        </div>
      </div>
    </div>
  );
}